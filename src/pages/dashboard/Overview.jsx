import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Overview = () => {
  const [stats, setStats] = useState({
    totalContacts: 0,
    messagesSent: 0,
    activeChats: 0,
    broadcastPerformance: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalContacts: 124,
        messagesSent: 856,
        activeChats: 12,
        broadcastPerformance: 78
      });
      
      setRecentActivity([
        { id: 1, type: 'message', content: 'New message from Chidinma', time: '2 min ago', unread: true },
        { id: 2, type: 'broadcast', content: 'Broadcast sent to 50 contacts', time: '1 hour ago', unread: false },
        { id: 3, type: 'contact', content: 'New contact added: Adebayo Stores', time: '3 hours ago', unread: false }
      ]);
    }, 1000);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white border-b border-gray-200"
      >
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">
                Welcome back! 👋
              </h1>
              <p className="mt-2 text-gray-600">
                Here's what's happening with your business today
              </p>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  New Broadcast
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Add Contact
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="p-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4"
        >
          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent-50">
                <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Messages Sent</p>
                <p className="text-2xl font-bold text-gray-900">{stats.messagesSent}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-50">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Active Chats</p>
                <p className="text-2xl font-bold text-gray-900">{stats.activeChats}</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Broadcast Performance</p>
                <p className="text-2xl font-bold text-gray-900">{stats.broadcastPerformance}%</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Setup Guide & Recent Activity */}
        <div className="grid gap-6 mt-6 lg:grid-cols-2">
          {/* Setup Guide */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 font-heading">Get Started</h2>
              <div className="text-sm text-primary-500">2/4 completed</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Create Account</p>
                  <p className="text-sm text-gray-600">Your account is ready</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Verify Email</p>
                  <p className="text-sm text-gray-600">Email verified successfully</p>
                </div>
              </div>

              <Link to="/dashboard/connect-whatsapp">
                <div className="flex items-center gap-4 p-4 border-2 border-primary-200 rounded-xl bg-primary-50 cursor-pointer hover:bg-primary-100 transition-colors">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Connect WhatsApp</p>
                    <p className="text-sm text-gray-600">Connect your WhatsApp number to get started</p>
                  </div>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl opacity-60">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                  <span className="text-sm font-medium text-gray-500">4</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">Send First Message</p>
                  <p className="text-sm text-gray-600">Start engaging with customers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 font-heading">Recent Activity</h2>
              <Link to="/activity" className="text-sm font-medium text-primary-500 hover:text-primary-600">
                View all
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    activity.type === 'message' ? 'bg-blue-100' :
                    activity.type === 'broadcast' ? 'bg-green-100' :
                    'bg-purple-100'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      activity.type === 'message' ? 'text-blue-600' :
                      activity.type === 'broadcast' ? 'text-green-600' :
                      'text-purple-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {activity.type === 'message' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      )}
                      {activity.type === 'broadcast' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                      )}
                      {activity.type === 'contact' && (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                      )}
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{activity.content}</p>
                    <p className="text-sm text-gray-600">{activity.time}</p>
                  </div>
                  {activity.unread && (
                    <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Quick Actions Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <h2 className="mb-4 text-xl font-bold text-gray-900 font-heading">Quick Actions</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Broadcast', icon: '📢', description: 'Send bulk messages', color: 'bg-blue-50', path: '/broadcast' },
              { title: 'Contacts', icon: '👥', description: 'Manage contacts', color: 'bg-green-50', path: '/contacts' },
              { title: 'Auto Reply', icon: '🤖', description: 'Set up auto responses', color: 'bg-purple-50', path: '/auto-reply' },
              { title: 'Analytics', icon: '📊', description: 'View insights', color: 'bg-orange-50', path: '/analytics' }
            ].map((action, index) => (
              <Link key={index} to={action.path}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-6 border border-gray-200 rounded-2xl shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md ${action.color}`}
                >
                  <div className="text-2xl mb-3">{action.icon}</div>
                  <h3 className="font-semibold text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Overview;