import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Film } from 'lucide-react';
import { cn } from '../utils';

export const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <NavLink 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold"
          >
            <Film className="w-8 h-8 text-purple-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
              KittenFlix
            </span>
          </NavLink>
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium",
                  isActive
                    ? "bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10"
                    : "hover:bg-white/5 text-gray-300 hover:text-white"
                )
              }
            >
              <Home className="w-4 h-4" />
              <span>Search</span>
            </NavLink>
            <NavLink
              to="/discover"
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-2 px-6 py-2.5 rounded-full transition-all duration-300 font-medium",
                  isActive
                    ? "bg-purple-500/20 text-purple-400 shadow-lg shadow-purple-500/10"
                    : "hover:bg-white/5 text-gray-300 hover:text-white"
                )
              }
            >
              <Compass className="w-4 h-4" />
              <span>Discover</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};