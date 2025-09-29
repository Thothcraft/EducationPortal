'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Lock } from 'lucide-react';

interface ProgressBarProps {
  modules: {
    module_id: string;
    title: string;
    status: 'completed' | 'in_progress' | 'locked' | 'available';
    score?: number;
  }[];
  currentModule?: string;
}

export default function ProgressBar({ modules, currentModule }: ProgressBarProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return (
          <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />
        );
      case 'locked':
        return <Lock className="w-4 h-4 text-gray-500" />;
      default:
        return <Circle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in_progress': return 'bg-blue-500';
      case 'available': return 'bg-gray-600';
      default: return 'bg-gray-700';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
      <h3 className="text-lg font-semibold text-white mb-4">Learning Path</h3>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gray-600" />
        
        {/* Modules */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.module_id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-4 ${
                module.module_id === currentModule ? 'scale-105' : ''
              }`}
            >
              {/* Status Icon */}
              <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                getStatusColor(module.status)
              } ${module.status === 'in_progress' ? 'animate-pulse' : ''}`}>
                {getStatusIcon(module.status)}
              </div>
              
              {/* Module Info */}
              <div className="flex-1">
                <h4 className={`font-medium ${
                  module.status === 'locked' ? 'text-gray-500' : 'text-white'
                }`}>
                  {module.title}
                </h4>
                
                {module.score !== undefined && (
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-xs text-gray-400">Score:</span>
                    <span className={`text-sm font-medium ${
                      module.score >= 80 ? 'text-green-400' : 
                      module.score >= 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {module.score}%
                    </span>
                  </div>
                )}
                
                {module.module_id === currentModule && (
                  <span className="inline-block mt-1 px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                    Current Module
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Overall Progress */}
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="flex justify-between text-sm text-gray-300 mb-2">
          <span>Overall Progress</span>
          <span>
            {modules.filter(m => m.status === 'completed').length} / {modules.length} completed
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ 
              width: `${(modules.filter(m => m.status === 'completed').length / modules.length) * 100}%` 
            }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
