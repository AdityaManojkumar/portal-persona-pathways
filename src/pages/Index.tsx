
import HeroSection from '@/components/HeroSection';
import ProcessSteps from '@/components/ProcessSteps';
import RoleSelector from '@/components/RoleSelector';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
      <HeroSection />
      <ProcessSteps />
      <RoleSelector options={['Student', 'Institution', 'Verifier', 'Admin']} />
    </div>
  );
};

export default Index;
