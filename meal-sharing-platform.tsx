import React, { useState } from 'react';
import { Search, Menu, User, Heart, BookOpen, MessageSquare, Share2, Plus, ArrowUpRight, Save } from 'lucide-react';

const FoodFolio = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample meal post data
  const mealPosts = [
    {
      id: 1,
      title: "Grilled Salmon with Avocado Salsa",
      image: "/api/placeholder/400/550",
      user: {
        name: "Emma Wilson",
        avatar: "/api/placeholder/40/40"
      },
      likes: 342,
      macros: {
        calories: 450,
        protein: 38,
        carbs: 12,
        fat: 28
      },
      tags: ["high-protein", "low-carb", "dinner"],
      hasRecipe: true
    },
    {
      id: 2,
      title: "Protein-Packed Breakfast Bowl",
      image: "/api/placeholder/400/350",
      user: {
        name: "Marcus Chen",
        avatar: "/api/placeholder/40/40"
      },
      likes: 218,
      macros: {
        calories: 380,
        protein: 25,
        carbs: 42,
        fat: 14
      },
      tags: ["breakfast", "high-protein", "meal-prep"],
      hasRecipe: true
    },
    {
      id: 3,
      title: "Vegan Buddha Bowl",
      image: "/api/placeholder/400/480",
      user: {
        name: "Sophia Lee",
        avatar: "/api/placeholder/40/40"
      },
      likes: 412,
      macros: {
        calories: 320,
        protein: 15,
        carbs: 45,
        fat: 12
      },
      tags: ["vegan", "lunch", "plant-based"],
      hasRecipe: true
    },
    {
      id: 4,
      title: "Keto-Friendly Fat Bombs",
      image: "/api/placeholder/400/300",
      user: {
        name: "Tyler James",
        avatar: "/api/placeholder/40/40"
      },
      likes: 189,
      macros: {
        calories: 210,
        protein: 5,
        carbs: 3,
        fat: 21
      },
      tags: ["keto", "snack", "dessert"],
      hasRecipe: true
    },
    {
      id: 5,
      title: "Mediterranean Chicken Meal Prep",
      image: "/api/placeholder/400/520",
      user: {
        name: "Olivia Rodriguez",
        avatar: "/api/placeholder/40/40"
      },
      likes: 275,
      macros: {
        calories: 420,
        protein: 35,
        carbs: 30,
        fat: 18
      },
      tags: ["meal-prep", "lunch", "high-protein"],
      hasRecipe: true
    },
    {
      id: 6,
      title: "Overnight Protein Oats",
      image: "/api/placeholder/400/400",
      user: {
        name: "Alex Thompson",
        avatar: "/api/placeholder/40/40"
      },
      likes: 231,
      macros: {
        calories: 350,
        protein: 22,
        carbs: 48,
        fat: 10
      },
      tags: ["breakfast", "meal-prep", "vegetarian"],
      hasRecipe: true
    }
  ];
  
  // Filter tags for the discovery section
  const popularTags = [
    "All", "High-Protein", "Low-Carb", "Vegan", "Keto", "Meal-Prep", 
    "Breakfast", "Lunch", "Dinner", "Snacks", "Desserts"
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <BookOpen className="h-8 w-8 text-rose-500" />
                <span className="ml-2 text-2xl font-bold text-rose-500">FoodFolio</span>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
              <div className="max-w-lg w-full lg:max-w-xs">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
                    placeholder="Search recipes, users, or tags..."
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center">
              <button className="p-1 rounded-full text-gray-500 hover:text-rose-500 focus:outline-none">
                <Menu className="h-6 w-6" />
              </button>
              <button className="ml-3 p-1 rounded-full text-gray-500 hover:text-rose-500 focus:outline-none">
                <User className="h-6 w-6" />
              </button>
              <button className="ml-3 p-2 rounded-full bg-rose-500 text-white hover:bg-rose-600 focus:outline-none">
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <div className="flex -mb-px">
              <button
                onClick={() => setActiveTab('discover')}
                className={`mr-8 py-4 text-sm font-medium ${
                  activeTab === 'discover'
                    ? 'border-b-2 border-rose-500 text-rose-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Discover
              </button>
              <button
                onClick={() => setActiveTab('following')}
                className={`mr-8 py-4 text-sm font-medium ${
                  activeTab === 'following'
                    ? 'border-b-2 border-rose-500 text-rose-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Following
              </button>
              <button
                onClick={() => setActiveTab('trending')}
                className={`mr-8 py-4 text-sm font-medium ${
                  activeTab === 'trending'
                    ? 'border-b-2 border-rose-500 text-rose-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Trending
              </button>
              <button
                onClick={() => setActiveTab('saved')}
                className={`py-4 text-sm font-medium ${
                  activeTab === 'saved'
                    ? 'border-b-2 border-rose-500 text-rose-500'
                    : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Saved
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Filter Tags */}
        <div className="flex overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex space-x-2">
            {popularTags.map((tag, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                  index === 0
                    ? 'bg-rose-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-rose-100 border border-gray-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        {/* Pinterest-style Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
          {mealPosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-6 rounded-xl bg-white shadow-sm hover:shadow-md transition overflow-hidden">
              <div className="relative group">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50">
                      <Save className="h-5 w-5 text-rose-500" />
                    </button>
                    <button className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50">
                      <Share2 className="h-5 w-5 text-rose-500" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                
                {/* Macros Information */}
                <div className="bg-gray-50 p-3 rounded-lg mb-3">
                  <p className="text-sm font-medium text-gray-500 mb-2">Nutrition per serving:</p>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="text-center">
                      <p className="text-lg font-bold text-gray-800">{post.macros.calories}</p>
                      <p className="text-xs text-gray-500">calories</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-rose-500">{post.macros.protein}g</p>
                      <p className="text-xs text-gray-500">protein</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-blue-500">{post.macros.carbs}g</p>
                      <p className="text-xs text-gray-500">carbs</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-yellow-500">{post.macros.fat}g</p>
                      <p className="text-xs text-gray-500">fat</p>
                    </div>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* Recipe Link */}
                {post.hasRecipe && (
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-600 mb-3"
                  >
                    View Full Recipe 
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                )}
                
                {/* User and Likes */}
                <div className="flex justify-between items-center mt-1">
                  <div className="flex items-center">
                    <img 
                      src={post.user.avatar} 
                      alt={post.user.name} 
                      className="w-6 h-6 rounded-full mr-2" 
                    />
                    <span className="text-sm font-medium">{post.user.name}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Heart className="h-4 w-4 mr-1" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FoodFolio;
