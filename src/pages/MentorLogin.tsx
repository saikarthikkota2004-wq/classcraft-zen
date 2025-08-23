import { useNavigate } from 'react-router-dom';
import { LoginForm } from '@/components/LoginForm';

const MentorLogin = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/mentor/dashboard');
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <LoginForm 
      userType="mentor" 
      onLogin={handleLogin} 
      onBack={handleBack} 
    />
  );
};

export default MentorLogin;