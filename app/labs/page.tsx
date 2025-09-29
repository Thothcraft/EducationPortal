'use client';

import React, { useState, useEffect } from 'react';
import { Beaker, Play, CheckCircle, Clock, Code, Download, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import apiService from '../services/api';

export default function LabsPage() {
  const [labs, setLabs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    loadLabs();
  }, []);

  const loadLabs = async () => {
    try {
      // Try to load from backend
      const labsData = await apiService.getLabs();
      setLabs(labsData);
    } catch (error) {
      console.error('Failed to load labs:', error);
      // Demo labs data
      setLabs([
        {
          id: 'lab_001',
          title: 'Thoth Device Setup Lab',
          description: 'Learn to configure and connect your Thoth IoT device to the network.',
          difficulty: 'beginner',
          estimated_time: 30,
          status: 'completed',
          type: 'hands-on',
          module_id: 'mod_002',
          resources: [
            { type: 'notebook', name: 'Device Setup Guide', url: '/notebooks/device-setup.ipynb' },
            { type: 'code', name: 'Configuration Script', url: '/code/setup.py' },
            { type: 'video', name: 'Setup Walkthrough', url: '/videos/setup-guide.mp4' }
          ],
          objectives: [
            'Connect Thoth device to WiFi network',
            'Install required software packages',
            'Test sensor functionality',
            'Verify data transmission'
          ],
          completed_at: '2024-01-15T10:30:00Z',
          score: 95
        },
        {
          id: 'lab_002',
          title: 'Sensor Data Collection',
          description: 'Collect and analyze data from various sensors on the Thoth device.',
          difficulty: 'beginner',
          estimated_time: 45,
          status: 'completed',
          type: 'data-analysis',
          module_id: 'mod_003',
          resources: [
            { type: 'notebook', name: 'Data Collection Notebook', url: '/notebooks/sensor-data.ipynb' },
            { type: 'dataset', name: 'Sample Sensor Data', url: '/data/sensor-samples.csv' },
            { type: 'code', name: 'Analysis Scripts', url: '/code/analyze.py' }
          ],
          objectives: [
            'Read temperature and humidity data',
            'Collect accelerometer readings',
            'Log data to CSV files',
            'Create basic visualizations'
          ],
          completed_at: '2024-01-18T14:20:00Z',
          score: 88
        },
        {
          id: 'lab_003',
          title: 'Machine Learning Pipeline',
          description: 'Build a complete ML pipeline for activity recognition using sensor data.',
          difficulty: 'intermediate',
          estimated_time: 90,
          status: 'in_progress',
          type: 'ml-project',
          module_id: 'mod_004',
          resources: [
            { type: 'notebook', name: 'ML Pipeline Notebook', url: '/notebooks/ml-pipeline.ipynb' },
            { type: 'dataset', name: 'Training Dataset', url: '/data/activity-data.csv' },
            { type: 'code', name: 'Model Training', url: '/code/train_model.py' }
          ],
          objectives: [
            'Preprocess sensor data',
            'Extract relevant features',
            'Train classification model',
            'Evaluate model performance'
          ],
          started_at: '2024-01-20T09:00:00Z',
          progress: 65
        },
        {
          id: 'lab_004',
          title: 'Federated Learning Setup',
          description: 'Implement federated learning across multiple Thoth devices.',
          difficulty: 'advanced',
          estimated_time: 120,
          status: 'available',
          type: 'distributed-ml',
          module_id: 'mod_005',
          resources: [
            { type: 'notebook', name: 'Federated Learning Guide', url: '/notebooks/federated-learning.ipynb' },
            { type: 'code', name: 'FL Framework', url: '/code/federated.py' },
            { type: 'documentation', name: 'Flower Tutorial', url: 'https://flower.dev/docs/' }
          ],
          objectives: [
            'Set up Flower framework',
            'Configure client devices',
            'Implement federated averaging',
            'Monitor training progress'
          ]
        },
        {
          id: 'lab_005',
          title: 'Edge AI Deployment',
          description: 'Deploy trained models to edge devices for real-time inference.',
          difficulty: 'advanced',
          estimated_time: 75,
          status: 'locked',
          type: 'deployment',
          module_id: 'mod_005',
          resources: [
            { type: 'notebook', name: 'Edge Deployment Guide', url: '/notebooks/edge-deploy.ipynb' },
            { type: 'code', name: 'Inference Engine', url: '/code/inference.py' }
          ],
          objectives: [
            'Optimize model for edge deployment',
            'Implement real-time inference',
            'Monitor model performance',
            'Handle model updates'
          ]
        },
        {
          id: 'lab_006',
          title: 'Capstone Project',
          description: 'Build a complete IoT + AI solution addressing a real-world problem.',
          difficulty: 'expert',
          estimated_time: 180,
          status: 'locked',
          type: 'capstone',
          module_id: 'mod_006',
          resources: [
            { type: 'documentation', name: 'Project Guidelines', url: '/docs/capstone-guide.pdf' },
            { type: 'template', name: 'Project Template', url: '/templates/capstone-template.zip' }
          ],
          objectives: [
            'Define problem statement',
            'Design system architecture',
            'Implement full solution',
            'Present final project'
          ]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const filteredLabs = labs.filter(lab => {
    if (activeTab === 'all') return true;
    if (activeTab === 'available') return lab.status === 'available' || lab.status === 'in_progress';
    if (activeTab === 'completed') return lab.status === 'completed';
    if (activeTab === 'in_progress') return lab.status === 'in_progress';
    return true;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'available':
        return <Play className="w-5 h-5 text-blue-400" />;
      default:
        return <div className="w-5 h-5 bg-gray-600 rounded-full" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-500/20 text-green-400';
      case 'intermediate':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced':
        return 'bg-orange-500/20 text-orange-400';
      case 'expert':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'notebook':
        return <Code className="w-4 h-4" />;
      case 'code':
        return <Code className="w-4 h-4" />;
      case 'dataset':
        return <Download className="w-4 h-4" />;
      case 'video':
        return <Play className="w-4 h-4" />;
      case 'documentation':
        return <ExternalLink className="w-4 h-4" />;
      default:
        return <ExternalLink className="w-4 h-4" />;
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

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Beaker className="w-10 h-10 text-purple-400" />
              Interactive Labs
            </h1>
            <p className="text-gray-300">Hands-on learning experiences with real IoT devices and AI models</p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'all', label: 'All Labs', count: labs.length },
              { id: 'available', label: 'Available', count: labs.filter(l => l.status === 'available' || l.status === 'in_progress').length },
              { id: 'in_progress', label: 'In Progress', count: labs.filter(l => l.status === 'in_progress').length },
              { id: 'completed', label: 'Completed', count: labs.filter(l => l.status === 'completed').length }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredLabs.map((lab) => (
              <div key={lab.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors">
                {/* Lab Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(lab.status)}
                    <div>
                      <h3 className="text-xl font-bold text-white">{lab.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(lab.difficulty)}`}>
                          {lab.difficulty}
                        </span>
                        <span className="text-gray-400 text-sm">{lab.estimated_time} min</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4">{lab.description}</p>

                {/* Progress Bar (for in-progress labs) */}
                {lab.status === 'in_progress' && lab.progress && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{lab.progress}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all"
                        style={{ width: `${lab.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Score (for completed labs) */}
                {lab.status === 'completed' && lab.score && (
                  <div className="mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-green-400 font-medium">Score: {lab.score}%</span>
                    <span className="text-gray-400 text-sm">
                      Completed {new Date(lab.completed_at).toLocaleDateString()}
                    </span>
                  </div>
                )}

                {/* Objectives */}
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1">
                    {lab.objectives.slice(0, 3).map((objective: string, index: number) => (
                      <li key={index} className="text-gray-300 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                        {objective}
                      </li>
                    ))}
                    {lab.objectives.length > 3 && (
                      <li className="text-gray-400 text-sm">
                        +{lab.objectives.length - 3} more objectives
                      </li>
                    )}
                  </ul>
                </div>

                {/* Resources */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-2">Resources:</h4>
                  <div className="flex flex-wrap gap-2">
                    {lab.resources.map((resource: any, index: number) => (
                      <div key={index} className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded text-xs text-gray-300">
                        {getResourceIcon(resource.type)}
                        {resource.name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex gap-3">
                  {lab.status === 'available' && (
                    <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Start Lab
                    </button>
                  )}
                  {lab.status === 'in_progress' && (
                    <button className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Continue Lab
                    </button>
                  )}
                  {lab.status === 'completed' && (
                    <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                      Review Lab
                    </button>
                  )}
                  {lab.status === 'locked' && (
                    <button className="flex-1 bg-gray-600 text-gray-400 py-2 px-4 rounded-lg font-medium cursor-not-allowed">
                      Locked
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredLabs.length === 0 && (
            <div className="text-center py-12">
              <Beaker className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-400 mb-2">No labs found</h3>
              <p className="text-gray-500">Try switching to a different tab to see available labs.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
