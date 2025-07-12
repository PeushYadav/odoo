"use client"

import React, { useState, useEffect } from "react"
import { ArrowRight, UserPlus, Recycle, Heart, Users, Sparkles } from 'lucide-react'
import Auth from "./Auth/Auth" // Adjust path as needed

const HeroSection = () => {
  const [showAuth, setShowAuth] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  
  const rotatingWords = ["Swap", "Share", "Sustain", "Style"]

  // Rotating text animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-teal-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 animate-bounce delay-1000">
            <div className="w-8 h-8 bg-green-200 rounded-full opacity-60"></div>
          </div>
          <div className="absolute top-1/3 right-1/4 animate-bounce delay-2000">
            <div className="w-6 h-6 bg-teal-200 rounded-full opacity-60"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-500">
            <div className="w-10 h-10 bg-emerald-200 rounded-full opacity-60"></div>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-700 text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Sustainable Fashion Revolution
            </div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent">
                ReWear
              </span>
              <br />
              <span className="text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                Community Clothing{" "}
                <span className="inline-block min-w-[200px] text-left">
                  <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-extrabold transition-all duration-500">
                    {rotatingWords[currentWord]}
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Give your clothes a second life. Join thousands who are{" "}
              <span className="font-semibold text-green-600">swapping, sharing, and styling sustainably</span>{" "}
              while reducing fashion waste.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-gray-600 text-sm">Happy Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">50K+</div>
                <div className="text-gray-600 text-sm">Items Swapped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">2M+</div>
                <div className="text-gray-600 text-sm">CO₂ Saved (lbs)</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#categories"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold text-lg rounded-full hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Swapping Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              
              <button
                onClick={() => setShowAuth(true)}
                className="group inline-flex items-center justify-center px-8 py-4 bg-white/90 backdrop-blur-sm border-2 border-green-600 text-green-700 font-bold text-lg rounded-full hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join the Community
                <UserPlus className="ml-2 group-hover:scale-110 transition-transform" size={20} />
              </button>
            </div>

            {/* Feature Icons */}
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <Recycle className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium">Eco-Friendly</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm font-medium">Community Driven</span>
              </div>
              <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium">Trusted Network</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-20"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Auth Modal */}
      {showAuth && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full  h-full rounded-2xl">
            <button
              onClick={() => setShowAuth(false)}
              className="absolute -top--10 -right--20 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 shadow-lg z-10"
            >
              ✕
            </button>
            <Auth onClose={() => setShowAuth(false)} />
          </div>
        </div>
      )}
    </>
  )
}

export default HeroSection
