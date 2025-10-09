
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link, useNavigate } from 'react-router-dom';

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     rememberMe: false
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//     // Clear error when user starts typing
//     if (error) setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       // Basic validation
//       if (!formData.email || !formData.password) {
//         setError('Please fill in all fields');
//         setIsLoading(false);
//         return;
//       }

//       // Real API call
//       const response = await fetch('http://localhost:3002/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           email: formData.email,
//           password: formData.password
//         })
//       });

//       const result = await response.json();

//       if (result.success) {
//         // Store user session
//         localStorage.setItem('userToken', result.token);
//         localStorage.setItem('userData', JSON.stringify(result.user));
        
//         // Redirect to dashboard
//         navigate('/dashboard');
//       } else {
//         setError(result.message || 'Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError('Network error. Please check your connection and try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Left Side - Login Form */}
//       <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
//         <div className="w-full max-w-md mx-auto">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             {/* Logo */}
//             <div className="mb-8 text-center">
//               <Link to="/" className="inline-flex items-center">
//                 <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
//                   <span className="text-xl font-bold text-white font-heading">WA</span>
//                 </div>
//                 <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
//               </Link>
//               <p className="mt-2 text-gray-600">by GentleTools</p>
//             </div>

//             {/* Login Card */}
//             <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
//               <div className="p-8">
//                 <div className="mb-8 text-center">
//                   <h2 className="text-3xl font-bold text-gray-900 font-heading">
//                     Welcome back
//                   </h2>
//                   <p className="mt-2 text-gray-600">
//                     Sign in to your account
//                   </p>
//                 </div>

//                 {error && (
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="p-3 mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50"
//                   >
//                     {error}
//                   </motion.div>
//                 )}

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div>
//                     <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
//                       Email address
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       autoComplete="email"
//                       required
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="Enter your email"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
//                       Password
//                     </label>
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       autoComplete="current-password"
//                       required
//                       value={formData.password}
//                       onChange={handleChange}
//                       className="relative block w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="Enter your password"
//                     />
//                   </div>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <input
//                         id="rememberMe"
//                         name="rememberMe"
//                         type="checkbox"
//                         checked={formData.rememberMe}
//                         onChange={handleChange}
//                         className="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
//                       />
//                       <label htmlFor="rememberMe" className="block ml-2 text-sm text-gray-700">
//                         Remember me
//                       </label>
//                     </div>

//                     <Link 
//                       to="/auth/forgot-password" 
//                       className="text-sm font-medium transition-colors duration-200 text-primary-500 hover:text-primary-600"
//                     >
//                       Forgot password?
//                     </Link>
//                   </div>

//                   <motion.button
//                     type="submit"
//                     disabled={isLoading}
//                     whileHover={{ scale: isLoading ? 1 : 1.02 }}
//                     whileTap={{ scale: isLoading ? 1 : 0.98 }}
//                     className="relative flex justify-center w-full px-4 py-3 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
//                   >
//                     {isLoading ? (
//                       <div className="flex items-center">
//                         <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
//                         Signing in...
//                       </div>
//                     ) : (
//                       'Sign in to your account'
//                     )}
//                   </motion.button>
//                 </form>

//                 {/* Divider */}
//                 <div className="relative my-6">
//                   <div className="absolute inset-0 flex items-center">
//                     <div className="w-full border-t border-gray-300"></div>
//                   </div>
//                   <div className="relative flex justify-center text-sm">
//                     <span className="px-2 text-gray-500 bg-white">Don't have an account?</span>
//                   </div>
//                 </div>

//                 {/* Register Link */}
//                 <div className="text-center">
//                   <Link
//                     to="/auth/register"
//                     className="inline-flex justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 hover:shadow-md"
//                   >
//                     Create new account
//                   </Link>
//                 </div>
//               </div>

//               {/* Security Notice */}
//               <div className="px-8 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
//                 <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//                   </svg>
//                   Your data is securely encrypted and protected
//                 </p>
//               </div>
//             </div>

//             {/* Trust Indicators */}
//             <div className="grid grid-cols-3 gap-4 mt-8 text-center">
//               <div>
//                 <div className="text-sm font-semibold text-gray-900">500+</div>
//                 <div className="text-xs text-gray-600">Nigerian Businesses</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold text-gray-900">24/7</div>
//                 <div className="text-xs text-gray-600">Local Support</div>
//               </div>
//               <div>
//                 <div className="text-sm font-semibold text-gray-900">₦</div>
//                 <div className="text-xs text-gray-600">Naira Pricing</div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Right Side - Features Showcase */}
//       <div className="relative flex-1 hidden w-0 lg:block">
//         <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-90"></div>
//         <div className="absolute inset-0 flex items-center justify-center p-12">
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="max-w-md text-center text-white"
//           >
//             <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-white bg-opacity-20 rounded-2xl">
//               <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//             </div>
            
//             <h2 className="mb-6 text-3xl font-bold font-heading">
//               Everything you need to grow your business
//             </h2>
            
//             <div className="space-y-4 text-left">
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
//                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-white text-opacity-90">Smart Broadcast System</span>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
//                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-white text-opacity-90">AI-Powered Auto-Responder</span>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
//                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-white text-opacity-90">Advanced Catalog Management</span>
//               </div>
              
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
//                   <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-white text-opacity-90">Customer Relationship Management</span>
//               </div>
//             </div>

//             {/* Testimonial */}
//             <div className="p-6 mt-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
//               <p className="mb-4 text-lg italic text-white text-opacity-90">
//                 "This platform helped us triple our customer engagement on WhatsApp. The Nigerian support team is amazing!"
//               </p>
//               <div className="flex items-center justify-center">
//                 <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-accent-400">
//                   A
//                 </div>
//                 <div className="ml-3 text-left">
//                   <div className="font-semibold text-white">Adebayo Store</div>
//                   <div className="text-sm text-white text-opacity-70">Lagos, Nigeria</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login; 


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const Login = () => {
  const navigate = useNavigate();
  const { login, clearError } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
    clearError();
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    console.log('Attempting login with:', { email: formData.email });
    
    const result = await login({
      email: formData.email.trim(),
      password: formData.password
    });

    console.log('Login result:', result);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error || 'Invalid email or password');
    }
  } catch (error) {
    console.error('Login error details:', error);
    console.error('Error response:', error.response);
    setError(error.response?.data?.message || 'Network error. Please check backend connection.');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
        <div className="w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 text-center">
              <Link to="/" className="inline-flex items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
                  <span className="text-xl font-bold text-white font-heading">WA</span>
                </div>
                <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
              </Link>
              <p className="mt-2 text-gray-600">by GentleTools</p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
              <div className="p-8">
                <div className="mb-8 text-center">
                  <h2 className="text-3xl font-bold text-gray-900 font-heading">Welcome back</h2>
                  <p className="mt-2 text-gray-600">Sign in to your account</p>
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

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter your password"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={formData.rememberMe}
                        onChange={handleChange}
                        className="w-4 h-4 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
                      />
                      <label htmlFor="rememberMe" className="block ml-2 text-sm text-gray-700">Remember me</label>
                    </div>

                    <Link to="/auth/forgot-password" className="text-sm font-medium text-primary-500 hover:text-primary-600">Forgot password?</Link>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.02 }}
                    whileTap={{ scale: isLoading ? 1 : 0.98 }}
                    className="w-full px-4 py-3 text-sm font-semibold text-white rounded-lg bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                        Signing in...
                      </div>
                    ) : (
                      'Sign in to your account'
                    )}
                  </motion.button>
                </form>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 text-gray-500 bg-white">Don't have an account?</span>
                  </div>
                </div>

                <div className="text-center">
                  <Link
                    to="/auth/register"
                    className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    Create new account
                  </Link>
                </div>
              </div>

              <div className="px-8 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <p className="flex items-center justify-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Your data is securely encrypted and protected
                </p>
              </div>
            </div>

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="mb-6 text-3xl font-bold font-heading">Everything you need to grow your business</h2>
            <div className="space-y-4 text-left">
              {['Smart Broadcast System', 'AI-Powered Auto-Responder', 'Advanced Catalog Management', 'Customer Relationship Management'].map(feature => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full bg-opacity-20">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-opacity-90">{feature}</span>
                </div>
              ))}
            </div>
            <div className="p-6 mt-8 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
              <p className="mb-4 text-lg italic text-white text-opacity-90">
                "This platform helped us triple our customer engagement on WhatsApp. The Nigerian support team is amazing!"
              </p>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center w-10 h-10 font-bold text-white rounded-full bg-accent-400">A</div>
                <div className="ml-3 text-left">
                  <div className="font-semibold text-white">Adebayo Store</div>
                  <div className="text-sm text-white text-opacity-70">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;