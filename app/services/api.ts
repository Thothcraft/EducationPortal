/**
 * API Service for Education Portal
 * Handles all communication with Brain backend for educational features
 */

import axios from 'axios';

// API Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://web-production-d7d37.up.railway.app';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ERR_NETWORK') {
      console.warn('Network error - using mock data for education portal');
      // Return mock curriculum data for network errors
      return Promise.resolve({
        data: {
          success: true,
          message: 'Using mock data (network unavailable)',
          modules: [
            {
              module_id: 'mod_001',
              title: 'Introduction to Thoth Device',
              description: 'Learn about the Raspberry Pi, Sense HAT, and PiSugar components',
              type: 'lesson',
              difficulty: 'beginner',
              duration_minutes: 45,
              order: 1,
              prerequisites: [],
              learning_objectives: ['Understand Thoth hardware', 'Identify key components', 'Setup development environment'],
              content: {
                video_url: 'https://example.com/videos/intro-thoth.mp4',
                slides_url: 'https://example.com/slides/intro-thoth.pdf',
                materials: [
                  { type: 'pdf', title: 'Thoth Hardware Guide', url: 'https://example.com/guides/hardware.pdf' },
                  { type: 'notebook', title: 'Setup Jupyter Notebook', url: 'https://example.com/notebooks/setup.ipynb' }
                ]
              }
            },
            {
              module_id: 'mod_002',
              title: 'WiFi Configuration & Network Setup',
              description: 'Configure WiFi using captive portal and network management',
              type: 'lab',
              difficulty: 'beginner',
              duration_minutes: 90,
              order: 2,
              prerequisites: ['mod_001'],
              learning_objectives: ['Setup WiFi captive portal', 'Configure network settings', 'Test connectivity'],
              content: {
                video_url: 'https://example.com/videos/wifi-setup.mp4',
                lab_instructions: 'https://example.com/labs/wifi-config.md',
                materials: [
                  { type: 'code', title: 'WiFi Configuration Script', url: 'https://example.com/code/wifi_setup.py' },
                  { type: 'pdf', title: 'Network Troubleshooting Guide', url: 'https://example.com/guides/network.pdf' }
                ]
              }
            },
            {
              module_id: 'mod_003',
              title: 'Collecting Sensor Data',
              description: 'Use Sense HAT to collect temperature, humidity, pressure, and motion data',
              type: 'lab',
              difficulty: 'intermediate',
              duration_minutes: 120,
              order: 3,
              prerequisites: ['mod_002'],
              learning_objectives: ['Read sensor data', 'Store data locally', 'Visualize sensor readings'],
              content: {
                video_url: 'https://example.com/videos/sensor-data.mp4',
                notebook_url: 'https://example.com/notebooks/sensor_collection.ipynb',
                materials: [
                  { type: 'code', title: 'Sensor Reading Library', url: 'https://example.com/code/sensors.py' },
                  { type: 'dataset', title: 'Sample Sensor Data', url: 'https://example.com/data/sample_sensors.csv' },
                  { type: 'pdf', title: 'Sense HAT API Reference', url: 'https://example.com/docs/sensehat-api.pdf' }
                ]
              }
            },
            {
              module_id: 'mod_004',
              title: 'Introduction to AI/ML on Edge Devices',
              description: 'Learn machine learning concepts and edge computing with TensorFlow Lite',
              type: 'lesson',
              difficulty: 'intermediate',
              duration_minutes: 150,
              order: 4,
              prerequisites: ['mod_003'],
              learning_objectives: ['Understand edge ML', 'Train simple models', 'Deploy to Raspberry Pi'],
              content: {
                video_url: 'https://example.com/videos/edge-ml.mp4',
                slides_url: 'https://example.com/slides/edge-ml.pdf',
                notebook_url: 'https://example.com/notebooks/edge_ml_intro.ipynb',
                materials: [
                  { type: 'code', title: 'TensorFlow Lite Examples', url: 'https://example.com/code/tflite_examples.py' },
                  { type: 'model', title: 'Pre-trained Sensor Model', url: 'https://example.com/models/sensor_classifier.tflite' },
                  { type: 'pdf', title: 'Edge Computing Guide', url: 'https://example.com/guides/edge-computing.pdf' }
                ]
              }
            },
            {
              module_id: 'mod_005',
              title: 'Federated Learning with Multiple Devices',
              description: 'Implement federated learning using Flower framework across Thoth devices',
              type: 'project',
              difficulty: 'advanced',
              duration_minutes: 180,
              order: 5,
              prerequisites: ['mod_004'],
              learning_objectives: ['Setup Flower client', 'Participate in federated training', 'Understand privacy preservation'],
              content: {
                video_url: 'https://example.com/videos/federated-learning.mp4',
                project_guide: 'https://example.com/projects/federated-learning.md',
                notebook_url: 'https://example.com/notebooks/federated_learning.ipynb',
                materials: [
                  { type: 'code', title: 'Flower Client Implementation', url: 'https://example.com/code/flower_client.py' },
                  { type: 'code', title: 'Federated Training Script', url: 'https://example.com/code/federated_train.py' },
                  { type: 'pdf', title: 'Differential Privacy Guide', url: 'https://example.com/guides/differential-privacy.pdf' },
                  { type: 'dataset', title: 'Federated Training Dataset', url: 'https://example.com/data/federated_data.zip' }
                ]
              }
            },
            {
              module_id: 'mod_006',
              title: 'Capstone: Smart Home Monitor',
              description: 'Build a complete IoT solution for smart home monitoring with AI predictions',
              type: 'project',
              difficulty: 'expert',
              duration_minutes: 300,
              order: 6,
              prerequisites: ['mod_005'],
              learning_objectives: ['Design IoT architecture', 'Implement real-time monitoring', 'Deploy production system'],
              content: {
                video_url: 'https://example.com/videos/capstone-project.mp4',
                project_template: 'https://example.com/templates/smart-home-monitor.zip',
                requirements: 'https://example.com/projects/capstone-requirements.md',
                materials: [
                  { type: 'code', title: 'Smart Home Dashboard', url: 'https://example.com/code/dashboard.py' },
                  { type: 'code', title: 'Alert System', url: 'https://example.com/code/alerts.py' },
                  { type: 'model', title: 'Anomaly Detection Model', url: 'https://example.com/models/anomaly_detector.pkl' },
                  { type: 'pdf', title: 'Deployment Guide', url: 'https://example.com/guides/deployment.pdf' },
                  { type: 'video', title: 'Demo Walkthrough', url: 'https://example.com/videos/capstone-demo.mp4' }
                ]
              }
            }
          ],
          courses: [
            {
              course_id: 'course_001',
              title: 'AI & IoT with Thoth',
              description: 'Complete course on IoT and AI',
              instructor: 'Thoth Team',
              difficulty: 'intermediate',
              duration_hours: 15,
              modules: ['mod_001', 'mod_002'],
              enrolled_students: 0,
              rating: 4.8
            }
          ]
        }
      });
    }
    return Promise.reject(error);
  }
);

// Types
export interface CurriculumModule {
  module_id: string;
  title: string;
  description: string;
  type: 'lesson' | 'lab' | 'project' | 'quiz' | 'assignment';
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration_minutes: number;
  prerequisites: string[];
  learning_objectives: string[];
  order: number;
  content?: {
    video_url?: string;
    slides_url?: string;
    notebook_url?: string;
    lab_instructions?: string;
    project_guide?: string;
    project_template?: string;
    requirements?: string;
    materials?: Array<{
      type: 'pdf' | 'code' | 'notebook' | 'dataset' | 'model' | 'video';
      title: string;
      url: string;
    }>;
  };
}

export interface ContentItem {
  item_id?: string;
  title: string;
  type: 'video' | 'pdf' | 'notebook' | 'slides' | 'code' | 'interactive';
  url?: string;
  file_path?: string;
  duration_minutes?: number;
  interactive_config?: any;
}

export interface StudentProgress {
  student_id: string;
  module_id: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'reviewed';
  started_at?: string;
  completed_at?: string;
  time_spent_minutes: number;
  score?: number;
  attempts: number;
  notes?: string;
  bookmarks: string[];
}

export interface Course {
  course_id: string;
  title: string;
  description: string;
  instructor: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  duration_hours: number;
  modules: string[];
  enrolled_students: number;
  rating: number;
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface LabSubmission {
  submission_id: string;
  student_id: string;
  lab_id: string;
  code?: string;
  notebook_path?: string;
  output?: string;
  device_data?: any;
  submitted_at: string;
  grade?: number;
  feedback?: string;
}

// API Service
class ApiService {
  // Authentication
  async login(email: string, password: string) {
    const response = await api.post('/token', { email, password });
    if (response.data.access_token) {
      localStorage.setItem('auth_token', response.data.access_token);
    }
    return response.data;
  }

  async register(email: string, password: string, role: string = 'student') {
    const response = await api.post('/register', { email, password, role });
    return response.data;
  }

  async getProfile() {
    const response = await api.get('/profile');
    return response.data;
  }

  // Curriculum
  async getCurriculum(params?: {
    course_id?: string;
    module_type?: string;
    difficulty?: string;
    tags?: string;
  }) {
    const response = await api.get('/curriculum', { params });
    return response.data;
  }

  async getModuleDetails(moduleId: string): Promise<CurriculumModule> {
    const response = await api.get(`/curriculum/${moduleId}`);
    return response.data;
  }

  async updateProgress(progress: Partial<StudentProgress>) {
    const response = await api.post('/curriculum/progress', progress);
    return response.data;
  }

  async getStudentProgress(studentId: string, courseId?: string) {
    const url = courseId 
      ? `/curriculum/progress/${studentId}?course_id=${courseId}`
      : `/curriculum/progress/${studentId}`;
    const response = await api.get(url);
    return response.data;
  }

  async submitLab(submission: Partial<LabSubmission>) {
    const response = await api.post('/curriculum/lab/submit', submission);
    return response.data;
  }

  async getLeaderboard(courseId?: string, limit: number = 10) {
    const params: any = { limit };
    if (courseId) params.course_id = courseId;
    const response = await api.get('/curriculum/leaderboard', { params });
    return response.data;
  }

  // Device Configuration for Labs
  async configureDevice(deviceId: string, config: any) {
    const response = await api.post(`/device/${deviceId}/config`, config);
    return response.data;
  }

  async getDeviceStatus(deviceId: string) {
    const response = await api.get(`/device/${deviceId}/status`);
    return response.data;
  }

  // Sensor Data for Labs
  async getSensorData(deviceId: string) {
    const response = await api.get(`/sensors/current?device_id=${deviceId}`);
    return response.data;
  }

  async controlSensors(deviceId: string, config: any) {
    const response = await api.post('/sensors/control', {
      device_id: deviceId,
      ...config
    });
    return response.data;
  }

  // Training for Advanced Labs
  async setupTraining(config: any) {
    const response = await api.post('/training/setup', config);
    return response.data;
  }

  async getTrainingStatus(jobId: string) {
    const response = await api.get(`/training/status?job_id=${jobId}`);
    return response.data;
  }

  // Files and Resources
  async downloadResource(filePath: string) {
    const response = await api.get(`/file/download`, {
      params: { path: filePath },
      responseType: 'blob'
    });
    return response.data;
  }

  async uploadLabWork(formData: FormData) {
    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  // Community Features
  async getForumPosts(moduleId?: string) {
    // This would connect to Firebase or another backend
    // Mock implementation for now
    return {
      posts: [
        {
          id: '1',
          author: 'Student A',
          title: 'Help with sensor calibration',
          content: 'Having issues with temperature sensor readings...',
          created_at: new Date().toISOString(),
          replies: 3
        }
      ]
    };
  }

  async createForumPost(post: {
    title: string;
    content: string;
    module_id?: string;
  }) {
    // Mock implementation
    return {
      success: true,
      post_id: 'new-post-id'
    };
  }

  // Project Showcase
  async getProjects(filter?: 'featured' | 'recent' | 'popular') {
    // Mock implementation
    return {
      projects: [
        {
          id: '1',
          title: 'Smart Plant Monitor',
          author: 'Student B',
          description: 'IoT system for monitoring plant health',
          image_url: '/project1.jpg',
          likes: 42,
          views: 156
        }
      ]
    };
  }

  async submitProject(project: {
    title: string;
    description: string;
    module_id: string;
    video_url?: string;
    github_url?: string;
  }) {
    // Mock implementation
    return {
      success: true,
      project_id: 'new-project-id'
    };
  }

  // Labs Management
  async getLabs() {
    try {
      const response = await api.get('/curriculum/labs');
      return response.data.labs || [];
    } catch (error) {
      console.warn('Failed to load labs from backend, using mock data');
      // Return mock labs data
      return [];
    }
  }

  // Course Management
  async getCourse(courseId: string) {
    try {
      const response = await api.get(`/curriculum/courses/${courseId}`);
      return response.data;
    } catch (error) {
      console.warn('Failed to load course from backend, using mock data');
      // Return mock course data
      return null;
    }
  }

  // Alias for getCurriculum to match expected method name
  async getCurriculumModules(params?: {
    course_id?: string;
    module_type?: string;
    difficulty?: string;
  }) {
    return this.getCurriculum(params);
  }
}

// Export singleton instance
export const apiService = new ApiService();
export default apiService;
