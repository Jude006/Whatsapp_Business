import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Plus, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  MoreVertical,
  Edit3,
  Trash2,
  MessageCircle,
  Tag,
  ChevronDown
} from 'lucide-react';

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Mock contacts data
  const contacts = [
    {
      id: 1,
      name: 'Chidinma Adebayo',
      phone: '+2348012345678',
      email: 'chidinma@example.com',
      location: 'Lagos, Nigeria',
      tags: ['VIP', 'Regular Customer'],
      lastContact: '2 hours ago',
      messageCount: 45,
      status: 'active'
    },
    {
      id: 2,
      name: 'Emeka Okoro',
      phone: '+2348023456789',
      email: 'emeka@example.com',
      location: 'Abuja, Nigeria',
      tags: ['New Lead'],
      lastContact: '1 day ago',
      messageCount: 12,
      status: 'active'
    },
    {
      id: 3,
      name: 'Bola Ahmed Store',
      phone: '+2348034567890',
      email: 'bola.store@example.com',
      location: 'Ibadan, Nigeria',
      tags: ['Business', 'Wholesale'],
      lastContact: '3 days ago',
      messageCount: 89,
      status: 'active'
    },
    {
      id: 4,
      name: 'Funke Alabi',
      phone: '+2348045678901',
      email: 'funke@example.com',
      location: 'Port Harcourt, Nigeria',
      tags: ['Inactive'],
      lastContact: '2 weeks ago',
      messageCount: 23,
      status: 'inactive'
    }
  ];

  const stats = {
    total: 1245,
    active: 1120,
    newThisWeek: 45,
    vip: 89
  };

  const filters = [
    { id: 'all', label: 'All Contacts', count: stats.total },
    { id: 'active', label: 'Active', count: stats.active },
    { id: 'vip', label: 'VIP', count: stats.vip },
    { id: 'new', label: 'New This Week', count: stats.newThisWeek }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectContact = (id) => {
    setSelectedContacts(prev =>
      prev.includes(id)
        ? prev.filter(contactId => contactId !== id)
        : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedContacts.length === filteredContacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(filteredContacts.map(contact => contact.id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Contacts</h1>
              <p className="mt-2 text-gray-600">Manage and organize your customer contacts</p>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <Filter className="w-4 h-4" />
                Export
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
              >
                <Plus className="w-4 h-4" />
                Add Contact
              </motion.button>
            </div>
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
            { label: 'Active Contacts', value: stats.active, icon: Users, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'VIP Customers', value: stats.vip, icon: Tag, color: 'text-purple-500', bg: 'bg-purple-50' },
            { label: 'New This Week', value: stats.newThisWeek, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50' }
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
          {/* Header with Filters */}
          <div className="flex flex-col gap-4 p-6 border-b border-gray-200 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeFilter === filter.id
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {filter.label}
                  <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                    activeFilter === filter.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {filter.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Filter Dropdown */}
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Sort
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Contacts List */}
          <div className="p-6">
            {selectedContacts.length > 0 && (
              <div className="flex items-center justify-between p-4 mb-4 rounded-lg bg-primary-50">
                <p className="text-primary-700">
                  {selectedContacts.length} contact{selectedContacts.length !== 1 ? 's' : ''} selected
                </p>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm transition-colors bg-white border rounded-lg text-primary-600 border-primary-300 hover:bg-primary-50">
                    Add to Group
                  </button>
                  <button className="px-3 py-1 text-sm text-red-600 transition-colors bg-white border border-red-300 rounded-lg hover:bg-red-50">
                    Delete
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {filteredContacts.map((contact, index) => (
                <motion.div
                  key={contact.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 border border-gray-200 rounded-xl transition-all ${
                    selectedContacts.includes(contact.id)
                      ? 'bg-primary-50 border-primary-200'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Checkbox */}
                  <input
                    type="checkbox"
                    checked={selectedContacts.includes(contact.id)}
                    onChange={() => handleSelectContact(contact.id)}
                    className="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
                  />

                  {/* Contact Avatar */}
                  <div className="flex items-center justify-center w-12 h-12 font-semibold bg-primary-100 text-primary-600 rounded-xl">
                    {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                  </div>

                  {/* Contact Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <Link 
                        to={`/dashboard/contacts/${contact.id}`}
                        className="font-semibold text-gray-900 transition-colors hover:text-primary-600"
                      >
                        {contact.name}
                      </Link>
                      <div className="flex flex-wrap gap-1">
                        {contact.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-6">
                      <div className="flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {contact.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {contact.messageCount} messages
                      </div>
                    </div>
                  </div>

                  {/* Last Contact & Actions */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Last contact</p>
                      <p className="text-sm font-medium text-gray-900">{contact.lastContact}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <Link
                        to={`/dashboard/contacts/${contact.id}`}
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

              {filteredContacts.length === 0 && (
                <div className="py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">No contacts found</h3>
                  <p className="mb-6 text-gray-600">
                    {searchTerm ? 'Try adjusting your search terms' : 'Get started by adding your first contact'}
                  </p>
                  {!searchTerm && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add First Contact
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

export default Contacts;