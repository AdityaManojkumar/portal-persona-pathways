
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserCheck, FileCheck, Clock, CheckCircle } from 'lucide-react';

const VerifierDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Verifier Dashboard</h1>
          <p className="text-white/80">Document verification and credential validation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <FileCheck className="w-6 h-6 text-white" />
                <CardTitle className="text-white">Document Verification</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Verify academic documents and certificates
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-white" />
                <CardTitle className="text-white">Pending Reviews</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Review documents awaiting verification
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-white" />
                <CardTitle className="text-white">Verified Documents</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                View completed verification records
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifierDashboard;
