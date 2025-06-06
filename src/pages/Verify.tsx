
import UniversalVerifier from '@/components/UniversalVerifier';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Verify = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="text-white hover:bg-white/10 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              Certificate Verification
            </h1>
            <p className="text-white/80 text-lg">
              Verify the authenticity of blockchain certificates
            </p>
          </div>
        </div>

        <UniversalVerifier />
      </div>
    </div>
  );
};

export default Verify;
