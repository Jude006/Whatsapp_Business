import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Plus, 
  ShoppingCart, 
  Package,
  Tag,
  MoreVertical,
  Edit3,
  Trash2,
  Eye,
  Share2,
  QrCode,
  ChevronDown
} from 'lucide-react';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');

  // Mock products data
  const products = [
    {
      id: 1,
      name: 'Wireless Bluetooth Earbuds',
      description: 'High-quality wireless earbuds with noise cancellation',
      price: '₦15,000',
      originalPrice: '₦20,000',
      category: 'Electronics',
      stock: 45,
      images: ['📱'],
      status: 'active',
      sales: 89,
      revenue: '₦1,335,000'
    },
    {
      id: 2,
      name: 'Organic Cotton T-Shirt',
      description: 'Comfortable organic cotton t-shirt in various colors',
      price: '₦4,500',
      category: 'Fashion',
      stock: 120,
      images: ['👕'],
      status: 'active',
      sales: 234,
      revenue: '₦1,053,000'
    },
    {
      id: 3,
      name: 'Smart Fitness Watch',
      description: 'Track your fitness with this advanced smartwatch',
      price: '₦25,000',
      originalPrice: '₦30,000',
      category: 'Electronics',
      stock: 0,
      images: ['⌚'],
      status: 'out-of-stock',
      sales: 56,
      revenue: '₦1,400,000'
    },
    {
      id: 4,
      name: 'Handmade Leather Wallet',
      description: 'Genuine leather wallet with multiple card slots',
      price: '₦8,000',
      category: 'Accessories',
      stock: 23,
      images: ['👛'],
      status: 'active',
      sales: 67,
      revenue: '₦536,000'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', count: products.length },
    { id: 'electronics', label: 'Electronics', count: 2 },
    { id: 'fashion', label: 'Fashion', count: 1 },
    { id: 'accessories', label: 'Accessories', count: 1 },
    { id: 'home', label: 'Home & Living', count: 0 }
  ];

  const stats = {
    totalProducts: 45,
    outOfStock: 3,
    lowStock: 8,
    totalRevenue: '₦8,456,000',
    totalSales: 1245
  };

  const filteredProducts = products.filter(product =>
    (activeCategory === 'all' || product.category.toLowerCase() === activeCategory) &&
    (product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'out-of-stock': return 'bg-red-100 text-red-700';
      case 'draft': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getStockColor = (stock) => {
    if (stock === 0) return 'text-red-600';
    if (stock < 10) return 'text-orange-600';
    return 'text-green-600';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="px-6 py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 font-heading">Product Catalog</h1>
              <p className="mt-2 text-gray-600">Manage your products and inventory</p>
            </div>
            
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 transition-all duration-200 bg-white border border-gray-300 rounded-xl hover:bg-gray-50"
              >
                <Share2 className="w-4 h-4" />
                Share Catalog
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
              >
                <Plus className="w-4 h-4" />
                Add Product
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { label: 'Total Products', value: stats.totalProducts, icon: Package, color: 'text-primary-500', bg: 'bg-primary-50' },
            { label: 'Out of Stock', value: stats.outOfStock, icon: ShoppingCart, color: 'text-red-500', bg: 'bg-red-50' },
            { label: 'Low Stock Alert', value: stats.lowStock, icon: Tag, color: 'text-orange-500', bg: 'bg-orange-50' },
            { label: 'Total Revenue', value: stats.totalRevenue, icon: ShoppingCart, color: 'text-green-500', bg: 'bg-green-50' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${stat.bg}`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-2xl">
          {/* Header with Categories */}
          <div className="flex flex-col gap-4 p-6 border-b border-gray-200 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeCategory === category.id
                      ? 'text-primary-700 bg-primary-50'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {category.label}
                  <span className={`px-1.5 py-0.5 text-xs rounded-full ${
                    activeCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute w-4 h-4 text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Filter */}
              <button className="flex items-center gap-2 px-3 py-2 text-gray-600 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-4 h-4" />
                Filter
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="p-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 transition-all duration-200 border border-gray-200 rounded-2xl hover:shadow-lg"
                >
                  {/* Product Image */}
                  <div className="flex items-center justify-center w-full h-40 mb-4 text-4xl bg-gray-100 rounded-xl">
                    {product.images[0]}
                  </div>

                  {/* Product Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(product.status)}`}>
                        {product.status.charAt(0).toUpperCase() + product.status.slice(1)}
                      </span>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>

                    {/* Stock & Sales */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className={getStockColor(product.stock)}>
                        {product.stock === 0 ? 'Out of stock' : `${product.stock} in stock`}
                      </span>
                      <span>{product.sales} sold</span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                      <button className="flex-1 py-2 text-sm font-medium text-center transition-colors rounded-lg text-primary-600 bg-primary-50 hover:bg-primary-100">
                        <Edit3 className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 py-2 text-sm font-medium text-center text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <Eye className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 py-2 text-sm font-medium text-center text-gray-600 transition-colors bg-gray-100 rounded-lg hover:bg-gray-200">
                        <QrCode className="w-4 h-4 mx-auto" />
                      </button>
                      <button className="flex-1 py-2 text-sm font-medium text-center text-red-600 transition-colors rounded-lg bg-red-50 hover:bg-red-100">
                        <Trash2 className="w-4 h-4 mx-auto" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl">
                  <Package className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">No products found</h3>
                <p className="mb-6 text-gray-600">
                  {searchTerm ? 'Try adjusting your search terms' : 'Add your first product to get started'}
                </p>
                {!searchTerm && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 text-sm font-semibold text-white transition-all duration-200 bg-primary-500 rounded-xl hover:bg-primary-600"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add First Product
                  </motion.button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;