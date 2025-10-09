// src/components/dashboard/messages/Messages.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Phone, 
  Video, 
  Info,
  Send,
  Paperclip,
  Smile,
  Menu
} from 'lucide-react';

const Messages = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  // Mock data - in real app, this would come from your API
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        const mockConversations = [
          {
            id: 1,
            contact: {
              name: 'Chidinma Store',
              phone: '+2348012345678',
              avatar: 'CS',
              lastSeen: '2 min ago',
              status: 'online'
            },
            lastMessage: 'Thank you for the order! When will it be delivered?',
            timestamp: '2 min ago',
            unread: 3,
            isActive: true
          },
          {
            id: 2,
            contact: {
              name: 'Adebayo Enterprises',
              phone: '+2348023456789',
              avatar: 'AE',
              lastSeen: '1 hour ago',
              status: 'offline'
            },
            lastMessage: 'I need more information about your products',
            timestamp: '1 hour ago',
            unread: 0,
            isActive: false
          },
          {
            id: 3,
            contact: {
              name: 'Bola Fashion',
              phone: '+2348034567890',
              avatar: 'BF',
              lastSeen: '3 hours ago',
              status: 'away'
            },
            lastMessage: 'The payment has been confirmed',
            timestamp: '3 hours ago',
            unread: 1,
            isActive: false
          },
          {
            id: 4,
            contact: {
              name: 'Emeka Tech',
              phone: '+2348045678901',
              avatar: 'ET',
              lastSeen: '5 hours ago',
              status: 'online'
            },
            lastMessage: 'Can we schedule a meeting tomorrow?',
            timestamp: '5 hours ago',
            unread: 0,
            isActive: false
          }
        ];

        const mockMessages = [
          {
            id: 1,
            type: 'received',
            content: 'Hello! I\'m interested in your products',
            timestamp: '10:30 AM',
            status: 'delivered'
          },
          {
            id: 2,
            type: 'sent',
            content: 'Welcome! What would you like to know?',
            timestamp: '10:31 AM',
            status: 'read'
          },
          {
            id: 3,
            type: 'received',
            content: 'Thank you for the order! When will it be delivered?',
            timestamp: '10:32 AM',
            status: 'delivered'
          }
        ];

        setConversations(mockConversations);
        setSelectedChat(mockConversations[0]);
        setMessages(mockMessages);
        setLoading(false);
      }, 1000);
    };

    loadData();
  }, []);

  const filteredConversations = conversations.filter(conv =>
    conv.contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    conv.contact.phone.includes(searchTerm)
  );

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      type: 'sent',
      content: newMessage,
      timestamp: 'Just now',
      status: 'sent'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Update conversation last message
    setConversations(prev =>
      prev.map(conv =>
        conv.id === selectedChat.id
          ? {
              ...conv,
              lastMessage: newMessage,
              timestamp: 'Just now',
              unread: 0
            }
          : conv
      )
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-4 border-4 rounded-full border-primary-500 border-t-transparent animate-spin"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Conversations Sidebar */}
      <div className="flex flex-col w-full max-w-md bg-white border-r border-gray-200">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 font-heading">Messages</h1>
            <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
            <input
              type="text"
              placeholder="Search conversations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
            />
            <button className="absolute p-1 text-gray-400 transform -translate-y-1/2 right-3 top-1/2 hover:text-gray-600">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Conversations List */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence>
            {filteredConversations.map((conversation, index) => (
              <motion.div
                key={conversation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-b border-gray-100 cursor-pointer transition-all duration-200 ${
                  selectedChat?.id === conversation.id 
                    ? 'bg-primary-50 border-r-2 border-primary-500' 
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedChat(conversation)}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="flex items-center justify-center w-12 h-12 font-semibold bg-primary-100 text-primary-600 rounded-xl">
                      {conversation.contact.avatar}
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${getStatusColor(conversation.contact.status)}`}></div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-900 truncate">
                        {conversation.contact.name}
                      </h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap">
                        {conversation.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>

                  {/* Unread Badge */}
                  {conversation.unread > 0 && (
                    <div className="flex items-center justify-center w-5 h-5 text-xs font-semibold text-white rounded-full bg-primary-500">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-col flex-1">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 font-semibold bg-primary-100 text-primary-600 rounded-xl">
                    {selectedChat.contact.avatar}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 border-2 border-white rounded-full ${getStatusColor(selectedChat.contact.status)}`}></div>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{selectedChat.contact.name}</h2>
                  <p className="text-sm text-gray-500">{selectedChat.contact.phone} • {selectedChat.contact.lastSeen}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <Phone className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <Info className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-50">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        message.type === 'sent'
                          ? 'bg-primary-500 text-white rounded-br-none'
                          : 'bg-white text-gray-900 rounded-bl-none border border-gray-200'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center gap-2 mt-1 text-xs ${
                        message.type === 'sent' ? 'text-primary-100' : 'text-gray-500'
                      }`}>
                        <span>{message.timestamp}</span>
                        {message.type === 'sent' && (
                          <span className="text-xs">
                            {message.status === 'read' ? '✓✓' : message.status === 'delivered' ? '✓✓' : '✓'}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Message Input */}
            <div className="p-6 bg-white border-t border-gray-200">
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
                    rows="1"
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
          </>
        ) : (
          /* Empty State */
          <div className="flex items-center justify-center flex-1 bg-gray-50">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl">
                <MessageSquare className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">No conversation selected</h3>
              <p className="text-gray-600">Choose a conversation from the list to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;