import { useState } from 'react';
import { CourseCard } from './CourseCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Search, Bell, User, LogOut, Filter } from 'lucide-react';
import studentImage from '@/assets/student-dashboard.jpg';

interface StudentDashboardProps {
  onLogout: () => void;
}

export const StudentDashboard = ({ onLogout }: StudentDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock enrolled courses data
  const enrolledCourses = [
    {
      id: '1',
      title: 'React Development Fundamentals',
      instructor: 'Sarah Johnson',
      description: 'Learn the core concepts of React including components, hooks, and state management.',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      nextClass: 'Tomorrow at 2:00 PM - Advanced Hooks',
      enrolled: true,
      duration: '8 weeks',
    },
    {
      id: '2',
      title: 'UI/UX Design Principles',
      instructor: 'Mike Chen',
      description: 'Master the fundamentals of user interface and user experience design.',
      progress: 30,
      totalLessons: 18,
      completedLessons: 5,
      nextClass: 'Friday at 10:00 AM - Color Theory',
      enrolled: true,
      duration: '6 weeks',
    }
  ];

  // Mock available courses data
  const availableCourses = [
    {
      id: '3',
      title: 'Python for Data Science',
      instructor: 'Dr. Emily Watson',
      description: 'Learn Python programming with focus on data analysis and visualization.',
      totalLessons: 32,
      enrolled: false,
      studentCount: 1247,
      duration: '10 weeks',
    },
    {
      id: '4',
      title: 'Digital Marketing Strategy',
      instructor: 'James Rodriguez',
      description: 'Comprehensive guide to modern digital marketing techniques and tools.',
      totalLessons: 20,
      enrolled: false,
      studentCount: 892,
      duration: '8 weeks',
    },
    {
      id: '5',
      title: 'Machine Learning Basics',
      instructor: 'Dr. Alex Kim',
      description: 'Introduction to machine learning algorithms and practical applications.',
      totalLessons: 28,
      enrolled: false,
      studentCount: 654,
      duration: '12 weeks',
    }
  ];

  const filteredCourses = availableCourses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-primary">EduPlatform</span>
              </div>
              <Badge variant="secondary" className="bg-success-lighter text-success">
                Student
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, <span className="gradient-text">Alex!</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Continue your learning journey and explore new courses to expand your skills.
              </p>
              <div className="flex gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-muted-foreground">Active Courses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">47%</div>
                  <div className="text-muted-foreground">Avg Progress</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">128</div>
                  <div className="text-muted-foreground">Hours Learned</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={studentImage} 
                alt="Student learning illustration" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Enrolled Courses Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Courses</h2>
            <Button variant="outline">
              View All
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {enrolledCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onAccess={() => console.log('Continue course:', course.id)}
                onViewDetails={() => console.log('View details:', course.id)}
              />
            ))}
          </div>
        </section>

        {/* Course Discovery Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Discover Courses</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                onEnroll={() => console.log('Enroll in course:', course.id)}
                onAccess={() => console.log('Try first class:', course.id)}
                onViewDetails={() => console.log('View details:', course.id)}
              />
            ))}
          </div>

          {filteredCourses.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No courses found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};