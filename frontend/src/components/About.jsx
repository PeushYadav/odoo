import React from 'react';
import { 
  Leaf, 
  Heart, 
  Users, 
  Globe, 
  Recycle, 
  Award, 
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Users', icon: Users },
    { number: '50K+', label: 'Items Swapped', icon: Recycle },
    { number: '5K+', label: 'CO₂ Saved (kg)', icon: Globe },
    { number: '98%', label: 'User Satisfaction', icon: Heart }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'We believe in reducing fashion waste and promoting circular economy through item swapping and reuse.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive community of fashion enthusiasts who care about the environment.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Ensuring every item shared on our platform meets high standards for the best user experience.'
    },
    {
      icon: Award,
      title: 'Trust',
      description: 'Creating a secure and trustworthy platform where users can confidently swap and trade items.'
    }
  ];

  const features = [
    'Easy item uploading with quality photos',
    'Secure messaging system between users',
    'Rating and review system for trust',
    'Multiple payment options for convenience',
    'Eco-friendly packaging guidelines',
    'Community-driven sustainability goals'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-24 h-24 bg-green-500 rounded-full"></div>
          <div className="absolute top-40 right-32 w-20 h-20 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-teal-500 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-700 text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Story
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                ReWear
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing the fashion industry by creating a sustainable platform where people can swap, share, and discover pre-loved clothing items while reducing environmental impact.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-green-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-green-200 rounded-full text-green-700 text-sm font-medium mb-6">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Making Fashion 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  {' '}Sustainable
                </span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ReWear was born from a simple idea: fashion should be sustainable, accessible, and fun. We believe that by giving pre-loved items a second life, we can reduce waste, save money, and create a more conscious fashion community.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Leaf className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Environmental Impact</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-2xl p-4">
                    <div className="text-2xl font-bold mb-2">2.5 Million</div>
                    <div className="text-green-100">Liters of water saved through item swapping</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl p-4">
                    <div className="text-2xl font-bold mb-2">15 Tons</div>
                    <div className="text-green-100">CO₂ emissions prevented this year</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-2xl p-4">
                    <div className="text-2xl font-bold mb-2">100%</div>
                    <div className="text-green-100">Commitment to sustainable practices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do at ReWear, from product development to community building.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <div className="flex items-center justify-center mb-6">
              <Users className="w-8 h-8 mr-3" />
              <Heart className="w-8 h-8 mr-3" />
              <Globe className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Sustainable Fashion Movement
            </h2>
            
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Be part of a community that's making a real difference. Every swap, every share, every choice matters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-700 font-bold rounded-2xl hover:bg-green-50 transition-all duration-300 transform hover:scale-105">
                Start Swapping
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
                Learn More
                <Sparkles className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;