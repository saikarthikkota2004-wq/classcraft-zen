import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  userType: 'student' | 'mentor';
  onLogin: () => void;
  onBack: () => void;
}

export const LoginForm = ({ userType, onLogin, onBack }: LoginFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    onLogin();
  };

  const isStudent = userType === 'student';

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-lighter via-secondary-lighter to-success-lighter flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="absolute top-4 left-4 md:top-8 md:left-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EduPlatform</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-2">
            {isStudent ? 'Student' : 'Mentor'} Login
          </h1>
          <p className="text-muted-foreground">
            {isStudent 
              ? 'Access your courses and continue learning' 
              : 'Manage your classes and students'
            }
          </p>
        </div>

        {/* Login Form */}
        <Card className="card-educational">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pr-10"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className={`w-full ${isStudent ? 'btn-hero' : 'btn-secondary'} text-lg py-6`}
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : `Sign in as ${userType}`}
            </Button>

            <div className="text-center space-y-2">
              <Button variant="link" className="text-sm">
                Forgot your password?
              </Button>
              <p className="text-sm text-muted-foreground">
                Don't have an account?{' '}
                <Button variant="link" className="p-0 h-auto font-medium">
                  Sign up
                </Button>
              </p>
            </div>
          </form>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-4 p-4 bg-white/50">
          <p className="text-sm text-center text-muted-foreground mb-2">
            <strong>Demo Credentials:</strong>
          </p>
          <p className="text-xs text-center text-muted-foreground">
            Email: demo@example.com | Password: demo123
          </p>
        </Card>
      </div>
    </div>
  );
};