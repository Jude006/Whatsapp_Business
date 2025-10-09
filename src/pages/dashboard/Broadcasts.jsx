import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus, 
  Send, 
  Clock, 
  Users, 
  BarChart3,
  MoreVertical,
  Edit3,
  Trash2,
  Calendar,
  ChevronDown
} from 'lucide-react';

const Broadcasts = () => {
  const [activeTab, setActiveTab] = useState('drafts');
  const [selectedBroadcasts, setSelectedBroadcasts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const broadcasts = {
    drafts: [
      {
        id: 1,
        name: 'New Product Launch',
        recipients: 150,
        scheduled: 'Not scheduled',
        status: 'draft',
        created: '2 hours ago',
        progress: 0
      },
      {
        id: 2,
        name: 'Weekend Sale Announcement',
        recipients: 89,
        scheduled: 'Not scheduled',
        status: 'draft',
        created: '1 day ago',
        progress: 0
      }
    ],
    scheduled: [
      {
        id: 3,
        name: 'Monthly Newsletter',
        recipients: 234,
        scheduled: 'Tomorrow, 10:00 AM',
        status: 'scheduled',
        created: '3 days ago',
        progress: 0
      }
    ],
    sent: [
      {
        id: 4,
        name: 'Welcome Message',
        recipients: 56,
        scheduled: 'Dec 15, 10:30 AM',
        status: 'sent',
        created: '1 week ago',
        progress: 100,
        delivered: 52,
        read: 48,
        replied: 12
      },
      {
        id: 5,
        name: 'Black Friday Promo',
        recipients: 189,
        scheduled: 'Nov 25, 8:00 AM',
        status: 'sent',
        created: '2 weeks ago',
        progress: 100,
        delivered: 178,
        read: 156,
        replied: 34
      }
    ]
  };

  const stats = {
    total: 1245,
    scheduled: 1,
    sent: 2,
    delivered: 230,
    readRate: '78%',
    replyRate: '12%'
  };

  const tabs = [
    { id: 'drafts', label: 'Drafts', count: broadcasts.drafts.length },
    { id: 'scheduled', label: 'Scheduled', count: broadcasts.scheduled.length },
    { id: 'sent', label: 'Sent', count: broadcasts.sent.length }
  ];

  const handleSelectBroadcast = (id) => {
    setSelectedBroadcasts(prev =>
      prev.includes(id)
        ? prev.filter(broadcastId => broadcastId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    const currentBroadcasts = broadcasts[activeTab];
    if (selectedBroadcasts.length === currentBroadcasts.length) {
      setSelectedBroadcasts([]);
    } else {
      setSelectedBroadcasts(currentBroadcasts.map(b => b.id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'sent': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Broadcasts</h1>
              <p className="mt-2 text-gray-600">Create and manage bulk messages for your contacts</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Plus className="w-4 h-4" />
              New Broadcast
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Total Contacts', value: stats.total, icon: Users, color: 'text-primary-500', bg: 'bg-primary-50' },
            { label: 'Scheduled', value: stats.scheduled, icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Sent Today', value: stats.sent, icon: Send, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Avg. Read Rate', value: stats.readRate, icon: BarChart3, color: 'text-purple-500', bg: 'bg-purple-50' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex items-center justify-between p-6">
              <div className="flex space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'text-primary-700 bg-primary-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                    {tab.count > 0 && (
                      <span className={`ml-2 px-1.5 py-0.5 text-xs rounded-full ${
                        activeTab === tab.id
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                  <input
                    type="text"
                    placeholder="Search broadcasts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                {/* Filter */}
                <button className="flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  Filter
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Broadcasts List */}
          <div className="p-6">
            {selectedBroadcasts.length > 0 && (
              <div className="flex items-center justify-between p-4 mb-4 rounded-lg bg-primary-50">
                <p className="text-primary-700">
                  {selectedBroadcasts.length} broadcast{selectedBroadcasts.length !== 1 ? 's' : ''} selected
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm transition-colors bg-white border rounded-lg text-primary-600 border-primary-300 hover:bg-primary-50">
                    Schedule
                  </button>
                  <button className="px-3 py-1 text-sm text-red-600 transition-colors bg-white border border-red-300 rounded-lg hover:bg-red-50">
                    Delete
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {broadcasts[activeTab].map((broadcast) => (
                <motion.div
                  key={broadcast.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl transition-all ${
                    selectedBroadcasts.includes(broadcast.id)
                      ? 'bg-primary-50 border-primary-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedBroadcasts.includes(broadcast.id)}
                    onChange={() => handleSelectBroadcast(broadcast.id)}
                    className="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
                  />

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{broadcast.name}</h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(broadcast.status)}`}>
                        {broadcast.status.charAt(0).toUpperCase() + broadcast.status.slice(1)}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {broadcast.recipients} recipients
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {broadcast.scheduled}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Created {broadcast.created}
                      </div>
                    </div>

                    {/* Progress Bar for Sent Broadcasts */}
                    {broadcast.status === 'sent' && (
                      <div className="mt-3">
                        <div className="flex justify-between mb-1 text-xs text-gray-600">
                          <span>Delivery Progress</span>
                          <span>{broadcast.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 transition-all duration-300 bg-green-500 rounded-full"
                            style={{ width: `${broadcast.progress}%` }}
                          ></div>
                        </div>
                        <div className="flex gap-4 mt-2 text-xs text-gray-600">
                          <span>📨 Delivered: {broadcast.delivered}</span>
                          <span>👁️ Read: {broadcast.read}</span>
                          <span>💬 Replied: {broadcast.replied}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {broadcast.status === 'draft' && (
                      <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    )}
                    {broadcast.status === 'scheduled' && (
                      <button className="px-3 py-1 text-sm text-gray-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                        Reschedule
                      </button>
                    )}
                    <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-red-600">
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}

              {broadcasts[activeTab].length === 0 && (
                <div className="py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                    <Send className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">No broadcasts found</h3>
                  <p className="text-gray-600">Get started by creating your first broadcast</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcasts;