'use client';

import React, { useState, useEffect } from 'react';
import { Search, Filter, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import CourseCard from '../components/CourseCard';
import Navigation from '../components/Navigation';
import apiService, { Course, CurriculumModule } from '../services/api';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [modules, setModules] = useState<CurriculumModule[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [studentProgress, setStudentProgress] = useState<any>(null);

  useEffect(() => {
    fetchCurriculum();
    fetchProgress();
  }, []);

  const fetchCurriculum = async () => {
    try {
      setLoading(true);
      const response = await apiService.getCurriculum();
      
      if (response.courses) {
        setCourses(response.courses);
      }
      if (response.modules) {
        setModules(response.modules);
      }
    } catch (error) {
      console.error('Failed to fetch curriculum:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchProgress = async () => {
    try {
      // Get student ID from localStorage or auth context
      const studentId = localStorage.getItem('student_id') || 'student-001';
      const progress = await apiService.getStudentProgress(studentId);
      setStudentProgress(progress);
    } catch (error) {
      console.error('Failed to fetch progress:', error);
    }
  };

  const handleEnroll = async (courseId: string) => {
    console.log('Enrolling in course:', courseId);
    // Implement enrollment logic
  };

  const handleContinue = (courseId: string) => {
    // Navigate to course modules
    window.location.href = `/courses/${courseId}`;
  };

  // Add progress to courses
  const coursesWithProgress = courses.map(course => {
    if (studentProgress?.progress) {
      const courseModuleProgress = studentProgress.progress.filter(
        (p: any) => course.modules && course.modules.includes(p.module_id)
      );
      const completedCount = courseModuleProgress.filter(
        (p: any) => p.status === 'completed'
      ).length;
      const progress = course.modules && course.modules.length > 0 
        ? Math.round((completedCount / course.modules.length) * 100)
        : 0;
      
      return { ...course, progress: progress > 0 ? progress : undefined };
    }
    return course;
  });

  const filteredCourses = coursesWithProgress.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = filterDifficulty === 'all' || course.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">AI & IoT Curriculum</h1>
          <p className="text-gray-300">Learn to build intelligent IoT systems with Thoth</p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-8 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Learn AI & IoT with Thoth
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl">
              Master the fundamentals of AI and IoT through hands-on projects with Thoth devices. 
              Build real-world applications, from sensor data collection to federated learning.
            </p>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white/80 text-sm">Total Modules</p>
                <p className="text-2xl font-bold text-white">{modules.length}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white/80 text-sm">Your Progress</p>
                <p className="text-2xl font-bold text-white">
                  {studentProgress?.overall_completion?.toFixed(0) || 0}%
                </p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white/80 text-sm">Time Invested</p>
                <p className="text-2xl font-bold text-white">
                  {Math.round((studentProgress?.total_time_spent || 0) / 60)}h
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-1/3 opacity-30">
            <iframe
              src="https://poly.cam/capture/ABE69FEA-A1DF-4CC5-BC65-CF1DB40BFEE8/embed"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-6 border border-white/20">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses and modules..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            {/* Type Filter */}
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-400"
            >
              <option value="all">All Types</option>
              <option value="lesson">Lessons</option>
              <option value="lab">Labs</option>
              <option value="project">Projects</option>
              <option value="quiz">Quizzes</option>
            </select>
          </div>
        </div>

        {/* Courses Grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
          </div>
        ) : (
          <>
            {/* Main Course */}
            {filteredCourses.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">Featured Course</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCourses.map((course, index) => (
                    <div key={course.course_id}>
                      <CourseCard
                        course={course}
                        onEnroll={handleEnroll}
                        onContinue={handleContinue}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Individual Modules */}
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Learning Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {modules
                  .filter(module => {
                    if (filterType !== 'all' && module.type !== filterType) return false;
                    if (filterDifficulty !== 'all' && module.difficulty !== filterDifficulty) return false;
                    if (searchTerm && !module.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
                        !module.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
                    return true;
                  })
                  .map((module, index) => {
                    const progress = studentProgress?.progress?.find(
                      (p: any) => p.module_id === module.module_id
                    );
                    
                    return (
                      <Link key={module.module_id} href={`/module/${module.module_id}`}>
                        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors cursor-pointer">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-lg font-semibold text-white">{module.title}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            module.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                            module.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            module.difficulty === 'advanced' ? 'bg-orange-500/20 text-orange-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {module.difficulty}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                          {module.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3" />
                            {module.type}
                          </span>
                          <span>{module.duration_minutes} min</span>
                        </div>
                        
                        {progress && (
                          <div className="mt-3 pt-3 border-t border-white/10">
                            <div className="flex justify-between text-xs text-gray-400 mb-1">
                              <span>Status</span>
                              <span className={
                                progress.status === 'completed' ? 'text-green-400' :
                                progress.status === 'in_progress' ? 'text-blue-400' :
                                'text-gray-400'
                              }>
                                {progress.status.replace('_', ' ')}
                              </span>
                            </div>
                            {progress.score !== undefined && (
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-400">Score</span>
                                <span className="text-white font-medium">{progress.score}%</span>
                              </div>
                            )}
                          </div>
                        )}
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}
