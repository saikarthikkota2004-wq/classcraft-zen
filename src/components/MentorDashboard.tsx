import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  TrendingUp, 
  Search, 
  Bell, 
  User, 
  LogOut,
  UserX,
  Eye,
  Plus
} from 'lucide-react';
import mentorImage from '@/assets/mentor-dashboard.jpg';

interface MentorDashboardProps {
  onLogout: () => void;
}

export const MentorDashboard = ({ onLogout }: MentorDashboardProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock classes data
  const classes = [
    {
      id: '1',
      title: 'React Development Fundamentals',
      enrolledStudents: 24,
      totalStudents: 30,
      nextClass: 'Tomorrow at 2:00 PM',
      progress: 65,
      duration: '8 weeks',
    },
    {
      id: '2',
      title: 'Advanced JavaScript Concepts',
      enrolledStudents: 18,
      totalStudents: 25,
      nextClass: 'Friday at 10:00 AM',
      progress: 40,
      duration: '6 weeks',
    }
  ];

  // Mock students data
  const students = [
    {
      id: '1',
      name: 'Alex Johnson',
      email: 'alex.johnson@email.com',
      course: 'React Development',
      progress: 85,
      lastActive: '2 hours ago',
      status: 'active',
      avatar: '',
    },
    {
      id: '2',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      course: 'React Development',
      progress: 65,
      lastActive: '1 day ago',
      status: 'active',
      avatar: '',
    },
    {
      id: '3',
      name: 'David Chen',
      email: 'david.chen@email.com',
      course: 'Advanced JavaScript',
      progress: 45,
      lastActive: '3 hours ago',
      status: 'active',
      avatar: '',
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      email: 'sarah.wilson@email.com',
      course: 'Advanced JavaScript',
      progress: 30,
      lastActive: '5 days ago',
      status: 'inactive',
      avatar: '',
    }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemoveStudent = (studentId: string, studentName: string) => {
    if (window.confirm(`Are you sure you want to remove ${studentName} from the class?`)) {
      console.log('Removing student:', studentId);
      // Implementation would go here
    }
  };

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
              <Badge variant="secondary" className="bg-secondary-lighter text-secondary">
                Mentor
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
                Welcome back, <span className="gradient-text">Dr. Wilson!</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                Manage your classes, track student progress, and create engaging learning experiences.
              </p>
              <div className="flex gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2</div>
                  <div className="text-muted-foreground">Active Classes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">42</div>
                  <div className="text-muted-foreground">Total Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">94%</div>
                  <div className="text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src={mentorImage} 
                alt="Mentor teaching illustration" 
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="card-educational">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-lighter rounded-lg p-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Classes</p>
                  <p className="text-xl font-bold">2</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-educational">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-lighter rounded-lg p-2">
                  <Users className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                  <p className="text-xl font-bold">42</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-educational">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-success-lighter rounded-lg p-2">
                  <Calendar className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-xl font-bold">6 Classes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-educational">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary-lighter rounded-lg p-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Avg Progress</p>
                  <p className="text-xl font-bold">67%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Classes Overview */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Classes</h2>
            <Button className="btn-hero">
              <Plus className="h-4 w-4 mr-2" />
              Create New Class
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="card-educational">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{classItem.title}</span>
                    <Badge variant="outline">
                      {classItem.enrolledStudents}/{classItem.totalStudents} students
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>Next class: {classItem.nextClass}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Course Progress</span>
                        <span>{classItem.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${classItem.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button className="btn-secondary">
                        Manage Students
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Student Management */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Student Management</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search students..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
          </div>

          <Card className="card-educational">
            <CardContent className="p-0">
              <div className="divide-y divide-border">
                {filteredStudents.map((student) => (
                  <div key={student.id} className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={student.avatar} />
                        <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.email}</p>
                        <p className="text-xs text-muted-foreground">{student.course}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{student.progress}%</p>
                        <p className="text-xs text-muted-foreground">Progress</p>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-sm">{student.lastActive}</p>
                        <p className="text-xs text-muted-foreground">Last Active</p>
                      </div>

                      <Badge 
                        variant={student.status === 'active' ? 'secondary' : 'outline'}
                        className={student.status === 'active' ? 'bg-success-lighter text-success' : ''}
                      >
                        {student.status}
                      </Badge>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleRemoveStudent(student.id, student.name)}
                          className="text-destructive hover:text-destructive"
                        >
                          <UserX className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {filteredStudents.length === 0 && searchTerm && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No students found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};