// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Link, useNavigate, useSearchParams } from 'react-router-dom';

// // Define plans with proper pricing
// const plans = {
//   starter: { 
//     name: 'Starter', 
//     monthly: 300000, // Amount in kobo (₦3,000)
//     annual: 3000000, // Amount in kobo (₦30,000)
//     features: [
//       '500 messages per month',
//       'Basic auto-reply system',
//       '50 product catalog limit',
//       'Email support',
//       'Basic analytics dashboard',
//       'Single WhatsApp number'
//     ]
//   },
//   professional: { 
//     name: 'Professional', 
//     monthly: 700000, // Amount in kobo (₦7,000)
//     annual: 6700000, // Amount in kobo (₦67,000)
//     features: [
//       '2,000 messages per month',
//       'Advanced auto-reply with AI',
//       'Unlimited product catalog',
//       'Priority email & chat support',
//       'Advanced analytics',
//       'Broadcast scheduling',
//       'Contact segmentation',
//       '2 team members'
//     ]
//   },
//   business: { 
//     name: 'Business', 
//     monthly: 1200000, // Amount in kobo (₦12,000)
//     annual: 11500000, // Amount in kobo (₦115,000)
//     features: [
//       '5,000 messages per month',
//       'AI-powered smart replies',
//       'Unlimited products & categories',
//       '24/7 phone & WhatsApp support',
//       'Custom analytics reports',
//       'API access',
//       'Unlimited team members',
//       'White-label options'
//     ]
//   }
// };

// // Format amount for display
// const formatAmount = (amountInKobo) => {
//   const amountInNaira = amountInKobo / 100;
//   return `₦${amountInNaira.toLocaleString()}`;
// };

// // Plan Selection Component
// const PlanSelection = ({ formData, onPlanSelect, onBillingChange }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="text-center"
//     >
//       {/* Logo */}
//       <div className="mb-8 text-center">
//         <Link to="/" className="inline-flex items-center">
//           <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
//             <span className="text-xl font-bold text-white font-heading">WA</span>
//           </div>
//           <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
//         </Link>
//         <p className="mt-2 text-gray-600">by GentleTools</p>
//       </div>

//       <h1 className="mb-4 text-4xl font-bold text-gray-900 font-heading">Choose Your Plan</h1>
//       <p className="mb-8 text-gray-600">Select your plan and start growing your business today</p>
      
//       {/* Billing Toggle */}
//       <div className="inline-flex p-1 mb-12 bg-gray-100 rounded-lg">
//         <button
//           onClick={() => onBillingChange('monthly')}
//           className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
//             formData.billing === 'monthly'
//               ? 'bg-white text-gray-900 shadow-sm'
//               : 'text-gray-600 hover:text-gray-900'
//           }`}
//         >
//           Monthly
//         </button>
//         <button
//           onClick={() => onBillingChange('annual')}
//           className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
//             formData.billing === 'annual'
//               ? 'bg-white text-gray-900 shadow-sm'
//               : 'text-gray-600 hover:text-gray-900'
//           }`}
//         >
//           Annual 
//           <span className="px-2 py-1 ml-2 text-xs rounded-full text-primary-700 bg-primary-100">
//             Save 20%
//           </span>
//         </button>
//       </div>

//       {/* Plans Grid */}
//       <div className="grid gap-8 mb-8 lg:grid-cols-3">
//         {Object.entries(plans).map(([key, plan]) => (
//           <motion.div
//             key={key}
//             whileHover={{ y: -5 }}
//             className={`relative p-8 bg-white border-2 rounded-2xl transition-all duration-300 ${
//               key === 'professional' 
//                 ? 'border-primary-500 shadow-xl' 
//                 : 'border-gray-200 shadow-lg'
//             }`}
//           >
//             {key === 'professional' && (
//               <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
//                 <span className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-primary-500">
//                   MOST POPULAR
//                 </span>
//               </div>
//             )}
            
//             <div className="mb-6">
//               <h3 className="mb-2 text-2xl font-bold text-gray-900 font-heading">{plan.name}</h3>
//               <div className="flex items-baseline justify-center gap-2">
//                 <span className="text-4xl font-bold text-gray-900 font-heading">
//                   {formatAmount(formData.billing === 'annual' ? plan.annual : plan.monthly)}
//                 </span>
//                 {formData.billing === 'monthly' && <span className="text-gray-600">/month</span>}
//               </div>
//               {formData.billing === 'annual' && (
//                 <p className="mt-2 text-sm font-medium text-primary-600">2 months free!</p>
//               )}
//             </div>

//             <ul className="mb-8 space-y-3 text-left">
//               {plan.features.map((feature, index) => (
//                 <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
//                   <svg className="flex-shrink-0 w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                   <span>{feature}</span>
//                 </li>
//               ))}
//             </ul>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={() => onPlanSelect(key)}
//               className={`w-full py-4 font-semibold rounded-xl transition-colors duration-300 ${
//                 key === 'professional'
//                   ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
//               }`}
//             >
//               Select Plan
//             </motion.button>
//           </motion.div>
//         ))}
//       </div>

//       <p className="text-gray-600">
//         Already have an account?{' '}
//         <Link to="/login" className="font-semibold text-primary-500 hover:text-primary-600">
//           Sign in
//         </Link>
//       </p>
//     </motion.div>
//   );
// };

// // Account Details Component
// const AccountDetails = ({ formData, onChange, onBack, onContinue, errors, isProcessing }) => {
//   const handleFieldChange = (field, value) => {
//     onChange(prev => ({ ...prev, [field]: value }));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-md mx-auto"
//     >
//       <div className="mb-8 text-center">
//         <Link to="/" className="inline-flex items-center">
//           <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
//             <span className="text-xl font-bold text-white font-heading">WA</span>
//           </div>
//           <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
//         </Link>
//       </div>

//       <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
//         <div className="mb-6 text-center">
//           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50">
//             <svg className="w-8 h-8 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//             </svg>
//           </div>
//           <h2 className="mb-2 text-2xl font-bold text-gray-900 font-heading">Create Your Account</h2>
//           <p className="text-gray-600">Enter your details to continue</p>
          
//           {/* Selected Plan Display */}
//           <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 border rounded-full bg-primary-50 border-primary-200">
//             <span className="text-sm font-medium text-primary-700">
//               {plans[formData.plan].name} Plan • {formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}
//               {formData.billing === 'monthly' && '/month'}
//             </span>
//           </div>
//         </div>

//         <form onSubmit={(e) => { e.preventDefault(); onContinue(); }} className="space-y-4">
//           <div>
//             <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">
//               Full Name *
//             </label>
//             <input
//               id="fullName"
//               type="text"
//               value={formData.fullName}
//               onChange={(e) => handleFieldChange('fullName', e.target.value)}
//               className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
//                 errors.fullName ? 'border-red-300' : 'border-gray-300'
//               }`}
//               placeholder="Enter your full name"
//             />
//             {errors.fullName && (
//               <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
//               Email Address *
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={formData.email}
//               onChange={(e) => handleFieldChange('email', e.target.value)}
//               className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
//                 errors.email ? 'border-red-300' : 'border-gray-300'
//               }`}
//               placeholder="Enter your email address"
//             />
//             {errors.email && (
//               <p className="mt-1 text-sm text-red-600">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
//               WhatsApp Number *
//             </label>
//             <input
//               id="phone"
//               type="tel"
//               value={formData.phone}
//               onChange={(e) => handleFieldChange('phone', e.target.value)}
//               className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
//                 errors.phone ? 'border-red-300' : 'border-gray-300'
//               }`}
//               placeholder="+234 800 000 0000"
//             />
//             {errors.phone && (
//               <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-gray-700">
//               Business Name (Optional)
//             </label>
//             <input
//               id="businessName"
//               type="text"
//               value={formData.businessName}
//               onChange={(e) => handleFieldChange('businessName', e.target.value)}
//               className="w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//               placeholder="Your business name"
//             />
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div>
//               <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
//                 Password *
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={(e) => handleFieldChange('password', e.target.value)}
//                 className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
//                   errors.password ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 placeholder="Create password"
//               />
//               {errors.password && (
//                 <p className="mt-1 text-sm text-red-600">{errors.password}</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">
//                 Confirm Password *
//               </label>
//               <input
//                 id="confirmPassword"
//                 type="password"
//                 value={formData.confirmPassword}
//                 onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
//                 className={`w-full px-4 py-3 text-gray-900 placeholder-gray-500 transition-all duration-200 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
//                   errors.confirmPassword ? 'border-red-300' : 'border-gray-300'
//                 }`}
//                 placeholder="Confirm password"
//               />
//               {errors.confirmPassword && (
//                 <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
//               )}
//             </div>
//           </div>

//           <div className="pt-4">
//             <div className="flex items-start">
//               <input
//                 id="acceptTerms"
//                 type="checkbox"
//                 checked={formData.acceptTerms}
//                 onChange={(e) => handleFieldChange('acceptTerms', e.target.checked)}
//                 className="w-4 h-4 mt-1 border-gray-300 rounded text-primary-500 focus:ring-primary-500"
//               />
//               <label htmlFor="acceptTerms" className="block ml-2 text-sm text-gray-700">
//                 I agree to the{' '}
//                 <Link to="/terms" className="font-medium text-primary-500 hover:text-primary-600">
//                   Terms of Service
//                 </Link>{' '}
//                 and{' '}
//                 <Link to="/privacy" className="font-medium text-primary-500 hover:text-primary-600">
//                   Privacy Policy
//                 </Link>
//               </label>
//             </div>
//             {errors.acceptTerms && (
//               <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
//             )}
//           </div>

//           <div className="flex gap-4">
//             <button
//               type="button"
//               onClick={onBack}
//               className="flex-1 px-4 py-4 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//             >
//               Back to Plans
//             </button>
            
//             <motion.button
//               type="submit"
//               disabled={isProcessing}
//               whileHover={{ scale: isProcessing ? 1 : 1.02 }}
//               whileTap={{ scale: isProcessing ? 1 : 0.98 }}
//               className="flex-1 px-4 py-4 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
//             >
//               {isProcessing ? (
//                 <div className="flex items-center justify-center">
//                   <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
//                   Processing...
//                 </div>
//               ) : (
//                 'Continue to Payment'
//               )}
//             </motion.button>
//           </div>
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// // Payment Component with Paystack Integration
// const PaymentStep = ({ formData, onBack, onPaymentSuccess, isProcessing }) => {
//   const [error, setError] = useState('');
//   const [paystackLoaded, setPaystackLoaded] = useState(false);

//   // Load Paystack script
//   useEffect(() => {
//     const loadPaystackScript = () => {
//       return new Promise((resolve, reject) => {
//         // Check if script is already loaded
//         if (window.PaystackPop) {
//           setPaystackLoaded(true);
//           resolve();
//           return;
//         }

//         const script = document.createElement('script');
//         script.src = 'https://js.paystack.co/v1/inline.js';
//         script.async = true;
        
//         script.onload = () => {
//           console.log('Paystack script loaded successfully');
//           setPaystackLoaded(true);
//           resolve();
//         };
        
//         script.onerror = () => {
//           console.error('Failed to load Paystack script');
//           setError('Failed to load payment system. Please refresh the page and try again.');
//           reject(new Error('Paystack script failed to load'));
//         };
        
//         document.body.appendChild(script);
//       });
//     };

//     loadPaystackScript().catch(console.error);
//   }, []);

//   const initializePaystackPayment = () => {
//     if (!window.PaystackPop) {
//       setError('Payment system is still loading. Please wait a moment and try again.');
//       return;
//     }

//     const amount = formData.billing === 'annual' 
//       ? plans[formData.plan].annual 
//       : plans[formData.plan].monthly;

//     const handler = window.PaystackPop.setup({
//       key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
//       email: formData.email,
//       amount: amount,
//       currency: 'NGN',
//       ref: 'WA_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
//       metadata: {
//         custom_fields: [
//           {
//             display_name: "Full Name",
//             variable_name: "full_name",
//             value: formData.fullName
//           },
//           {
//             display_name: "Phone",
//             variable_name: "phone",
//             value: formData.phone
//           },
//           {
//             display_name: "Plan",
//             variable_name: "plan",
//             value: formData.plan
//           },
//           {
//             display_name: "Billing",
//             variable_name: "billing",
//             value: formData.billing
//           }
//         ]
//       },
//       callback: function(response) {
//         console.log('Payment successful callback:', response);
//         onPaymentSuccess(response);
//       },
//       onClose: function() {
//         setError('Payment was cancelled. Please complete payment to activate your account.');
//       }
//     });
    
//     handler.openIframe();
//   };

//   const handlePayment = async () => {
//     setError('');
    
//     if (!formData.acceptTerms) {
//       setError('Please accept the terms and conditions');
//       return;
//     }

//     if (!paystackLoaded) {
//       setError('Payment system is still loading. Please wait a moment...');
//       return;
//     }

//     try {
//       initializePaystackPayment();
//     } catch (error) {
//       console.error('Payment initialization error:', error);
//       setError('Failed to initialize payment. Please try again.');
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="max-w-md mx-auto"
//     >
//       <div className="mb-8 text-center">
//         <Link to="/" className="inline-flex items-center">
//           <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl">
//             <span className="text-xl font-bold text-white font-heading">WA</span>
//           </div>
//           <span className="ml-3 text-2xl font-bold text-gray-900 font-heading">WhatsApp Business Pro</span>
//         </Link>
//       </div>

//       <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
//         <div className="mb-6 text-center">
//           <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50">
//             <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
//             </svg>
//           </div>
//           <h2 className="mb-2 text-2xl font-bold text-gray-900 font-heading">Complete Payment</h2>
//           <p className="text-gray-600">Secure payment powered by Paystack</p>
//           {!paystackLoaded && (
//             <div className="mt-2 text-sm text-yellow-600">
//               Loading payment system...
//             </div>
//           )}
//         </div>

//         {error && (
//           <div className="p-3 mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
//             {error}
//           </div>
//         )}

//         {/* Order Summary */}
//         <div className="p-4 mb-6 bg-gray-50 rounded-xl">
//           <h3 className="mb-3 text-lg font-semibold text-gray-900">Order Summary</h3>
//           <div className="space-y-2">
//             <div className="flex justify-between">
//               <span className="text-gray-600">Plan:</span>
//               <span className="font-semibold">{plans[formData.plan].name}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Billing:</span>
//               <span className="font-semibold">{formData.billing === 'annual' ? 'Annual' : 'Monthly'}</span>
//             </div>
//             <div className="flex justify-between">
//               <span className="text-gray-600">Email:</span>
//               <span className="font-semibold">{formData.email}</span>
//             </div>
//             <div className="pt-2 mt-2 border-t border-gray-200">
//               <div className="flex justify-between text-lg font-bold">
//                 <span>Total:</span>
//                 <span className="text-primary-500">
//                   {formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}
//                   {formData.billing === 'monthly' && <span className="text-sm font-normal text-gray-600">/month</span>}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="mb-6">
//           <h3 className="mb-3 text-lg font-semibold text-gray-900">Payment Method</h3>
//           <div className="p-4 border border-gray-300 rounded-lg">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center space-x-3">
//                 <div className="flex items-center justify-center w-10 h-6 bg-black rounded">
//                   <span className="text-xs font-bold text-white">PS</span>
//                 </div>
//                 <span className="font-medium">Paystack</span>
//               </div>
//               <div className="flex space-x-2">
//                 <div className="w-8 h-5 bg-gray-200 rounded"></div>
//                 <div className="w-8 h-5 bg-gray-200 rounded"></div>
//                 <div className="w-8 h-5 bg-gray-200 rounded"></div>
//               </div>
//             </div>
//             <p className="mt-2 text-sm text-gray-600">
//               Secure payment with cards, bank transfer, or USSD
//             </p>
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <button
//             type="button"
//             onClick={onBack}
//             className="flex-1 px-4 py-4 text-sm font-medium text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
//           >
//             Back
//           </button>
          
//           <motion.button
//             onClick={handlePayment}
//             disabled={isProcessing || !paystackLoaded}
//             whileHover={{ scale: isProcessing ? 1 : 1.02 }}
//             whileTap={{ scale: isProcessing ? 1 : 0.98 }}
//             className="flex-1 px-4 py-4 text-sm font-semibold text-white transition-all duration-200 border border-transparent rounded-lg shadow-lg bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
//           >
//             {isProcessing ? (
//               <div className="flex items-center justify-center">
//                 <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
//                 Processing...
//               </div>
//             ) : (
//               `Pay Now - ${formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}`
//             )}
//           </motion.button>
//         </div>

//         {/* Security Notice */}
//         <div className="p-3 mt-6 border border-green-200 rounded-lg bg-green-50">
//           <p className="flex items-center justify-center gap-2 text-xs text-green-700">
//             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//               <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
//             </svg>
//             Your payment is secure and encrypted
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Main Register Component
// const Register = () => {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [currentStep, setCurrentStep] = useState(1); // 1: Plan, 2: Account, 3: Payment
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     businessName: '',
//     password: '',
//     confirmPassword: '',
//     plan: searchParams.get('plan') || 'starter',
//     billing: searchParams.get('billing') || 'monthly',
//     acceptTerms: false,
//   });
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [apiError, setApiError] = useState('');
//   const [apiStatus, setApiStatus] = useState('checking'); // checking, online, offline

//   // Check API status on component mount
//   useEffect(() => {
//     const checkApiStatus = async () => {
//       try {
//         const response = await fetch('http://localhost:3002/api/health');
//         if (response.ok) {
//           setApiStatus('online');
//         } else {
//           setApiStatus('offline');
//         }
//       } catch (error) {
//         console.error('API health check failed:', error);
//         setApiStatus('offline');
//         setApiError('Cannot connect to server. Please make sure the backend is running on port 5000.');
//       }
//     };

//     checkApiStatus();
//   }, []);

//   const handlePlanSelect = (plan) => {
//     setFormData(prev => ({ ...prev, plan }));
//     setCurrentStep(2); // Move to account details step
//   };

//   const validateAccountDetails = () => {
//     const newErrors = {};

//     if (!formData.fullName.trim()) {
//       newErrors.fullName = 'Full name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = 'WhatsApp number is required';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.acceptTerms) {
//       newErrors.acceptTerms = 'You must accept the terms and conditions';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleAccountContinue = () => {
//     if (validateAccountDetails()) {
//       setCurrentStep(3); // Move to payment step
//     }
//   };

//   const handlePaymentSuccess = async (paymentResponse) => {
//     setIsProcessing(true);
//     setApiError('');

//     try {
//       console.log('Sending registration request with payment reference:', paymentResponse.reference);
      
//       const response = await fetch('http://localhost:3002/api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           fullName: formData.fullName,
//           email: formData.email,
//           phone: formData.phone,
//           businessName: formData.businessName,
//           password: formData.password,
//           plan: formData.plan,
//           billing: formData.billing,
//           paymentReference: paymentResponse.reference
//         })
//       });

//       const result = await response.json();
//       console.log('Registration response:', result);

//       if (result.success) {
//         // Store user session
//         localStorage.setItem('userToken', result.token);
//         localStorage.setItem('userData', JSON.stringify(result.user));
        
//         // Show success message
//         const successMessage = result.paymentVerified 
//           ? '🎉 Payment successful! Your account is now active.' 
//           : '🎉 Registration successful! Starting your 7-day free trial.';
        
//         // Redirect to dashboard
//         navigate('/dashboard', { 
//           replace: true,
//           state: { 
//             welcome: true,
//             plan: formData.plan,
//             message: successMessage
//           } 
//         });
//       } else {
//         setApiError(result.message || 'Registration failed. Please try again.');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setApiError('Network error. Please check your connection and try again. Make sure the backend server is running on port 5000.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   return (
//     <div className="min-h-screen py-8 bg-gray-50">
//       <div className="max-w-6xl px-4 mx-auto">
//         {/* API Status Indicator */}
//         {apiStatus === 'offline' && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-md mx-auto mb-6"
//           >
//             <div className="p-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
//               <div className="flex items-center gap-2">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                 </svg>
//                 <span>Cannot connect to server. Please make sure the backend is running on port 5000.</span>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {/* Progress Steps */}
//         <div className="flex justify-center mb-12">
//           <div className="flex items-center space-x-8">
//             {[
//               { number: 1, label: 'Choose Plan' },
//               { number: 2, label: 'Account Details' },
//               { number: 3, label: 'Payment' }
//             ].map((step) => (
//               <div key={step.number} className="flex flex-col items-center">
//                 <div className="flex items-center">
//                   <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${
//                     currentStep >= step.number 
//                       ? 'bg-primary-500 border-primary-500 text-white' 
//                       : 'bg-white border-gray-300 text-gray-500'
//                   }`}>
//                     {step.number}
//                   </div>
//                   {step.number < 3 && (
//                     <div className={`w-16 h-1 mx-4 ${
//                       currentStep > step.number ? 'bg-primary-500' : 'bg-gray-300'
//                     }`} />
//                   )}
//                 </div>
//                 <span className={`mt-2 text-sm font-medium ${
//                   currentStep >= step.number ? 'text-primary-500' : 'text-gray-500'
//                 }`}>
//                   {step.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {apiError && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-md mx-auto mb-6"
//           >
//             <div className="p-3 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
//               {apiError}
//             </div>
//           </motion.div>
//         )}

//         {/* Step 1: Plan Selection */}
//         {currentStep === 1 && ( 
//           <PlanSelection 
//             formData={formData}
//             onPlanSelect={handlePlanSelect}
//             onBillingChange={(billing) => setFormData(prev => ({ ...prev, billing }))}
//           />
//         )}

//         {/* Step 2: Account Details */}
//         {currentStep === 2 && (
//           <AccountDetails 
//             formData={formData}
//             onChange={setFormData}
//             onBack={() => setCurrentStep(1)}
//             onContinue={handleAccountContinue}
//             errors={errors}
//             isProcessing={isProcessing}
//           />
//         )}

//         {/* Step 3: Payment */}
//         {currentStep === 3 && (
//           <PaymentStep 
//             formData={formData}
//             onBack={() => setCurrentStep(2)}
//             onPaymentSuccess={handlePaymentSuccess}
//             isProcessing={isProcessing}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';

const plans = {
  starter: { 
    name: 'Starter', 
    monthly: 300000,
    annual: 3000000,
    features: [
      '500 messages per month',
      'Basic auto-reply system',
      '50 product catalog limit',
      'Email support',
      'Basic analytics dashboard',
      'Single WhatsApp number'
    ]
  },
  professional: { 
    name: 'Professional', 
    monthly: 700000,
    annual: 6700000,
    features: [
      '2,000 messages per month',
      'Advanced auto-reply with AI',
      'Unlimited product catalog',
      'Priority email & chat support',
      'Advanced analytics',
      'Broadcast scheduling',
      'Contact segmentation',
      '2 team members'
    ]
  },
  business: { 
    name: 'Business', 
    monthly: 1200000,
    annual: 11500000,
    features: [
      '5,000 messages per month',
      'AI-powered smart replies',
      'Unlimited products & categories',
      '24/7 phone & WhatsApp support',
      'Custom analytics reports',
      'API access',
      'Unlimited team members',
      'White-label options'
    ]
  }
};

const formatAmount = (amountInKobo) => {
  const amountInNaira = amountInKobo / 100;
  return `₦${amountInNaira.toLocaleString()}`;
};

const PlanSelection = ({ formData, onPlanSelect, onBillingChange }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl">
            <span className="text-xl font-bold text-white">WA</span>
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">WhatsApp Business Pro</span>
        </Link>
        <p className="mt-2 text-gray-600">by GentleTools</p>
      </div>

      <h1 className="mb-4 text-4xl font-bold text-gray-900">Choose Your Plan</h1>
      <p className="mb-8 text-gray-600">Select your plan and start growing your business today</p>
      
      <div className="inline-flex p-1 mb-12 bg-gray-100 rounded-lg">
        <button
          onClick={() => onBillingChange('monthly')}
          className={`px-6 py-3 rounded-md font-medium ${formData.billing === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Monthly
        </button>
        <button
          onClick={() => onBillingChange('annual')}
          className={`px-6 py-3 rounded-md font-medium ${formData.billing === 'annual' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
        >
          Annual <span className="px-2 py-1 ml-2 text-xs rounded-full text-primary-700 bg-primary-100">Save 20%</span>
        </button>
      </div>

      <div className="grid gap-8 mb-8 lg:grid-cols-3">
        {Object.entries(plans).map(([key, plan]) => (
          <motion.div
            key={key}
            whileHover={{ y: -5 }}
            className={`p-8 bg-white border-2 rounded-2xl ${key === 'professional' ? 'border-primary-500 shadow-xl' : 'border-gray-200 shadow-lg'}`}
          >
            {key === 'professional' && (
              <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                <span className="px-4 py-2 text-xs font-semibold text-white rounded-full bg-primary-500">MOST POPULAR</span>
              </div>
            )}
            <div className="mb-6">
              <h3 className="mb-2 text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-gray-900">{formatAmount(formData.billing === 'annual' ? plan.annual : plan.monthly)}</span>
                {formData.billing === 'monthly' && <span className="text-gray-600">/month</span>}
              </div>
              {formData.billing === 'annual' && <p className="mt-2 text-sm font-medium text-primary-600">2 months free!</p>}
            </div>
            <ul className="mb-8 space-y-3 text-left">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-gray-600">
                  <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPlanSelect(key)}
              className={`w-full py-4 font-semibold rounded-xl ${key === 'professional' ? 'bg-primary-500 text-white hover:bg-primary-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'}`}
            >
              Select Plan
            </motion.button>
          </motion.div>
        ))}
      </div>
      <p className="text-gray-600">Already have an account? <Link to="/login" className="font-semibold text-primary-600 hover:text-primary-700">Sign in</Link></p>
    </motion.div>
  );
};

const AccountDetails = ({ formData, onChange, onBack, onContinue, errors, isProcessing }) => {
  const handleFieldChange = (field, value) => {
    onChange(prev => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl">
            <span className="text-xl font-bold text-white">WA</span>
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">WhatsApp Business Pro</span>
        </Link>
      </div>
      <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Create Your Account</h2>
          <p className="text-gray-600">Enter your details to continue</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-4 border rounded-full border-primary-200 bg-primary-50">
            <span className="text-sm font-medium text-primary-700">{plans[formData.plan].name} Plan • {formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}{formData.billing === 'monthly' && '/month'}</span>
          </div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); onContinue(); }} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-700">Full Name *</label>
            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(e) => handleFieldChange('fullName', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.fullName ? 'border-red-300' : 'border-gray-300'}`}
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address *</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-300' : 'border-gray-300'}`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">WhatsApp Number *</label>
            <div className="flex">
              <span className="inline-flex items-center px-4 py-3 border border-r-0 rounded-l-lg bg-gray-50 text-gray-700">+234</span>
              <input
                id="phone"
                type="tel"
                value={formData.phone.replace('+234', '')}
                onChange={(e) => handleFieldChange('phone', `+234${e.target.value.replace(/\D/g, '')}`)}
                className={`w-full px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-300' : 'border-gray-300'}`}
                placeholder="8012345678"
              />
            </div>
            {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label htmlFor="businessName" className="block mb-2 text-sm font-medium text-gray-700">Business Name (Optional)</label>
            <input
              id="businessName"
              type="text"
              value={formData.businessName}
              onChange={(e) => handleFieldChange('businessName', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your business name"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password *</label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => handleFieldChange('password', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.password ? 'border-red-300' : 'border-gray-300'}`}
                placeholder="Create password"
              />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-700">Confirm Password *</label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => handleFieldChange('confirmPassword', e.target.value)}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}`}
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div className="pt-4">
            <div className="flex items-start">
              <input
                id="acceptTerms"
                type="checkbox"
                checked={formData.acceptTerms}
                onChange={(e) => handleFieldChange('acceptTerms', e.target.checked)}
                className="w-4 h-4 mt-1 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
              />
              <label htmlFor="acceptTerms" className="block ml-2 text-sm text-gray-700">
                I agree to the <Link to="/terms" className="font-medium text-primary-600 hover:text-primary-700">Terms</Link> and{' '}
                <Link to="/privacy" className="font-medium text-primary-600 hover:text-primary-700">Privacy Policy</Link>
              </label>
            </div>
            {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
          </div>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onBack}
              className="flex-1 px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Back to Plans
            </button>
            <motion.button
              type="submit"
              disabled={isProcessing}
              whileHover={{ scale: isProcessing ? 1 : 1.02 }}
              whileTap={{ scale: isProcessing ? 1 : 0.98 }}
              className="flex-1 px-4 py-4 text-sm font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  Processing...
                </div>
              ) : (
                'Continue to Payment'
              )}
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

const PaymentStep = ({ formData, onBack, onPaymentSuccess, isProcessing }) => {
  const [error, setError] = useState('');
  const [paystackLoaded, setPaystackLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    script.onload = () => setPaystackLoaded(true);
    script.onerror = () => setError('Failed to load payment system');
    document.body.appendChild(script);
  }, []);

  const initializePaystackPayment = () => {
    if (!window.PaystackPop) {
      setError('Payment system loading...');
      return;
    }
    const amount = formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly;
    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: formData.email,
      amount,
      currency: 'NGN',
      ref: 'WA_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
      metadata: {
        custom_fields: [
          { display_name: 'Full Name', variable_name: 'full_name', value: formData.fullName },
          { display_name: 'Phone', variable_name: 'phone', value: formData.phone },
          { display_name: 'Plan', variable_name: 'plan', value: formData.plan },
          { display_name: 'Billing', variable_name: 'billing', value: formData.billing }
        ]
      },
      callback: function(response) {
        onPaymentSuccess(response);
      },
      onClose: function() {
        setError('Payment cancelled');
      }
    });
    handler.openIframe();
  };

  const handlePayment = async () => {
    setError('');
    if (!formData.acceptTerms) {
      setError('Please accept terms and conditions');
      return;
    }
    if (!paystackLoaded) {
      setError('Payment system loading...');
      return;
    }
    initializePaystackPayment();
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-md mx-auto">
      <div className="mb-8 text-center">
        <Link to="/" className="inline-flex items-center">
          <div className="flex items-center justify-center w-12 h-12 bg-primary-600 rounded-xl">
            <span className="text-xl font-bold text-white">WA</span>
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">WhatsApp Business Pro</span>
        </Link>
      </div>
      <div className="p-8 bg-white border border-gray-200 shadow-sm rounded-2xl">
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-50">
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
            </svg>
          </div>
          <h2 className="mb-2 text-2xl font-bold text-gray-900">Complete Payment</h2>
          <p className="text-gray-600">Secure payment powered by Paystack</p>
        </div>
        {error && (
          <div className="p-3 mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">{error}</div>
        )}
        <div className="p-4 mb-6 bg-gray-50 rounded-xl">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">Order Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-gray-600">Plan:</span><span className="font-semibold">{plans[formData.plan].name}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Billing:</span><span className="font-semibold">{formData.billing === 'annual' ? 'Annual' : 'Monthly'}</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Email:</span><span className="font-semibold">{formData.email}</span></div>
            <div className="pt-2 mt-2 border-t border-gray-200">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary-500">{formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}{formData.billing === 'monthly' && <span className="text-sm font-normal text-gray-600">/month</span>}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={onBack}
            className="flex-1 px-4 py-4 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </button>
          <motion.button
            onClick={handlePayment}
            disabled={isProcessing || !paystackLoaded}
            whileHover={{ scale: isProcessing ? 1 : 1.02 }}
            whileTap={{ scale: isProcessing ? 1 : 0.98 }}
            className="flex-1 px-4 py-4 text-sm font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 mr-2 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
                Processing...
              </div>
            ) : (
              `Pay Now - ${formatAmount(formData.billing === 'annual' ? plans[formData.plan].annual : plans[formData.plan].monthly)}`
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { register, error: authError, clearError } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    businessName: '',
    password: '',
    confirmPassword: '',
    plan: searchParams.get('plan') || 'starter',
    billing: searchParams.get('billing') || 'monthly',
    acceptTerms: false,
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState({});
  const [apiStatus, setApiStatus] = useState('checking');

  useEffect(() => {
    checkApiStatus();
  }, []);

  const checkApiStatus = async () => {
    try {
      const response = await api.get('/health');
      setApiStatus(response.data.success ? 'online' : 'offline');
    } catch (error) {
      setApiStatus('offline');
    }
  };

  const handlePlanSelect = (plan) => {
    setFormData(prev => ({ ...prev, plan }));
    setCurrentStep(2);
  };

  const validateAccountDetails = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    if (!formData.phone.trim()) newErrors.phone = 'WhatsApp number is required';
    else if (!/^\+234\d{10}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number (use +2348012345678)';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'You must accept the terms and conditions';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAccountContinue = () => {
    if (validateAccountDetails()) {
      setCurrentStep(3);
    }
  };

  const handlePaymentSuccess = async (paymentResponse) => {
    setIsProcessing(true);
    clearError();
    try {
      const result = await register({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        password: formData.password,
        plan: formData.plan,
        billing: formData.billing,
        paymentReference: paymentResponse.reference
      });
      if (result.success) {
        navigate('/dashboard', {
          replace: true,
          state: {
            welcome: true,
            plan: formData.plan,
            message: result.data.paymentVerified ? 'Payment successful! Account activated.' : 'Registration successful. 7-day trial started.'
          }
        });
      } else {
        setErrors({ general: result.error || 'Registration failed' });
      }
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'Network error' });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-8 bg-gray-50">
      <div className="max-w-6xl px-4 mx-auto">
        {apiStatus === 'offline' && (
          <div className="max-w-md p-3 mx-auto mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">
            Cannot connect to server. Please ensure backend is running.
          </div>
        )}
        {authError && (
          <div className="max-w-md p-3 mx-auto mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">{authError}</div>
        )}
        {errors.general && (
          <div className="max-w-md p-3 mx-auto mb-6 text-sm text-red-700 border border-red-200 rounded-lg bg-red-50">{errors.general}</div>
        )}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 ${currentStep >= step ? 'bg-primary-500 border-primary-500 text-white' : 'bg-white border-gray-300 text-gray-500'}`}>
                    {step}
                  </div>
                  {step < 3 && <div className={`w-16 h-1 mx-4 ${currentStep > step ? 'bg-primary-500' : 'bg-gray-300'}`} />}
                </div>
                <span className={`mt-2 text-sm font-medium ${currentStep >= step ? 'text-primary-500' : 'text-gray-500'}`}>
                  {['Choose Plan', 'Account Details', 'Payment'][step - 1]}
                </span>
              </div>
            ))}
          </div>
        </div>
        {currentStep === 1 && (
          <PlanSelection
            formData={formData}
            onPlanSelect={handlePlanSelect}
            onBillingChange={(billing) => setFormData(prev => ({ ...prev, billing }))}
          />
        )}
        {currentStep === 2 && (
          <AccountDetails
            formData={formData}
            onChange={setFormData}
            onBack={() => setCurrentStep(1)}
            onContinue={handleAccountContinue}
            errors={errors}
            isProcessing={isProcessing}
          />
        )}
        {currentStep === 3 && (
          <PaymentStep
            formData={formData}
            onBack={() => setCurrentStep(2)}
            onPaymentSuccess={handlePaymentSuccess}
            isProcessing={isProcessing}
          />
        )}
      </div>
    </div>
  );
};

export default Register;