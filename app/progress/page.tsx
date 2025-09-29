'use client';

import React, { useState, useEffect } from 'react';
import { Trophy, BookOpen, Clock, Target, TrendingUp, Award, CheckCircle, XCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import apiService from '../services/api';

export default function ProgressPage() {
  const [progress, setProgress] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState<any>(null);

  useEffect(() => {
    // Get user info
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('user_role');
    const studentId = localStorage.getItem('student_id');
    
    if (username && role) {
      setUserInfo({ username, role, studentId });
    }

    // Load progress data
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const studentId = localStorage.getItem('student_id') || 'demo-student';
      const progressData = await apiService.getStudentProgress(studentId);
      setProgress(progressData);
    } catch (error) {
      console.error('Failed to load progress:', error);
      // Demo progress data
      setProgress({
        student_id: 'demo-student',
        overall_progress: 65,
        completed_modules: 4,
        total_modules: 6,
        current_streak: 7,
        total_points: 1250,
        achievements: [
          { id: 1, name: 'First Steps', description: 'Completed first module', earned_at: '2024-01-15', icon: '🎯' },
          { id: 2, name: 'Quick Learner', description: 'Completed 3 modules in one week', earned_at: '2024-01-20', icon: '⚡' },
          { id: 3, name: 'Consistent', description: 'Maintained 7-day streak', earned_at: '2024-01-22', icon: '🔥' }
        ],
        progress: [
          { module_id: 'mod_001', status: 'completed', score: 95, completed_at: '2024-01-15', time_spent: 120 },
          { module_id: 'mod_002', status: 'completed', score: 88, completed_at: '2024-01-18', time_spent: 95 },
          { module_id: 'mod_003', status: 'completed', score: 92, completed_at: '2024-01-20', time_spent: 110 },
          { module_id: 'mod_004', status: 'completed', score: 87, completed_at: '2024-01-22', time_spent: 105 },
          { module_id: 'mod_005', status: 'in_progress', score: null, completed_at: null, time_spent: 45 },
          { module_id: 'mod_006', status: 'not_started', score: null, completed_at: null, time_spent: 0 }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
        </div>
      </>
    );
  }

  const completionPercentage = progress ? Math.round((progress.completed_modules / progress.total_modules) * 100) : 0;
  const averageScore = progress?.progress
    ? Math.round(progress.progress.filter((p: any) => p.score).reduce((sum: number, p: any) => sum + p.score, 0) / progress.progress.filter((p: any) => p.score).length)
    : 0;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <TrendingUp className="w-10 h-10 text-green-400" />
              Learning Progress
            </h1>
            <p className="text-gray-300">Track your journey through the AI & IoT curriculum</p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Overall Progress</p>
                  <p className="text-3xl font-bold text-white">{completionPercentage}%</p>
                </div>
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <div className="mt-4 bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Modules Completed</p>
                  <p className="text-3xl font-bold text-white">{progress?.completed_modules || 0}/{progress?.total_modules || 6}</p>
                </div>
                <BookOpen className="w-8 h-8 text-green-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Current Streak</p>
                  <p className="text-3xl font-bold text-white">{progress?.current_streak || 0} days</p>
                </div>
                <Trophy className="w-8 h-8 text-yellow-400" />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Average Score</p>
                  <p className="text-3xl font-bold text-white">{averageScore}%</p>
                </div>
                <Award className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Module Progress */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-400" />
                Module Progress
              </h2>
              
              <div className="space-y-4">
                {progress?.progress?.map((moduleProgress: any, index: number) => {
                  const moduleNames = [
                    'Introduction to IoT & AI',
                    'Thoth Device Setup',
                    'Sensor Data Collection',
                    'Machine Learning Basics',
                    'Federated Learning',
                    'Capstone Project'
                  ];
                  
                  return (
                    <div key={moduleProgress.module_id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-3">
                        {moduleProgress.status === 'completed' ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : moduleProgress.status === 'in_progress' ? (
                          <Clock className="w-6 h-6 text-yellow-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-gray-400" />
                        )}
                        <div>
                          <p className="text-white font-medium">{moduleNames[index]}</p>
                          <p className="text-gray-400 text-sm">
                            {moduleProgress.status === 'completed' 
                              ? `Completed • Score: ${moduleProgress.score}%`
                              : moduleProgress.status === 'in_progress'
                              ? `In Progress • ${moduleProgress.time_spent}min spent`
                              : 'Not Started'
                            }
                          </p>
                        </div>
                      </div>
                      {moduleProgress.status === 'completed' && (
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{moduleProgress.score}%</p>
                          <p className="text-gray-400 text-xs">{moduleProgress.time_spent}min</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Achievements
              </h2>
              
              <div className="space-y-4">
                {progress?.achievements?.map((achievement: any) => (
                  <div key={achievement.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-white font-medium">{achievement.name}</h3>
                      <p className="text-gray-400 text-sm">{achievement.description}</p>
                      <p className="text-gray-500 text-xs mt-1">
                        Earned on {new Date(achievement.earned_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Upcoming Achievements */}
                <div className="border-t border-white/10 pt-4">
                  <h4 className="text-white font-medium mb-3">Upcoming Achievements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg opacity-60">
                      <div className="text-2xl">🎓</div>
                      <div>
                        <p className="text-white text-sm">Graduate</p>
                        <p className="text-gray-400 text-xs">Complete all 6 modules</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg opacity-60">
                      <div className="text-2xl">⭐</div>
                      <div>
                        <p className="text-white text-sm">Perfect Score</p>
                        <p className="text-gray-400 text-xs">Score 100% on any module</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
