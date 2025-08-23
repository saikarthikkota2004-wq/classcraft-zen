import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';

const StudentLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/student/dashboard');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <LoginForm 
      userType="student" 
      onLogin={handleLogin} 
      onBack={handleBack} 
    />
  );
};

export default StudentLogin;