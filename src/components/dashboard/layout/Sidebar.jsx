// src/components/dashboard/layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard,
  MessageSquare,
  Megaphone,
  Bot,
  FileText,
  Target,
  Users,
  ShoppingCart,
  BarChart3,
  UserCog,
  Settings,
  CreditCard,
  Plug,
  Key,
  X
} from 'lucide-react';

const Sidebar = ({ setShowSideBar }) => {
  const location = useLocation();

  const menuItems = [
    {
      title: 'Overview',
      path: '/dashboard',
      icon: LayoutDashboard,
      color: 'text-blue-500'
    },
    {
      title: 'Messages',
      path: '/dashboard/messages',
      icon: MessageSquare,
      color: 'text-green-500'
    },
    {
      title: 'Broadcasts',
      path: '/dashboard/broadcasts',
      icon: Megaphone,
      color: 'text-orange-500'
    },
    {
      title: 'Auto-Responder',
      path: '/dashboard/auto-responder',
      icon: Bot,
      color: 'text-purple-500'
    },
    {
      title: 'Templates',
      path: '/dashboard/templates',
      icon: FileText,
      color: 'text-indigo-500'
    },
    {
      title: 'Campaigns',
      path: '/dashboard/campaigns',
      icon: Target,
      color: 'text-red-500'
    },
    {
      title: 'Contacts',
      path: '/dashboard/contacts',
      icon: Users,
      color: 'text-cyan-500'
    },
    {
      title: 'Catalog',
      path: '/dashboard/catalog',
      icon: ShoppingCart,
      color: 'text-emerald-500'
    },
    {
      title: 'Analytics',
      path: '/dashboard/analytics',
      icon: BarChart3,
      color: 'text-violet-500'
    },
    {
      title: 'Team',
      path: '/dashboard/team',
      icon: UserCog,
      color: 'text-pink-500'
    }
  ];

  const settingsItems = [
    {
      title: 'Settings',
      path: '/dashboard/settings',
      icon: Settings,
      color: 'text-gray-500'
    },
    {
      title: 'Billing',
      path: '/dashboard/billing',
      icon: CreditCard,
      color: 'text-primary-500'
    },
    {
      title: 'Integrations',
      path: '/dashboard/integrations',
      icon: Plug,
      color: 'text-yellow-500'
    },
    {
      title: 'API',
      path: '/dashboard/api',
      icon: Key,
      color: 'text-gray-600'
    }
  ];

  const isActive = (path) => {
    if (path === '/dashboard') {
      return location.pathname === '/dashboard';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 w-80">
      {/* Logo */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Link to="/dashboard" className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-10 h-10 bg-primary-500 rounded-xl">
            <span className="text-lg font-bold text-white font-heading">WA</span>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900 font-heading">WhatsApp Business Pro</h2>
            <p className="text-xs text-gray-500">Professional Plan</p>
          </div>
        </Link>
        
        {/* Close button for mobile */}
        <button
          onClick={() => setShowSideBar(false)}
          className="p-2 text-gray-400 transition-colors rounded-lg hover:bg-gray-100 hover:text-gray-600 lg:hidden"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex-1 overflow-y-auto">
        <nav className="p-4 space-y-1">
          {/* Main Menu */}
          <div className="mb-6">
            <h3 className="px-3 mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Main
            </h3>
            <div className="space-y-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                const isItemActive = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isItemActive
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      isItemActive 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Settings Menu */}
          <div>
            <h3 className="px-3 mb-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Settings
            </h3>
            <div className="space-y-1">
              {settingsItems.map((item) => {
                const IconComponent = item.icon;
                const isItemActive = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isItemActive
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500 shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg transition-colors ${
                      isItemActive 
                        ? 'bg-primary-100 text-primary-600' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200 group-hover:text-gray-700'
                    }`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>
      </div>

      {/* Upgrade Banner */}
      <div className="p-4 border-t border-gray-200">
        <div className="p-4 rounded-lg shadow-sm bg-gradient-to-r from-primary-500 to-primary-600">
          <div className="flex items-start space-x-3">
            <div className="p-1.5 bg-white bg-opacity-20 rounded-lg">
              <Megaphone className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                Unlock Advanced Features
              </p>
              <p className="mt-1 text-xs text-primary-100">
                Upgrade to Business plan for API access & more
              </p>
              <button className="w-full px-3 py-2 mt-3 text-xs font-semibold transition-colors bg-white rounded-md text-primary-600 hover:bg-gray-50">
                Upgrade Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;