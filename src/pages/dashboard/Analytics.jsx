import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  Target,
  TrendingUp,
  Calendar,
  Download,
  Filter,
  ChevronDown
} from 'lucide-react';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');

  const stats = {
    totalMessages: 12456,
    activeContacts: 2345,
    broadcastSent: 45,
    engagementRate: '24.5%',
    responseRate: '18.3%',
    conversionRate: '8.7%',
    revenue: '₦1,245,800'
  };

  const performanceData = {
    messages: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      sent: [120, 190, 300, 500, 200, 300, 450],
      received: [45, 120, 180, 240, 100, 150, 200]
    },
    engagement: {
      labels: ['VIP', 'Regular', 'New', 'Inactive'],
      data: [85, 72, 45, 12]
    }
  };

  const topCampaigns = [
    { name: 'Black Friday Sale', engagement: '78%', conversion: '12%', revenue: '₦450,000' },
    { name: 'Welcome Campaign', engagement: '65%', conversion: '8%', revenue: '₦120,000' },
    { name: 'Product Launch', engagement: '72%', conversion: '15%', revenue: '₦280,000' }
  ];

  const contactGrowth = [
    { period: 'Jan', new: 45, total: 1245 },
    { period: 'Feb', new: 67, total: 1312 },
    { period: 'Mar', new: 89, total: 1401 },
    { period: 'Apr', new: 56, total: 1457 },
    { period: 'May', new: 78, total: 1535 },
    { period: 'Jun', new: 94, total: 1629 }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'messages', label: 'Messages' },
    { id: 'campaigns', label: 'Campaigns' },
    { id: 'revenue', label: 'Revenue' }
  ];

  const dateRanges = [
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Analytics</h1>
              <p className="mt-2 text-gray-600">Track performance and make data-driven decisions</p>
            </div>
            
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-3 py-2 text-gray-600 border border-gray-300 rounded-lg">
                <Calendar className="w-4 h-4" />
                <select 
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="bg-transparent border-none focus:outline-none focus:ring-0"
                >
                  {dateRanges.map(range => (
                    <option key={range.id} value={range.id}>{range.label}</option>
                  ))}
                </select>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Download className="w-4 h-4" />
                Export Report
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Total Messages', value: stats.totalMessages.toLocaleString(), icon: MessageCircle, color: 'text-blue-500', bg: 'bg-blue-50', change: '+12%' },
            { label: 'Active Contacts', value: stats.activeContacts.toLocaleString(), icon: Users, color: 'text-green-500', bg: 'bg-green-50', change: '+8%' },
            { label: 'Engagement Rate', value: stats.engagementRate, icon: TrendingUp, color: 'text-purple-500', bg: 'bg-purple-50', change: '+5%' },
            { label: 'Total Revenue', value: stats.revenue, icon: BarChart3, color: 'text-primary-500', bg: 'bg-primary-50', change: '+23%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="flex items-center text-sm font-medium text-green-600">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
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
                      </button>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chart Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h4 className="mb-4 font-semibold text-gray-900">Message Activity</h4>
                      <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
                        <div className="text-center">
                          <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-600">Message activity chart will be displayed here</p>
                          <p className="mt-2 text-sm text-gray-500">Showing data for {dateRange}</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-semibold text-gray-900">Engagement by Segment</h4>
                        <div className="space-y-3">
                          {performanceData.engagement.labels.map((label, index) => (
                            <div key={label} className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">{label}</span>
                              <div className="flex items-center gap-2">
                                <div className="w-20 h-2 bg-gray-200 rounded-full">
                                  <div
                                    className="h-2 rounded-full bg-primary-500"
                                    style={{ width: `${performanceData.engagement.data[index]}%` }}
                                  ></div>
                                </div>
                                <span className="w-8 text-sm font-medium text-gray-900">
                                  {performanceData.engagement.data[index]}%
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="mb-4 font-semibold text-gray-900">Response Metrics</h4>
                        <div className="space-y-4">
                          {[
                            { label: 'Response Rate', value: stats.responseRate },
                            { label: 'Conversion Rate', value: stats.conversionRate },
                            { label: 'Avg Response Time', value: '2.4min' }
                          ].map((metric, index) => (
                            <div key={metric.label} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                              <span className="text-sm text-gray-600">{metric.label}</span>
                              <span className="font-semibold text-gray-900">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'campaigns' && (
                  <div>
                    <h4 className="mb-4 font-semibold text-gray-900">Top Performing Campaigns</h4>
                    <div className="space-y-4">
                      {topCampaigns.map((campaign, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{campaign.name}</p>
                            <div className="flex gap-4 mt-1 text-sm text-gray-600">
                              <span>Engagement: {campaign.engagement}</span>
                              <span>Conversion: {campaign.conversion}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-primary-600">{campaign.revenue}</p>
                            <p className="text-sm text-gray-600">Revenue</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Contact Growth */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <h3 className="mb-4 font-semibold text-gray-900">Contact Growth</h3>
              <div className="space-y-3">
                {contactGrowth.map((growth, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{growth.period}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-gray-600">+{growth.new}</span>
                      <span className="text-sm font-medium text-gray-900">{growth.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Performance Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <h3 className="mb-4 font-semibold text-gray-900">Performance Summary</h3>
              <div className="space-y-4">
                {[
                  { label: 'Messages Sent', value: '12,456', trend: 'up' },
                  { label: 'Messages Received', value: '8,923', trend: 'up' },
                  { label: 'Broadcasts Sent', value: '45', trend: 'up' },
                  { label: 'Active Conversations', value: '234', trend: 'down' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{item.value}</span>
                      <TrendingUp className={`w-4 h-4 ${
                        item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Insights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 border bg-primary-50 border-primary-200 rounded-2xl"
            >
              <h3 className="mb-3 font-semibold text-primary-900">AI Insights</h3>
              <div className="space-y-2 text-sm text-primary-800">
                <p>• Best time to send messages: 2 PM - 4 PM</p>
                <p>• VIP customers are 3x more likely to convert</p>
                <p>• Campaigns with emojis get 25% more replies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;