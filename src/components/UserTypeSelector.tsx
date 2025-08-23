import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap, Users } from 'lucide-react';
import heroImage from '@/assets/hero-education.jpg';

interface UserTypeSelectorProps {
  onSelectType: (type: 'student' | 'mentor') => void;
}

export const UserTypeSelector = ({ onSelectType }: UserTypeSelectorProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-lighter via-secondary-lighter to-success-lighter">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Learn</span>{' '}
            <span className="text-primary">Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect with mentors, discover new skills, and unlock your potential in our comprehensive e-learning platform.
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <img 
              src={heroImage} 
              alt="Educational platform illustration" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* User Type Selection */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
            Choose Your Learning Journey
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Card */}
            <Card className="card-educational group cursor-pointer border-2 border-transparent hover:border-primary transition-all duration-300">
              <div className="text-center p-8">
                <div className="bg-primary-lighter rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-10 w-10 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  I'm a Student
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Explore courses, track your progress, and learn from expert mentors. 
                  Access your enrolled courses and discover new learning opportunities.
                </p>
                
                <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                  <li>• Access to course catalog</li>
                  <li>• Progress tracking</li>
                  <li>• Interactive learning materials</li>
                  <li>• Free trial for first lessons</li>
                </ul>
                
                <Button 
                  onClick={() => onSelectType('student')}
                  className="w-full btn-hero text-lg py-6"
                >
                  Start Learning
                </Button>
              </div>
            </Card>

            {/* Mentor Card */}
            <Card className="card-educational group cursor-pointer border-2 border-transparent hover:border-secondary transition-all duration-300">
              <div className="text-center p-8">
                <div className="bg-secondary-lighter rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-10 w-10 text-secondary" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  I'm a Mentor
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Share your expertise, manage your classes, and guide students on their learning journey. 
                  Monitor student progress and create engaging educational experiences.
                </p>
                
                <ul className="text-sm text-muted-foreground space-y-2 mb-8">
                  <li>• Course management tools</li>
                  <li>• Student progress oversight</li>
                  <li>• Class scheduling</li>
                  <li>• Analytics and insights</li>
                </ul>
                
                <Button 
                  onClick={() => onSelectType('mentor')}
                  className="w-full btn-secondary text-lg py-6"
                >
                  Start Teaching
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="text-center mt-12 p-6 bg-white/50 rounded-xl">
            <p className="text-muted-foreground">
              New to our platform? 🎉 Get started with a{' '}
              <span className="font-semibold text-primary">free trial</span> and explore unlimited learning opportunities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};