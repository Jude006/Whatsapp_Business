import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Plus, 
  Bot, 
  Clock, 
  ToggleLeft, 
  ToggleRight,
  Edit3,
  Trash2,
  MoreVertical,
  MessageCircle,
  Zap,
  Users
} from 'lucide-react';

const AutoResponder = () => {
  const [activeRules, setActiveRules] = useState([1, 3]);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const rules = [
    {
      id: 1,
      name: 'Welcome Message',
      trigger: 'hello,hi,hey',
      response: 'Welcome to our store! How can we help you today? 😊',
      status: 'active',
      created: '2 days ago',
      usage: 45
    },
    {
      id: 2,
      name: 'Pricing Inquiry',
      trigger: 'price,cost,how much',
      response: 'Thanks for your interest! Our prices start from ₦5,000. Would you like to see our catalog?',
      status: 'inactive',
      created: '1 week ago',
      usage: 23
    },
    {
      id: 3,
      name: 'Business Hours',
      trigger: 'time,open,hours,close',
      response: 'We\'re open Monday-Friday from 9AM-6PM. Outside these hours, leave a message and we\'ll get back to you!',
      status: 'active',
      created: '3 days ago',
      usage: 67
    },
    {
      id: 4,
      name: 'Order Status',
      trigger: 'order,status,delivery,ship',
      response: 'Please provide your order number and we\'ll check the status for you immediately.',
      status: 'inactive',
      created: '2 weeks ago',
      usage: 89
    }
  ];

  const stats = {
    totalRules: 4,
    activeRules: 2,
    messagesSent: 224,
    responseRate: '92%'
  };

  const toggleRule = (id) => {
    setActiveRules(prev =>
      prev.includes(id)
        ? prev.filter(ruleId => ruleId !== id)
        : [...prev, id]
    );
  };

  const filteredRules = rules.filter(rule =>
    rule.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rule.trigger.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Auto-Responder</h1>
              <p className="mt-2 text-gray-600">Automate responses and save time with smart reply rules</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <Plus className="w-4 h-4" />
              New Rule
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
            { label: 'Total Rules', value: stats.totalRules, icon: Bot, color: 'text-primary-500', bg: 'bg-primary-50' },
            { label: 'Active Rules', value: stats.activeRules, icon: Zap, color: 'text-green-500', bg: 'bg-green-50' },
            { label: 'Messages Sent', value: stats.messagesSent, icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Response Rate', value: stats.responseRate, icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' }
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
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold text-gray-900 font-heading">Response Rules</h2>
              <span className="px-2 py-1 text-sm text-gray-600 bg-gray-100 rounded-lg">
                {filteredRules.length} rules
              </span>
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search rules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Rules List */}
          <div className="p-6">
            <div className="space-y-4">
              {filteredRules.map((rule, index) => (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all border border-gray-200 rounded-xl hover:bg-gray-50"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-semibold text-gray-900">{rule.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          activeRules.includes(rule.id)
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}>
                          {activeRules.includes(rule.id) ? 'Active' : 'Inactive'}
                        </span>
                      </div>

                      {/* Trigger Keywords */}
                      <div className="mb-4">
                        <p className="mb-2 text-sm font-medium text-gray-700">Trigger Keywords:</p>
                        <div className="flex flex-wrap gap-2">
                          {rule.trigger.split(',').map((keyword, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 text-xs rounded-lg bg-primary-100 text-primary-700"
                            >
                              {keyword.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Response */}
                      <div className="mb-4">
                        <p className="mb-2 text-sm font-medium text-gray-700">Response:</p>
                        <div className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                          <p className="text-sm text-gray-700">{rule.response}</p>
                        </div>
                      </div>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Created {rule.created}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          Used {rule.usage} times
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 ml-6">
                      {/* Toggle Switch */}
                      <button
                        onClick={() => toggleRule(rule.id)}
                        className="flex items-center focus:outline-none"
                      >
                        {activeRules.includes(rule.id) ? (
                          <ToggleRight className="w-10 h-6 text-green-500" />
                        ) : (
                          <ToggleLeft className="w-10 h-6 text-gray-400" />
                        )}
                      </button>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-1">
                        <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-white hover:text-gray-600">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredRules.length === 0 && (
                <div className="py-12 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                    <Bot className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">No rules found</h3>
                  <p className="mb-6 text-gray-600">Create your first auto-response rule to get started</p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create First Rule
                  </motion.button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 mt-6 border border-blue-200 bg-blue-50 rounded-2xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Zap className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-blue-900">Pro Tips</h3>
              <ul className="space-y-1 text-sm text-blue-800">
                <li>• Use specific keywords to avoid false triggers</li>
                <li>• Keep responses friendly and helpful</li>
                <li>• Test your rules with different message variations</li>
                <li>• Use placeholders like {`{name}`} for personalization</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AutoResponder;