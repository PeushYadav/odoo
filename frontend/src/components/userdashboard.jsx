import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-teal-300 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-400 rounded-full opacity-25 animate-ping"></div>
        <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className={`relative z-10 p-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-teal-800 bg-clip-text text-transparent">
              ReWear
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-800">Notifications</p>
                </div>
                <div className="p-3">
                  <p className="text-xs text-gray-600">No new notifications</p>
                </div>
              </div>
            </div>
            
            <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-semibold">P</span>
            </div>
          </div>
        </header>

        {/* Welcome Section */}
        <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Welcome back, <span className="bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent">Priya!</span>
          </h2>
          <p className="text-gray-600">Ready to explore sustainable fashion?</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-xl p-1 shadow-lg">
          {['overview', 'items', 'swaps', 'points'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile & Item Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Item Display Card */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition-all duration-500">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Image Section */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-teal-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <img
                        src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80"
                        alt="Striped Smisha"
                        className="relative rounded-2xl w-64 h-80 object-cover shadow-lg transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button className="bg-white text-green-600 px-4 py-2 rounded-full font-medium shadow-lg transform hover:scale-110 transition-transform duration-200">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-800">Striped Smisha</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                        Available
                      </span>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 to-teal-50 p-4 rounded-xl border border-green-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">P</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Priya</p>
                          <p className="text-sm text-gray-600">Fashion Enthusiast</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        Casual white smit with black horizontal stripes. Round neckline, short sleeves, 
                        and a relaxed fit perfect for everyday wear. Made from sustainable materials.
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <button className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                        <span>Swap Request</span>
                      </button>
                      <button className="border-2 border-green-500 text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-green-50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        <span>Redeem via Points</span>
                      </button>
                    </div>

                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>250 points</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg className="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                        <span>Premium Item</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Total Items', value: '47', icon: '📦', color: 'green' },
                { title: 'Active Swaps', value: '12', icon: '🔄', color: 'teal' },
                { title: 'Points Earned', value: '1,250', icon: '⭐', color: 'emerald' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    </div>
                    <div className={`text-3xl ${stat.color === 'green' ? 'text-green-500' : stat.color === 'teal' ? 'text-teal-500' : 'text-emerald-500'}`}>
                      {stat.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: 'Upload New Item', icon: '📤', color: 'green', link: '/upload' },
                  { label: 'Browse Items', icon: '🔍', color: 'teal' },
                  { label: 'My Swaps', icon: '🔄', color: 'emerald' },
                  { label: 'Points History', icon: '📊', color: 'green' }
                ].map((action, index) => (
                  action.link ? (
                    <Link
                      key={index}
                      to={action.link}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <span className="text-xl">{action.icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-green-600">{action.label}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-green-500 ml-auto transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ) : (
                    <button
                      key={index}
                      className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:scale-105 group"
                    >
                      <span className="text-xl">{action.icon}</span>
                      <span className="font-medium text-gray-700 group-hover:text-green-600">{action.label}</span>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-green-500 ml-auto transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { action: 'Item uploaded', time: '2 hours ago', type: 'upload' },
                  { action: 'Swap completed', time: '1 day ago', type: 'swap' },
                  { action: 'Points earned', time: '3 days ago', type: 'points' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-50 transition-all duration-300">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'upload' ? 'bg-green-500' : 
                      activity.type === 'swap' ? 'bg-teal-500' : 'bg-emerald-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;