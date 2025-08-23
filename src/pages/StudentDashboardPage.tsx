import { useNavigate } from 'react-router-dom';
import { StudentDashboard } from '@/components/StudentDashboard';

const StudentDashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return <StudentDashboard onLogout={handleLogout} />;
};

export default StudentDashboardPage;