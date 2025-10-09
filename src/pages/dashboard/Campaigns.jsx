import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Plus, 
  Target, 
  Users, 
  BarChart3,
  Clock,
  MoreVertical,
  Edit3,
  Trash2,
  Play,
  Pause,
  ChevronDown
} from 'lucide-react';

const Campaigns = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('active');
  const [selectedCampaigns, setSelectedCampaigns] = useState([]);

  // Mock campaigns data
  const campaigns = {
    active: [
      {
        id: 1,
        name: 'Black Friday Sale 2024',
        type: 'Broadcast',
        audience: 'All Customers',
        recipients: 1245,
        scheduled: 'Nov 25, 2024',
        status: 'running',
        progress: 65,
        delivered: 810,
        opened: 567,
        replied: 89,
        budget: '₦25,000'
      },
      {
        id: 2,
        name: 'New Product Launch',
        type: 'Sequence',
        audience: 'VIP Customers',
        recipients: 89,
        scheduled: 'Dec 1, 2024',
        status: 'running',
        progress: 30,
        delivered: 27,
        opened: 18,
        replied: 5,
        budget: '₦15,000'
      }
    ],
    scheduled: [
      {
        id: 3,
        name: 'Christmas Promotion',
        type: 'Broadcast',
        audience: 'All Customers',
        recipients: 1245,
        scheduled: 'Dec 20, 2024',
        status: 'scheduled',
        progress: 0,
        budget: '₦30,000'
      }
    ],
    draft: [
      {
        id: 4,
        name: 'Q1 Customer Survey',
        type: 'Survey',
        audience: 'Active Customers',
        recipients: 456,
        scheduled: 'Not scheduled',
        status: 'draft',
        progress: 0,
        budget: '₦8,000'
      }
    ],
    completed: [
      {
        id: 5,
        name: 'Welcome Campaign',
        type: 'Sequence',
        audience: 'New Customers',
        recipients: 234,
        scheduled: 'Oct 15, 2024',
        status: 'completed',
        progress: 100,
        delivered: 234,
        opened: 189,
        replied: 45,
        budget: '₦12,000'
      }
    ]
  };

  const stats = {
    total: 4,
    active: 2,
    scheduled: 1,
    completed: 1,
    totalRecipients: 3018,
    avgEngagement: '24.5%',
    totalSpent: '₦80,000'
  };

  const tabs = [
    { id: 'active', label: 'Active', count: campaigns.active.length },
    { id: 'scheduled', label: 'Scheduled', count: campaigns.scheduled.length },
    { id: 'draft', label: 'Drafts', count: campaigns.draft.length },
    { id: 'completed', label: 'Completed', count: campaigns.completed.length }
  ];

  const filteredCampaigns = campaigns[activeTab].filter(campaign =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      case 'completed': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Broadcast': return 'bg-orange-100 text-orange-700';
      case 'Sequence': return 'bg-blue-100 text-blue-700';
      case 'Survey': return 'bg-green-100 text-green-700';
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
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Campaigns</h1>
              <p className="mt-2 text-gray-600">Create and manage multi-channel marketing campaigns</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
            >
              <Plus className="w-4 h-4" />
              New Campaign
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
            { label: 'Total Campaigns', value: stats.total, icon: Target, color: 'text-primary-500', bg: 'bg-primary-50' },
            { label: 'Active Now', value: stats.active, icon: Play, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Total Recipients', value: stats.totalRecipients, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Avg Engagement', value: stats.avgEngagement, icon: BarChart3, color: 'text-purple-500', bg: 'bg-purple-50' }
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
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
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
                    placeholder="Search campaigns..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
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

          {/* Campaigns List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredCampaigns.map((campaign, index) => (
                <motion.div
                  key={campaign.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all border border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(campaign.type)}`}>
                          {campaign.type}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(campaign.status)}`}>
                          {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div>
                          <p className="text-sm text-gray-600">Audience</p>
                          <p className="font-medium text-gray-900">{campaign.audience}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Recipients</p>
                          <p className="font-medium text-gray-900">{campaign.recipients.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Scheduled</p>
                          <p className="font-medium text-gray-900">{campaign.scheduled}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Budget</p>
                          <p className="font-medium text-gray-900">{campaign.budget}</p>
                        </div>
                      </div>

                      {/* Progress Bar for Active/Completed Campaigns */}
                      {(campaign.status === 'running' || campaign.status === 'completed') && (
                        <div className="mt-4">
                          <div className="flex justify-between mb-2 text-sm text-gray-600">
                            <span>Delivery Progress</span>
                            <span>{campaign.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 rounded-full">
                            <div
                              className="h-2 transition-all duration-300 bg-green-500 rounded-full"
                              style={{ width: `${campaign.progress}%` }}
                            ></div>
                          </div>
                          <div className="flex gap-4 mt-3 text-sm text-gray-600">
                            <span>📨 {campaign.delivered} delivered</span>
                            <span>👁️ {campaign.opened} opened</span>
                            <span>💬 {campaign.replied} replied</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 ml-6">
                      {campaign.status === 'running' && (
                        <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                          <Pause className="w-4 h-4" />
                        </button>
                      )}
                      {campaign.status === 'draft' && (
                        <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                          <Play className="w-4 h-4" />
                        </button>
                      )}
                      <Link
                        to={`/dashboard/campaigns/${campaign.id}`}
                        className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600"
                      >
                        <Edit3 className="w-4 h-4" />
                      </Link>
                      <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredCampaigns.length === 0 && (
                <div className="py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                    <Target className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">No campaigns found</h3>
                  <p className="mb-6 text-gray-600">
                    {searchTerm ? 'Try adjusting your search terms' : 'Create your first campaign to get started'}
                  </p>
                  {!searchTerm && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Create First Campaign
                    </motion.button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;