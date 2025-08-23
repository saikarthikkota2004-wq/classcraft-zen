import { useNavigate } from 'react-router-dom';
import { MentorDashboard } from '@/components/MentorDashboard';

const MentorDashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return <MentorDashboard onLogout={handleLogout} />;
};

export default MentorDashboardPage;