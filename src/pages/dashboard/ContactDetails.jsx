import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  MessageCircle,
  ShoppingCart,
  Tag,
  Edit3,
  MoreVertical,
  Send,
  Paperclip,
  Smile
} from 'lucide-react';

const ContactDetails = () => {
  const { id } = useParams();
  const [newMessage, setNewMessage] = useState('');

  // Mock contact data - in real app, fetch by ID
  const contact = {
    id: 1,
    name: 'Chidinma Adebayo',
    phone: '+2348012345678',
    email: 'chidinma@example.com',
    location: 'Lagos, Nigeria',
    tags: ['VIP', 'Regular Customer'],
    joinedDate: 'Jan 15, 2024',
    totalOrders: 12,
    totalSpent: '₦245,800',
    lastActive: '2 hours ago',
    status: 'active'
  };

  const messages = [
    {
      id: 1,
      type: 'received',
      content: 'Hello! I\'m interested in your new product collection',
      timestamp: '10:30 AM',
      date: 'Today'
    },
    {
      id: 2,
      type: 'sent',
      content: 'Welcome Chidinma! We have some amazing new arrivals. Would you like me to send you the catalog?',
      timestamp: '10:31 AM',
      date: 'Today'
    },
    {
      id: 3,
      type: 'received',
      content: 'Yes please! Also, what are your delivery times for Lagos?',
      timestamp: '10:32 AM',
      date: 'Today'
    },
    {
      id: 4,
      type: 'sent',
      content: 'Great! Delivery in Lagos is 24-48 hours. Here\'s our catalog: [Catalog Link]',
      timestamp: '10:33 AM',
      date: 'Today'
    }
  ];

  const orders = [
    { id: 1, date: 'Dec 15, 2024', amount: '₦25,400', status: 'Delivered' },
    { id: 2, date: 'Nov 28, 2024', amount: '₦18,900', status: 'Delivered' },
    { id: 3, date: 'Nov 12, 2024', amount: '₦32,500', status: 'Delivered' }
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    // Handle send message logic
    setNewMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Link
                to="/dashboard/contacts"
                className="flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Contacts
              </Link>
              <div className="w-px h-6 bg-gray-300"></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 font-heading">{contact.name}</h1>
                <p className="mt-1 text-gray-600">Contact details and conversation history</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <Edit3 className="w-4 h-4" />
                Edit Contact
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
              >
                <MessageCircle className="w-4 h-4" />
                Send Message
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Column - Contact Info & Orders */}
          <div className="space-y-6 lg:col-span-1">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="text-center">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 text-2xl font-semibold bg-primary-100 text-primary-600 rounded-2xl">
                  {contact.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                </div>
                <h2 className="text-xl font-bold text-gray-900 font-heading">{contact.name}</h2>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {contact.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {contact.joinedDate}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <MessageCircle className="w-4 h-4" />
                  <span>Last active {contact.lastActive}</span>
                </div>
              </div>
            </motion.div>

            {/* Order History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Order History</h3>
                <span className="text-sm text-gray-500">{contact.totalOrders} orders</span>
              </div>
              
              <div className="space-y-3">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">Order #{order.id}</p>
                      <p className="text-sm text-gray-600">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{order.amount}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between p-3 mt-4 rounded-lg bg-gray-50">
                <span className="font-medium text-gray-900">Total Spent</span>
                <span className="font-bold text-primary-600">{contact.totalSpent}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Conversation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col lg:col-span-2"
          >
            <div className="flex-1 p-6 bg-white border border-gray-200 shadow-sm rounded-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Conversation</h3>
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="space-y-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'sent'
                          ? 'bg-primary-500 text-white rounded-br-none'
                          : 'bg-gray-100 text-gray-900 rounded-bl-none'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center gap-2 mt-1 text-xs ${
                        message.type === 'sent' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        <span>{message.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="mt-6">
                <div className="flex items-end gap-3">
                  <button className="p-3 text-gray-400 transition-colors rounded-xl hover:bg-gray-100 hover:text-gray-600">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  
                  <div className="relative flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type a message..."
                      rows="2"
                      className="w-full px-4 py-3 pr-12 border border-gray-300 resize-none rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                    />
                    <button className="absolute p-1 text-gray-400 right-3 bottom-3 hover:text-gray-600">
                      <Smile className="w-5 h-5" />
                    </button>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className={`p-3 rounded-xl transition-colors ${
                      newMessage.trim()
                        ? 'bg-primary-500 text-white hover:bg-primary-600'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <Send className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;