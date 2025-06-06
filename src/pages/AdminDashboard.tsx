
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Users, Settings, BarChart3 } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/80">System administration and management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-white" />
                <CardTitle className="text-white">User Management</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Manage students, lecturers, and other system users
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Settings className="w-6 h-6 text-white" />
                <CardTitle className="text-white">System Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                Configure system parameters and preferences
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10 border-white/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BarChart3 className="w-6 h-6 text-white" />
                <CardTitle className="text-white">Analytics</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">
                View system usage and performance metrics
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
