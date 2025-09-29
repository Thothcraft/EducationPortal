'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Play, 
  FileText, 
  Code, 
  Download, 
  Clock, 
  Target, 
  CheckCircle, 
  BookOpen,
  Video,
  Database,
  Brain,
  ArrowLeft
} from 'lucide-react';
import Link from 'next/link';
import apiService, { CurriculumModule } from '../../services/api';

export default function ModulePage() {
  const params = useParams();
  const moduleId = params.id as string;
  const [module, setModule] = useState<CurriculumModule | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetchModuleDetails();
  }, [moduleId]);

  const fetchModuleDetails = async () => {
    try {
      const response = await apiService.getCurriculum();
      const modules = response.modules || [];
      const moduleData = modules.find((m: CurriculumModule) => m.module_id === moduleId);
      
      if (moduleData) {
        setModule(moduleData);
        // Simulate progress from localStorage
        const savedProgress = localStorage.getItem(`module_progress_${moduleId}`);
        setProgress(savedProgress ? parseInt(savedProgress) : 0);
      }
    } catch (error) {
      console.error('Error fetching module:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = (newProgress: number) => {
    setProgress(newProgress);
    localStorage.setItem(`module_progress_${moduleId}`, newProgress.toString());
  };

  const getIconForMaterialType = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-5 h-5" />;
      case 'pdf': return <FileText className="w-5 h-5" />;
      case 'code': return <Code className="w-5 h-5" />;
      case 'notebook': return <BookOpen className="w-5 h-5" />;
      case 'dataset': return <Database className="w-5 h-5" />;
      case 'model': return <Brain className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-400 bg-green-500/20';
      case 'intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'advanced': return 'text-orange-400 bg-orange-500/20';
      case 'expert': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lesson': return 'text-blue-400 bg-blue-500/20';
      case 'lab': return 'text-purple-400 bg-purple-500/20';
      case 'project': return 'text-green-400 bg-green-500/20';
      case 'quiz': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
      </div>
    );
  }

  if (!module) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Module Not Found</h1>
          <Link href="/courses" className="text-blue-400 hover:text-blue-300">
            ← Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            href="/courses" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(module.type)}`}>
                  {module.type.charAt(0).toUpperCase() + module.type.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(module.difficulty)}`}>
                  {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">{module.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{module.description}</p>
              
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{module.duration_minutes} minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  <span>{module.learning_objectives.length} objectives</span>
                </div>
              </div>
            </div>
            
            {/* Progress Circle */}
            <div className="relative w-24 h-24">
              <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#10B981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  strokeDashoffset={`${2 * Math.PI * 40 * (1 - progress / 100)}`}
                  className="transition-all duration-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold">{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="w-6 h-6 text-green-400" />
                Learning Objectives
              </h2>
              <ul className="space-y-3">
                {module.learning_objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Main Video/Content */}
            {module.content?.video_url && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Play className="w-6 h-6 text-blue-400" />
                  Main Content
                </h2>
                <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/50 mx-auto mb-4" />
                    <p className="text-white/70">Video Player</p>
                    <p className="text-sm text-white/50">Click to play: {module.title}</p>
                  </div>
                </div>
                <button
                  onClick={() => updateProgress(Math.min(progress + 25, 100))}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Watch Video
                </button>
              </motion.div>
            )}

            {/* Interactive Lab */}
            {module.type === 'lab' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Code className="w-6 h-6 text-purple-400" />
                  Interactive Lab
                </h2>
                <div className="bg-black/50 rounded-lg p-4 mb-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
{`# Thoth Device Setup Lab
import sense_hat
import time

# Initialize Sense HAT
sense = sense_hat.SenseHat()

# Read sensor data
temperature = sense.get_temperature()
humidity = sense.get_humidity()
pressure = sense.get_pressure()

print(f"Temperature: {temperature:.1f}°C")
print(f"Humidity: {humidity:.1f}%")
print(f"Pressure: {pressure:.1f}mb")

# Display on LED matrix
sense.show_message("Hello Thoth!", text_colour=[0, 255, 0])`}
                  </pre>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => updateProgress(Math.min(progress + 30, 100))}
                    className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Run Code
                  </button>
                  <button className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                    Submit Lab
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Materials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Course Materials</h3>
              <div className="space-y-3">
                {module.content?.materials?.map((material, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="text-blue-400">
                      {getIconForMaterialType(material.type)}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{material.title}</p>
                      <p className="text-sm text-gray-400 capitalize">{material.type}</p>
                    </div>
                    <Download className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
                
                {/* Additional Materials */}
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <Video className="w-5 h-5 text-blue-400" />
                  <div className="flex-1">
                    <p className="text-white font-medium">Video Lecture</p>
                    <p className="text-sm text-gray-400">45 minutes</p>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">
                  <FileText className="w-5 h-5 text-green-400" />
                  <div className="flex-1">
                    <p className="text-white font-medium">Lab Instructions</p>
                    <p className="text-sm text-gray-400">PDF Guide</p>
                  </div>
                  <Download className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </motion.div>

            {/* Prerequisites */}
            {module.prerequisites.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
                <div className="space-y-2">
                  {module.prerequisites.map((prereq, index) => (
                    <div key={index} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{prereq}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Progress Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Your Progress</h3>
              <div className="space-y-3">
                <button
                  onClick={() => updateProgress(25)}
                  className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 px-4 rounded-lg transition-colors"
                >
                  Mark as Started
                </button>
                <button
                  onClick={() => updateProgress(100)}
                  className="w-full bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 px-4 rounded-lg transition-colors"
                >
                  Mark as Complete
                </button>
                <button
                  onClick={() => updateProgress(0)}
                  className="w-full bg-gray-500/20 hover:bg-gray-500/30 text-gray-400 py-2 px-4 rounded-lg transition-colors"
                >
                  Reset Progress
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
