'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Star, ChevronRight, BookOpen, Award } from 'lucide-react';

interface CourseCardProps {
  course: {
    course_id: string;
    title: string;
    description: string;
    instructor: string;
    difficulty: string;
    duration_hours: number;
    enrolled_students: number;
    rating: number;
    modules: string[];
    progress?: number;
  };
  onEnroll?: (courseId: string) => void;
  onContinue?: (courseId: string) => void;
}

export default function CourseCard({ course, onEnroll, onContinue }: CourseCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-400';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'advanced': return 'bg-orange-500/20 text-orange-400';
      case 'expert': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const isEnrolled = course.progress !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl"
    >
      {/* Course Header with 3D Model */}
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-purple-600">
        <iframe
          src="https://poly.cam/capture/ABE69FEA-A1DF-4CC5-BC65-CF1DB40BFEE8/embed"
          className="w-full h-full opacity-50"
          frameBorder="0"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(course.difficulty)}`}>
            {course.difficulty.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{course.description}</p>

        {/* Instructor */}
        <p className="text-sm text-gray-400 mb-4">
          Instructor: <span className="text-white">{course.instructor}</span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-gray-300">{course.duration_hours}h</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-300">{course.enrolled_students}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-xs text-gray-300">{course.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Modules Count */}
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-purple-400" />
          <span className="text-sm text-gray-300">{course.modules.length} modules</span>
        </div>

        {/* Progress Bar (if enrolled) */}
        {isEnrolled && (
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
              />
            </div>
          </div>
        )}

        {/* Action Button */}
        {isEnrolled ? (
          <button
            onClick={() => onContinue?.(course.course_id)}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
          >
            Continue Learning
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => onEnroll?.(course.course_id)}
            className="w-full bg-white/10 hover:bg-white/20 text-white py-2 px-4 rounded-lg font-medium transition-colors border border-white/20 flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" />
            Enroll Now
          </button>
        )}
      </div>
    </motion.div>
  );
}
