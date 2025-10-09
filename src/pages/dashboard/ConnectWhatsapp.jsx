import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';

const ConnectWhatsApp = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [connectionStatus, setConnectionStatus] = useState('');

 const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002';
  const twilioNumber = import.meta.env.TWILIO_WHATSAPP_NUMBER || '+14155238886';
  const sandboxWord = import.meta.env.TWILIO_SANDBOX_WORD || 'vertical-sound';

  useEffect(() => {
    if (user?.whatsapp?.connected) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const steps = [
    { number: 1, title: "Enter Number", description: "Enter your WhatsApp number" },
    { number: 2, title: "Join WhatsApp", description: "Send 'join' message" },
    { number: 3, title: "Connected", description: "Ready to use features" }
  ];

  const handleSendInstructions = async () => {
    if (!phoneNumber || phoneNumber.length < 10) {
      setError('Please enter a valid Nigerian WhatsApp number (e.g., 8012345678)');
      return;
    }

    const fullNumber = `+234${phoneNumber.replace(/\D/g, '')}`;
    setIsLoading(true);
    setError('');

    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post(`${API_URL}/whatsapp/send-verification`, {
        phoneNumber: fullNumber,
        userId: user.id
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setSessionId(response.data.data.sessionId);
        setStep(2);
        setConnectionStatus('Instructions sent! Check your WhatsApp.');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Failed to send instructions. Please check your number and try again.';
      setError(errorMessage);
      console.error('Send instructions error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyJoin = async () => {
    setIsLoading(true);
    setError('');

    const fullNumber = `+234${phoneNumber.replace(/\D/g, '')}`;
    try {
      const token = localStorage.getItem('userToken');
      const response = await axios.post(`${API_URL}/whatsapp/verify-and-connect`, {
        sessionId,
        userId: user.id,
        phoneNumber: fullNumber
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (response.data.success) {
        setStep(3);
        setConnectionStatus('WhatsApp connected successfully!');
        
        // Refresh user data to update WhatsApp status
        setTimeout(() => {
          window.location.reload(); // Simple way to refresh auth context
        }, 2000);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Connection failed. Please ensure you sent the join message and try again.';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendInstructions = async () => {
    setError('');
    await handleSendInstructions();
  };

  const handleStartOver = () => {
    setStep(1);
    setError('');
    setSessionId('');
    setConnectionStatus('');
  };

  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-2xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">Connect Your WhatsApp</h1>
          <p className="text-gray-600">Connect your WhatsApp number to start using Business Pro features</p>
        </div>

        {/* Progress Steps */}
        <div className="grid gap-4 mb-8 md:grid-cols-3">
          {steps.map((stepItem) => (
            <div
              key={stepItem.number}
              className={`p-4 bg-white border-2 rounded-xl text-center transition-all ${
                step >= stepItem.number 
                  ? 'border-green-500 shadow-lg' 
                  : 'border-gray-200'
              }`}
            >
              <div
                className={`w-8 h-8 mx-auto mb-2 text-sm font-bold rounded-full flex items-center justify-center ${
                  step >= stepItem.number 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {stepItem.number}
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{stepItem.title}</h3>
              <p className="text-xs text-gray-600">{stepItem.description}</p>
            </div>
          ))}
        </div>

        {/* Connection Status */}
        {connectionStatus && (
          <div className="p-4 mb-6 border border-blue-200 bg-blue-50 rounded-xl">
            <p className="text-sm text-blue-700">{connectionStatus}</p>
          </div>
        )}

        {/* Step Content */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-white border border-gray-200 shadow-sm md:p-8 rounded-2xl"
        >
          <AnimatePresence mode="wait">
            {/* Step 1: Enter Phone Number */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full">
                  <span className="text-2xl">📱</span>
                </div>

                <h2 className="mb-2 text-2xl font-bold text-gray-900">Enter Your WhatsApp Number</h2>
                <p className="mb-6 text-gray-600">We'll send connection instructions to your WhatsApp</p>

                {error && (
                  <div className="p-3 mb-4 border border-red-200 rounded-lg bg-red-50">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div className="max-w-md mx-auto space-y-4">
                  <div className="relative">
                    <div className="flex items-center overflow-hidden border border-gray-300 rounded-xl focus-within:ring-2 focus-within:ring-green-500 focus-within:border-transparent">
                      <span className="px-4 py-4 text-gray-700 border-r border-gray-300 bg-gray-50">+234</span>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10));
                          setError('');
                        }}
                        placeholder="8012345678"
                        className="flex-1 p-4 font-mono text-lg tracking-wider text-center focus:outline-none"
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">Enter your 10-digit Nigerian number without +234</p>
                  </div>
                  
                  <button
                    onClick={handleSendInstructions}
                    disabled={!phoneNumber || phoneNumber.length < 10 || isLoading}
                    className="w-full py-4 font-semibold text-white transition-colors bg-green-500 shadow-lg rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      'Send WhatsApp Instructions'
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Join Instructions */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full">
                  <span className="text-2xl">🔗</span>
                </div>

                <h2 className="mb-4 text-2xl font-bold text-gray-900">Complete Connection</h2>
                
                <div className="p-4 mb-6 text-left bg-blue-50 rounded-xl">
                  <h3 className="mb-2 font-semibold text-blue-900">Follow these steps:</h3>
                  <ol className="space-y-2 text-sm text-blue-800">
                    <li>1. Open <strong>WhatsApp</strong> on your phone</li>
                    <li>2. Send this exact message: <code className="px-2 py-1 bg-blue-100 rounded">join {sandboxWord}</code></li>
                    <li>3. Send it to: <strong>{twilioNumber.replace('whatsapp:', '')}</strong></li>
                    <li>4. Wait for the confirmation message</li>
                    <li>5. Click "I've Joined" below</li>
                  </ol>
                </div>

                {error && (
                  <div className="p-3 mb-4 border border-red-200 rounded-lg bg-red-50">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <div className="max-w-md mx-auto space-y-3">
                  <button
                    onClick={handleVerifyJoin}
                    disabled={isLoading}
                    className="w-full py-4 font-semibold text-white transition-colors bg-green-500 rounded-xl hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        Verifying...
                      </div>
                    ) : (
                      "I've Joined - Connect My WhatsApp"
                    )}
                  </button>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={handleResendInstructions}
                      className="flex-1 py-3 text-gray-700 transition-colors border border-gray-300 rounded-xl hover:bg-gray-50"
                    >
                      Resend Instructions
                    </button>
                    <button
                      onClick={handleStartOver}
                      className="flex-1 py-3 text-gray-700 transition-colors border border-gray-300 rounded-xl hover:bg-gray-50"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Success */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full">
                  <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Connected Successfully! 🎉</h2>
                <p className="mb-2 text-gray-600">
                  Your number <strong>+234{phoneNumber}</strong> is now connected to WhatsApp Business Pro
                </p>
                
                <div className="grid max-w-md grid-cols-2 gap-3 mx-auto mb-8">
                  {[
                    { icon: '📢', label: 'Broadcasts' },
                    { icon: '🤖', label: 'Auto-Replies' },
                    { icon: '📦', label: 'Catalog' },
                    { icon: '📊', label: 'Analytics' }
                  ].map((feature, index) => (
                    <div key={index} className="p-3 text-center rounded-lg bg-gray-50">
                      <div className="mb-1 text-xl">{feature.icon}</div>
                      <p className="text-xs font-medium text-gray-700">{feature.label}</p>
                    </div>
                  ))}
                </div>
                
                <div className="max-w-md mx-auto space-y-3">
                  <Link to="/dashboard">
                    <button className="w-full py-4 font-semibold text-white transition-colors bg-green-500 shadow-lg rounded-xl hover:bg-green-600">
                      Go to Dashboard →
                    </button>
                  </Link>
                  <p className="text-sm text-gray-500">
                    Redirecting to dashboard in a few seconds...
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Support Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Need help? Check our{' '}
            <a href="#" className="text-green-500 hover:underline">connection guide</a>
            {' '}or{' '}
            <a href="#" className="text-green-500 hover:underline">contact support</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectWhatsApp;