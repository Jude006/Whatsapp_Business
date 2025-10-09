// src/components/dashboard/layout/DashboardNav.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../../context/AuthContext';

const DashboardNav = ({ setShowSideBar, showSideBar }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get page title based on current route
  const getPageTitle = () => {
    const path = location.pathname;
    
    const titleMap = {
      '/dashboard': 'Dashboard Overview',
      '/dashboard/analytics': 'Analytics',
      '/dashboard/messages': 'Messages',
      '/dashboard/broadcasts': 'Broadcasts',
      '/dashboard/contacts': 'Contacts',
      '/dashboard/catalog': 'Product Catalog',
      '/dashboard/automations': 'Automations',
      '/dashboard/profile': 'Profile Settings',
      '/dashboard/billing': 'Billing & Plan',
      '/dashboard/connect-whatsapp': 'Connect WhatsApp',
      '/dashboard/settings': 'Settings'
    };

    return titleMap[path] || 'Dashboard';
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    if (!user?.fullName) return 'U';
    return user.fullName
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Get plan name with proper formatting
  const getPlanName = () => {
    if (!user?.subscription?.plan) return 'Free Plan';
    
    const planMap = {
      'starter': 'Starter Plan',
      'professional': 'Professional Plan',
      'business': 'Business Plan'
    };
    
    return planMap[user.subscription.plan] || 'Free Plan';
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Check if user has unread notifications (you can implement this later)
  const hasUnreadNotifications = false;

  return (
    <nav className="sticky top-0 z-40 px-6 py-4 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowSideBar(!showSideBar)}
            className="p-2 text-gray-600 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Breadcrumb or Page Title */}
          <div className="ml-4 lg:ml-0">
            <h1 className="text-xl font-semibold text-gray-900 font-heading">
              {getPageTitle()}
            </h1>
            {location.pathname !== '/dashboard' && (
              <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                <Link to="/dashboard" className="hover:text-primary-600">Dashboard</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-700">{getPageTitle()}</span>
              </nav>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 transition-colors duration-200 rounded-lg hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 0-6 6v2.25l-2.47 2.47a.75.75 0 0 0 .53 1.28h15.88a.75.75 0 0 0 .53-1.28L16.5 12V9.75a6 6 0 0 0-6-6z" />
            </svg>
            {hasUnreadNotifications && (
              <span className="absolute w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-1 -right-1"></span>
            )}
          </button>

          {/* WhatsApp Connection Status */}
          {!user?.whatsapp?.connected && (
            <Link
              to="/dashboard/connect-whatsapp"
              className="flex items-center px-3 py-2 text-sm font-medium text-orange-700 border border-orange-200 rounded-lg bg-orange-50 hover:bg-orange-100"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Connect WhatsApp
            </Link>
          )}

          {/* User Menu */}
          <div className="relative user-menu-container">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center p-2 space-x-3 transition-colors duration-200 rounded-lg hover:bg-gray-100"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-500">
                <span className="text-sm font-semibold text-white">
                  {getUserInitials()}
                </span>
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.fullName || 'User Name'}
                </p>
                <p className="text-xs text-gray-500">
                  {getPlanName()}
                  {user?.subscription?.status === 'trial' && (
                    <span className="ml-1 text-orange-600">(Trial)</span>
                  )}
                </p>
              </div>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                  showUserMenu ? 'rotate-180' : ''
                }`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 z-50 w-56 py-2 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl"
              >
                {/* User Info */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {user?.fullName || 'User Name'}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {user?.email}
                  </p>
                  <p className="mt-1 text-xs font-medium text-primary-600">
                    {getPlanName()}
                  </p>
                </div>

                {/* Menu Items */}
                <Link
                  to="/dashboard/profile"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50"
                  onClick={() => setShowUserMenu(false)}
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile Settings
                </Link>

                <Link
                  to="/dashboard/billing"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50"
                  onClick={() => setShowUserMenu(false)}
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  Billing & Plan
                </Link>

                <Link
                  to="/dashboard/settings"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 transition-colors duration-150 hover:bg-gray-50"
                  onClick={() => setShowUserMenu(false)}
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Settings
                </Link>

                <div className="my-1 border-t border-gray-200"></div>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 transition-colors duration-150 hover:bg-red-50"
                >
                  <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Sign Out
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;