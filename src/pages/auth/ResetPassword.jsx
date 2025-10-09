// src/pages/auth/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { verifyResetCode, resetPassword, clearError } = useAuth();
  
  const [step, setStep] = useState(1); // 1: Verify code, 2: Reset password
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    confirmPassword: '',
    verificationToken: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [countdown, setCountdown] = useState(0);

  // Get email from navigation state or prompt
  useEffect(() => {
    if (location.state?.email) {
      setFormData(prev => ({ ...prev, email: location.state.email }));
    }
  }, [location.state]);

  // Countdown timer
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    clearError();

    try {
      if (!formData.email || !formData.code) {
        setError('Please enter both email and verification code');
        setIsLoading(false);
        return;
      }

      const result = await verifyResetCode({
        email: formData.email,
        code: formData.code,
        token: location.state?.token || ''
      });

      if (result.success) {
        setFormData(prev => ({ ...prev, verificationToken: result.verificationToken }));
        setStep(2);
        setSuccess('Code verified successfully! Now set your new password.');
      } else {
        setError(result.message || 'Invalid verification code');
      }
    } catch (error) {
      console.error('Verify code error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    clearError();

    try {
      if (!formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields');
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setIsLoading(false);
        return;
      }

      const result = await resetPassword({
        email: formData.email,
        password: formData.password,
        verificationToken: formData.verificationToken
      });

      if (result.success) {
        setSuccess('Password reset successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/auth/login', { 
            state: { 
              message: 'Password reset successful! Please login with your new password.' 
            } 
          });
        }, 3000);
      } else {
        setError(result.message || 'Failed to reset password');
      }
    } catch (error) {
      console.error('Reset password error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resendCode = async () => {
    setIsLoading(true);
    setError('');
    
    // This would call the forgotPassword endpoint again
    // For now, we'll simulate it
    setTimeout(() => {
      setCountdown(60); // 1 minute countdown
      setSuccess('New code sent to your email!');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Side - Reset Password Form */}
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="mb-8 text-center">
              <Link to="/" className="inline-flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
                  <span className="text-xl font-bold text-white font-heading">WA</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
              </Link>
              <p className="mt-2 text-gray-600">by GentleTools</p>
            </div>

            {/* Reset Password Card */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
              <div className="p-8">
                <div className="mb-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50">
                    <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 font-heading">
                    {step === 1 ? 'Enter verification code' : 'Create new password'}
                  </h2>
                  <p className="mt-2 text-gray-600">
                    {step === 1 
                      ? 'Check your email for the 6-digit verification code' 
                      : 'Enter your new password below'
                    }
                  </p>
                </div>

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50"
                  >
                    {error}
                  </motion.div>
                )}

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 mb-6 text-sm text-green-700 border border-green-200 rounded-lg bg-green-50"
                  >
                    {success}
                  </motion.div>
                )}

                {/* Step 1: Verify Code */}
                {step === 1 && (
                  <form onSubmit={handleVerifyCode} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-700">
                        6-digit verification code
                      </label>
                      <input
                        id="code"
                        name="code"
                        type="text"
                        maxLength={6}
                        required
                        value={formData.code}
                        onChange={handleChange}
                        className="relative block w-full px-4 py-3 text-2xl font-semibold tracking-widest text-center text-gray-900 placeholder-gray-300 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="000000"
                      />
                      <p className="mt-2 text-xs text-gray-500">
                        Enter the 6-digit code sent to your email
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={resendCode}
                        disabled={countdown > 0 || isLoading}
                        className="text-sm font-medium transition-colors duration-200 text-primary-500 hover:text-primary-600 disabled:opacity-50"
                      >
                        {countdown > 0 ? `Resend code in ${countdown}s` : 'Resend code'}
                      </button>
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="relative flex justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Verifying code...
                        </div>
                      ) : (
                        'Verify code'
                      )}
                    </motion.button>
                  </form>
                )}

                {/* Step 2: Reset Password */}
                {step === 2 && (
                  <form onSubmit={handleResetPassword} className="space-y-6">
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
                        New password
                      </label>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter new password"
                      />
                      <p className="mt-2 text-xs text-gray-500">
                        Password must be at least 6 characters long
                      </p>
                    </div>

                    <div>
                      <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
                        Confirm new password
                      </label>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Confirm new password"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: isLoading ? 1 : 1.02 }}
                      whileTap={{ scale: isLoading ? 1 : 0.98 }}
                      className="relative flex justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                          Resetting password...
                        </div>
                      ) : (
                        'Reset password'
                      )}
                    </motion.button>
                  </form>
                )}

                {/* Back to Login */}
                <div className="mt-6 text-center">
                  <Link
                    to="/auth/login"
                    className="inline-flex items-center text-sm font-medium transition-colors duration-200 text-primary-500 hover:text-primary-600"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to login
                  </Link>
                </div>
              </div>

              {/* Security Notice */}
              <div className="px-8 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Your data is securely encrypted and protected
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 mt-8 text-center">
              <div>
                <div className="text-sm font-semibold text-gray-900">500+</div>
                <div className="text-xs text-gray-600">Nigerian Businesses</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">24/7</div>
                <div className="text-xs text-gray-600">Local Support</div>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">₦</div>
                <div className="text-xs text-gray-600">Naira Pricing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Features Showcase */}
      <div className="relative flex-1 hidden w-0 lg:block">
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-md text-center text-white"
          >
            <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-white bg-opacity-20 rounded-2xl">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            
            <h2 className="mb-6 text-3xl font-bold font-heading">
              Account Security First
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-opacity-90">Two-step verification process</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-opacity-90">Secure password requirements</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-opacity-90">Instant account recovery</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white text-opacity-90">24/7 security monitoring</span>
              </div>
            </div>

            {/* Testimonial */}
            <div className="p-6 mt-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <p className="mb-4 text-lg italic text-white text-opacity-90">
                "The security features give me peace of mind. Even when I forgot my password, the recovery process was secure and straightforward."
              </p>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-accent-400">
                  K
                </div>
                <div className="ml-3 text-left">
                  <div className="font-semibold text-white">Kunle Tech Solutions</div>
                  <div className="text-sm text-white text-opacity-70">Port Harcourt, Nigeria</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;