import { useNavigate } from 'react-router-dom';
import { UserTypeSelector } from '@/components/UserTypeSelector';

const Index = () => {
  const navigate = useNavigate();

  const handleUserTypeSelect = (type: 'student' | 'mentor') => {
    navigate(`/${type}/login`);
  };

  return <UserTypeSelector onSelectType={handleUserTypeSelect} />;
};

export default Index;
