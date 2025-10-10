const API_BASE_URL = 'https://web-production-d7d37.up.railway.app';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

export async function apiRequest<T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const token = typeof window !== 'undefined' ? localStorage.getItem('auth_token') : null;
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'An error occurred');
    }

    return { data };
  } catch (error) {
    console.error('API Error:', error);
    return { 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}

export const auth = {
  login: async (username: string, password: string) => {
    const response = await apiRequest<{ access_token: string; token_type: string }>('/token', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });

    if (response.data?.access_token) {
      localStorage.setItem('auth_token', response.data.access_token);
    }

    return response;
  },
  logout: () => {
    localStorage.removeItem('auth_token');
  },
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('auth_token');
    }
    return null;
  },
  isAuthenticated: () => {
    return !!auth.getToken();
  },
};

export const courses = {
  getAll: () => apiRequest('/courses'),
  getById: (id: string) => apiRequest(`/courses/${id}`),
  getModules: (courseId: string) => apiRequest(`/courses/${courseId}/modules`),
  getLessons: (courseId: string, moduleId: string) => 
    apiRequest(`/courses/${courseId}/modules/${moduleId}/lessons`),
};

export const progress = {
  getUserProgress: () => apiRequest('/progress'),
  updateProgress: (lessonId: string, completed: boolean) => 
    apiRequest('/progress', {
      method: 'POST',
      body: JSON.stringify({ lesson_id: lessonId, completed }),
    }),
};
