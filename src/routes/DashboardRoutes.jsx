// src/routes/DashboardRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from '../components/dashboard/layout/DashboardLayout';
import DashboardOverview from '../pages/dashboard/Overview';
import Messages from '../pages/dashboard/Messages';
import Broadcasts from '../pages/dashboard/Broadcasts';
import AutoResponder from '../pages/dashboard/AutoResponder';
import Contacts from '../pages/dashboard/Contacts';
import ContactDetails from '../pages/dashboard/ContactDetails';
import Catalog from '../pages/dashboard/Catalog';
import ProductDetails from '../pages/dashboard/ProductDetails';
import Analytics from '../pages/dashboard/Analytics';
import Team from '../pages/dashboard/Team';
import Settings from '../pages/dashboard/Settings';
import Billing from '../pages/dashboard/Billing';
import Profile from '../pages/dashboard/Profile';
import Integrations from '../pages/dashboard/Integrations';
import API from '../pages/dashboard/API';
import Templates from '../pages/dashboard/Templates';
import Campaigns from '../pages/dashboard/Campaigns';
import CampaignDetails from '../pages/dashboard/CampaignDetails';
import ConnectWhatsApp from '../pages/dashboard/ConnectWhatsapp';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        {/* Main Dashboard */}
        <Route index element={<DashboardOverview />} />
        <Route path="connect-whatsapp" element={<ConnectWhatsApp />} />
        
        {/* Messaging Section */}
        <Route path="messages" element={<Messages />} />
        <Route path="broadcasts" element={<Broadcasts />} />
        <Route path="auto-responder" element={<AutoResponder />} />
        <Route path="templates" element={<Templates />} />
        
        {/* Campaigns */}
        <Route path="campaigns" element={<Campaigns />} />
        <Route path="campaigns/:id" element={<CampaignDetails />} />
        
        {/* Contacts & CRM */}
        <Route path="contacts" element={<Contacts />} />
        <Route path="contacts/:id" element={<ContactDetails />} />
        
        {/* Catalog Management */}
        <Route path="catalog" element={<Catalog />} />
        <Route path="catalog/products/:id" element={<ProductDetails />} />
        
        {/* Analytics */}
        <Route path="analytics" element={<Analytics />} />
        
        {/* Team Management */}
        <Route path="team" element={<Team />} />
        
        {/* Settings & Configuration */}
        <Route path="settings" element={<Settings />} />
        <Route path="billing" element={<Billing />} />
        <Route path="profile" element={<Profile />} />
        <Route path="integrations" element={<Integrations />} />
        <Route path="api" element={<API />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;