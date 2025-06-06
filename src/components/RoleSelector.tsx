
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Building, UserCheck, Shield } from 'lucide-react';

interface RoleSelectorProps {
  options: string[];
}

const RoleSelector = ({ options }: RoleSelectorProps) => {
  const navigate = useNavigate();

  const roleConfig = {
    Student: {
      icon: GraduationCap,
      color: 'from-green-500 to-emerald-600',
      description: 'Access your digital certificates and credentials',
      route: '/student-dashboard'
    },
    Institution: {
      icon: Building,
      color: 'from-blue-500 to-indigo-600', 
      description: 'Issue and manage institutional certificates',
      route: '/lecturer-dashboard'
    },
    Verifier: {
      icon: UserCheck,
      color: 'from-purple-500 to-violet-600',
      description: 'Verify the authenticity of certificates',
      route: '/verifier-dashboard'
    },
    Admin: {
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      description: 'System administration and management',
      route: '/admin-dashboard'
    }
  };

  const handleRoleSelect = (role: string) => {
    const config = roleConfig[role as keyof typeof roleConfig];
    if (config) {
      navigate(config.route);
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Choose Your Role
        </h2>
        <p className="text-white/80 text-center mb-16 text-lg">
          Select your role to access the appropriate dashboard
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {options.map((role) => {
            const config = roleConfig[role as keyof typeof roleConfig];
            const Icon = config.icon;
            
            return (
              <Card key={role} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`bg-gradient-to-br ${config.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{role}</h3>
                  <p className="text-white/80 text-sm mb-6">{config.description}</p>
                  <Button 
                    onClick={() => handleRoleSelect(role)}
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                  >
                    Enter {role} Portal
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleSelector;
