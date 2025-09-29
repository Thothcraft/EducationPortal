'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BookOpen, Play, CheckCircle, Clock, Users, Star, ArrowLeft } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Link from 'next/link';
import apiService from '../../services/api';

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const [course, setCourse] = useState<any>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<any>(null);

  useEffect(() => {
    loadCourseData();
  }, [courseId]);

  const loadCourseData = async () => {
    try {
      // Load course details and modules
      const [courseData, modulesData, progressData] = await Promise.all([
        apiService.getCourse(courseId),
        apiService.getCurriculumModules(),
        apiService.getStudentProgress(localStorage.getItem('student_id') || 'demo-student')
      ]);

      setCourse(courseData);
      setModules(modulesData.modules || []);
      setProgress(progressData);
    } catch (error) {
      console.error('Failed to load course data:', error);
      
      // Demo course data
      setCourse({
        course_id: courseId,
        title: 'Complete AI & IoT Mastery',
        description: 'Master the fundamentals of AI and IoT through hands-on projects with Thoth devices. Build real-world applications from sensor data collection to federated learning.',
        difficulty: 'intermediate',
        duration_hours: 40,
        modules: ['mod_001', 'mod_002', 'mod_003', 'mod_004', 'mod_005', 'mod_006'],
        instructor: 'Dr. Sarah Chen',
        rating: 4.8,
        students_enrolled: 1247,
        learning_outcomes: [
          'Build and configure IoT devices with Raspberry Pi and Sense HAT',
          'Implement machine learning algorithms for sensor data analysis',
          'Deploy federated learning systems across multiple devices',
          'Create real-time data visualization dashboards',
          'Develop edge AI applications for IoT devices'
        ],
        prerequisites: [
          'Basic programming knowledge (Python preferred)',
          'Understanding of basic electronics concepts',
          'Familiarity with Linux command line'
        ]
      });

      // Demo modules
      setModules([
        {
          module_id: 'mod_001',
          title: 'Introduction to IoT & AI',
          description: 'Overview of IoT ecosystems and AI integration',
          type: 'lesson',
          difficulty: 'beginner',
          duration_minutes: 45,
          order: 1
        },
        {
          module_id: 'mod_002',
          title: 'Thoth Device Setup',
          description: 'Hardware assembly and software configuration',
          type: 'hands-on',
          difficulty: 'beginner',
          duration_minutes: 60,
          order: 2
        },
        {
          module_id: 'mod_003',
          title: 'Sensor Data Collection',
          description: 'Reading and processing sensor data',
          type: 'lab',
          difficulty: 'intermediate',
          duration_minutes: 90,
          order: 3
        },
        {
          module_id: 'mod_004',
          title: 'Machine Learning Basics',
          description: 'ML algorithms for IoT data analysis',
          type: 'lesson',
          difficulty: 'intermediate',
          duration_minutes: 75,
          order: 4
        },
        {
          module_id: 'mod_005',
          title: 'Federated Learning',
          description: 'Distributed ML across IoT devices',
          type: 'advanced',
          difficulty: 'advanced',
          duration_minutes: 120,
          order: 5
        },
        {
          module_id: 'mod_006',
          title: 'Capstone Project',
          description: 'Build a complete IoT + AI solution',
          type: 'project',
          difficulty: 'expert',
          duration_minutes: 180,
          order: 6
        }
      ]);

      setProgress({
        student_id: 'demo-student',
        progress: [
          { module_id: 'mod_001', status: 'completed', score: 95 },
          { module_id: 'mod_002', status: 'completed', score: 88 },
          { module_id: 'mod_003', status: 'in_progress', score: null },
          { module_id: 'mod_004', status: 'not_started', score: null },
          { module_id: 'mod_005', status: 'locked', score: null },
          { module_id: 'mod_006', status: 'locked', score: null }
        ]
      });
    } finally {
      setLoading(false);
    }
  };

  const getModuleStatus = (moduleId: string) => {
    const moduleProgress = progress?.progress?.find((p: any) => p.module_id === moduleId);
    return moduleProgress?.status || 'not_started';
  };

  const getModuleScore = (moduleId: string) => {
    const moduleProgress = progress?.progress?.find((p: any) => p.module_id === moduleId);
    return moduleProgress?.score;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'in_progress':
        return <Clock className="w-5 h-5 text-yellow-400" />;
      case 'locked':
        return <div className="w-5 h-5 bg-gray-600 rounded-full" />;
      default:
        return <Play className="w-5 h-5 text-blue-400" />;
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

  if (!course) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Course Not Found</h2>
            <Link href="/courses" className="text-blue-400 hover:text-blue-300">
              ← Back to Courses
            </Link>
          </div>
        </div>
      </>
    );
  }

  const completedModules = progress?.progress?.filter((p: any) => p.status === 'completed').length || 0;
  const totalModules = modules.length;
  const overallProgress = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/courses"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Courses
          </Link>

          {/* Course Header */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <span className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(course.difficulty)}`}>
                    {course.difficulty}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-gray-300 text-lg mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.duration_hours} hours
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {course.students_enrolled} students
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    {course.rating} rating
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">Your Progress</h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Overall Progress</span>
                    <span>{overallProgress}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${overallProgress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">
                  <p>{completedModules} of {totalModules} modules completed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Modules */}
            <div className="lg:col-span-2">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
                
                <div className="space-y-4">
                  {modules.map((module, index) => {
                    const status = getModuleStatus(module.module_id);
                    const score = getModuleScore(module.module_id);
                    
                    return (
                      <Link 
                        key={module.module_id} 
                        href={`/module/${module.module_id}`}
                        className={`block p-4 rounded-lg border transition-colors ${
                          status === 'locked' 
                            ? 'bg-gray-800/50 border-gray-700 cursor-not-allowed' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-full text-blue-400 font-bold text-sm">
                              {index + 1}
                            </div>
                            {getStatusIcon(status)}
                            <div>
                              <h3 className="text-white font-medium">{module.title}</h3>
                              <p className="text-gray-400 text-sm">{module.description}</p>
                              <div className="flex items-center gap-3 mt-1">
                                <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(module.difficulty)}`}>
                                  {module.difficulty}
                                </span>
                                <span className="text-gray-500 text-xs">{module.duration_minutes} min</span>
                              </div>
                            </div>
                          </div>
                          
                          {status === 'completed' && score && (
                            <div className="text-right">
                              <div className="text-green-400 font-bold">{score}%</div>
                              <div className="text-xs text-gray-400">Completed</div>
                            </div>
                          )}
                          
                          {status === 'in_progress' && (
                            <div className="text-yellow-400 text-sm font-medium">In Progress</div>
                          )}
                          
                          {status === 'locked' && (
                            <div className="text-gray-500 text-sm">Locked</div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Course Info Sidebar */}
            <div className="space-y-6">
              {/* Learning Outcomes */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What You'll Learn</h3>
                <ul className="space-y-3">
                  {course.learning_outcomes?.map((outcome: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prerequisites */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Prerequisites</h3>
                <ul className="space-y-2">
                  {course.prerequisites?.map((prereq: string, index: number) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      {prereq}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instructor */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Instructor</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {course.instructor?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{course.instructor}</p>
                    <p className="text-gray-400 text-sm">AI & IoT Expert</p>
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
