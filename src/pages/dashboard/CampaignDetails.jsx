import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft,
  BarChart3,
  Users,
  Clock,
  Target,
  Edit3,
  Play,
  Pause,
  MoreVertical,
  Send,
  Eye,
  MessageCircle
} from 'lucide-react';

const CampaignDetails = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock campaign data
  const campaign = {
    id: 1,
    name: 'Black Friday Sale 2024',
    type: 'Broadcast',
    status: 'running',
    audience: 'All Customers',
    recipients: 1245,
    scheduled: 'Nov 25, 2024, 08:00 AM',
    created: 'Nov 20, 2024',
    budget: '₦25,000',
    message: '🎉 Black Friday Special! Get 50% OFF on all products this Friday only! Use code: BF50. Shop now: [Link]',
    progress: 65,
    delivered: 810,
    opened: 567,
    replied: 89,
    clicked: 234,
    conversion: 45
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'performance', label: 'Performance' },
    { id: 'audience', label: 'Audience' },
    { id: 'messages', label: 'Messages' }
  ];

  const performanceData = {
    deliveryRate: '98.5%',
    openRate: '70.0%',
    replyRate: '11.0%',
    clickRate: '28.9%',
    conversionRate: '5.6%'
  };

  const audienceSegments = [
    { segment: 'VIP Customers', count: 89, engagement: '85%' },
    { segment: 'Regular Customers', count: 756, engagement: '72%' },
    { segment: 'New Customers', count: 400, engagement: '45%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard/campaigns"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Campaigns
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-heading">{campaign.name}</h1>
                <p className="mt-1 text-gray-600">Campaign details and performance analytics</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <Edit3 className="w-4 h-4" />
                Edit Campaign
              </motion.button>
              
              {campaign.status === 'running' ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 bg-orange-500 rounded-xl hover:bg-orange-600"
                >
                  <Pause className="w-4 h-4" />
                  Pause Campaign
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 bg-green-500 rounded-xl hover:bg-green-600"
                >
                  <Play className="w-4 h-4" />
                  Start Campaign
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Campaign Info */}
          <div className="space-y-6 lg:col-span-1">
            {/* Campaign Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Campaign Details</h3>
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600">Type</p>
                  <p className="font-medium text-gray-900">{campaign.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    campaign.status === 'running' 
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
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
                <div>
                  <p className="text-sm text-gray-600">Created</p>
                  <p className="font-medium text-gray-900">{campaign.created}</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <h3 className="mb-4 font-semibold text-gray-900">Quick Actions</h3>
              <div className="space-y-3">
                <button className="flex items-center w-full gap-3 p-3 text-left transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Send className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-gray-900">Send Test Message</p>
                    <p className="text-sm text-gray-600">Preview before sending</p>
                  </div>
                </button>
                <button className="flex items-center w-full gap-3 p-3 text-left transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Users className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-gray-900">Audience Report</p>
                    <p className="text-sm text-gray-600">View recipient details</p>
                  </div>
                </button>
                <button className="flex items-center w-full gap-3 p-3 text-left transition-colors border border-gray-200 rounded-lg hover:bg-gray-50">
                  <BarChart3 className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-gray-900">Export Data</p>
                    <p className="text-sm text-gray-600">Download performance report</p>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content & Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
              {/* Tabs */}
              <div className="border-b border-gray-200">
                <div className="flex p-6 space-x-1">
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
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    {/* Progress */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Delivery Progress</h4>
                        <span className="text-sm text-gray-600">{campaign.progress}% complete</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 rounded-full">
                        <div
                          className="h-3 transition-all duration-300 bg-green-500 rounded-full"
                          style={{ width: `${campaign.progress}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{campaign.delivered}</p>
                          <p className="text-sm text-gray-600">Delivered</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{campaign.opened}</p>
                          <p className="text-sm text-gray-600">Opened</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{campaign.replied}</p>
                          <p className="text-sm text-gray-600">Replied</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{campaign.conversion}</p>
                          <p className="text-sm text-gray-600">Converted</p>
                        </div>
                      </div>
                    </div>

                    {/* Message Preview */}
                    <div>
                      <h4 className="mb-3 font-semibold text-gray-900">Message Content</h4>
                      <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                        <p className="text-gray-700">{campaign.message}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'performance' && (
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {Object.entries(performanceData).map(([key, value]) => (
                        <div key={key} className="p-4 text-center border border-gray-200 rounded-lg">
                          <p className="text-2xl font-bold text-gray-900">{value}</p>
                          <p className="text-sm text-gray-600 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Engagement Chart Placeholder */}
                    <div className="p-8 border border-gray-200 rounded-lg bg-gray-50">
                      <div className="text-center">
                        <BarChart3 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                        <p className="text-gray-600">Engagement analytics chart will be displayed here</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'audience' && (
                  <div className="space-y-6">
                    <h4 className="font-semibold text-gray-900">Audience Segments</h4>
                    <div className="space-y-4">
                      {audienceSegments.map((segment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{segment.segment}</p>
                            <p className="text-sm text-gray-600">{segment.count} contacts</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900">{segment.engagement}</p>
                            <p className="text-sm text-gray-600">Engagement</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'messages' && (
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-lg">
                          <Send className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Initial Broadcast</p>
                          <p className="text-sm text-gray-600">Sent to all recipients</p>
                        </div>
                      </div>
                      <p className="text-gray-700">{campaign.message}</p>
                      <div className="flex gap-4 mt-3 text-sm text-gray-600">
                        <span>📨 {campaign.delivered} delivered</span>
                        <span>👁️ {campaign.opened} opened</span>
                        <span>💬 {campaign.replied} replied</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;