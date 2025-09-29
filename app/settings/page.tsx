'use client';

import React, { useState, useEffect } from 'react';
import { Settings, User, Bell, Shield, Palette, Globe, Save, BookOpen } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function SettingsPage() {
  const [userInfo, setUserInfo] = useState<any>(null);
  const [settings, setSettings] = useState({
    notifications: {
      courseUpdates: true,
      assignmentReminders: true,
      achievementAlerts: true,
      weeklyProgress: false
    },
    privacy: {
      profileVisibility: 'public',
      progressSharing: true,
      dataCollection: true
    },
    learning: {
      difficulty: 'adaptive',
      pace: 'self-paced',
      language: 'en',
      theme: 'dark'
    }
  });

  useEffect(() => {
    // Get user info from localStorage
    const username = localStorage.getItem('username');
    const role = localStorage.getItem('user_role');
    const studentId = localStorage.getItem('student_id');
    
    if (username && role) {
      setUserInfo({ username, role, studentId });
    }

    // Load saved settings
    const savedSettings = localStorage.getItem('education_settings');
    if (savedSettings) {
      setSettings({ ...settings, ...JSON.parse(savedSettings) });
    }
  }, []);

  const handleSettingChange = (category: string, key: string, value: any) => {
    const newSettings = {
      ...settings,
      [category]: {
        ...settings[category as keyof typeof settings],
        [key]: value
      }
    };
    setSettings(newSettings);
  };

  const handleSave = () => {
    localStorage.setItem('education_settings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Settings className="w-10 h-10 text-blue-400" />
              Settings
            </h1>
            <p className="text-gray-300">Customize your learning experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Settings */}
            <div className="lg:col-span-2 space-y-6">
              {/* Account Information */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-blue-400" />
                  Account Information
                </h2>
                
                {userInfo && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Username</label>
                      <input
                        type="text"
                        value={userInfo.username}
                        disabled
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Role</label>
                      <input
                        type="text"
                        value={userInfo.role}
                        disabled
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white capitalize"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Student ID</label>
                      <input
                        type="text"
                        value={userInfo.studentId || 'N/A'}
                        disabled
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Notification Settings */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-yellow-400" />
                  Notifications
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Course Updates</p>
                      <p className="text-sm text-gray-400">Get notified about new content and announcements</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.courseUpdates}
                        onChange={(e) => handleSettingChange('notifications', 'courseUpdates', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Assignment Reminders</p>
                      <p className="text-sm text-gray-400">Reminders for upcoming deadlines and assignments</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.assignmentReminders}
                        onChange={(e) => handleSettingChange('notifications', 'assignmentReminders', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Achievement Alerts</p>
                      <p className="text-sm text-gray-400">Celebrate your learning milestones</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.achievementAlerts}
                        onChange={(e) => handleSettingChange('notifications', 'achievementAlerts', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Weekly Progress Report</p>
                      <p className="text-sm text-gray-400">Weekly summary of your learning progress</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.notifications.weeklyProgress}
                        onChange={(e) => handleSettingChange('notifications', 'weeklyProgress', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Privacy Settings */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-6 h-6 text-green-400" />
                  Privacy & Data
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Profile Visibility</label>
                    <select 
                      value={settings.privacy.profileVisibility}
                      onChange={(e) => handleSettingChange('privacy', 'profileVisibility', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Progress Sharing</p>
                      <p className="text-sm text-gray-400">Allow others to see your learning progress</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.progressSharing}
                        onChange={(e) => handleSettingChange('privacy', 'progressSharing', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Learning Analytics</p>
                      <p className="text-sm text-gray-400">Help improve the platform with anonymous usage data</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={settings.privacy.dataCollection}
                        onChange={(e) => handleSettingChange('privacy', 'dataCollection', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Learning Preferences */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-purple-400" />
                  Learning Preferences
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Difficulty Level</label>
                    <select 
                      value={settings.learning.difficulty}
                      onChange={(e) => handleSettingChange('learning', 'difficulty', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="adaptive">Adaptive (Recommended)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Learning Pace</label>
                    <select 
                      value={settings.learning.pace}
                      onChange={(e) => handleSettingChange('learning', 'pace', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                    >
                      <option value="self-paced">Self-Paced</option>
                      <option value="structured">Structured Schedule</option>
                      <option value="intensive">Intensive</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Language</label>
                    <select 
                      value={settings.learning.language}
                      onChange={(e) => handleSettingChange('learning', 'language', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="space-y-6">
              {/* Theme Settings */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Palette className="w-5 h-5 text-pink-400" />
                  Appearance
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Theme</label>
                    <select 
                      value={settings.learning.theme}
                      onChange={(e) => handleSettingChange('learning', 'theme', e.target.value)}
                      className="w-full px-3 py-2 bg-white/5 border border-white/20 rounded-lg text-white text-sm"
                    >
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                      <option value="auto">Auto</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Learning Stats */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Learning Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Modules Completed</span>
                    <span className="text-white font-medium">4/6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Study Time</span>
                    <span className="text-white font-medium">32h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Current Streak</span>
                    <span className="text-white font-medium">7 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Achievements</span>
                    <span className="text-white font-medium">12</span>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                Save Settings
              </button>

              {/* Export Data */}
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                Export Learning Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
