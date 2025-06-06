
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Course Management",
      description: "Organize and track your courses with ease"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Student-Lecturer Connection",
      description: "Seamless communication between students and lecturers"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Grade Tracking",
      description: "Monitor progress and achievements in real-time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='7'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white text-xl font-bold">EduPortal</span>
          </div>
          <div className="space-x-4">
            <Link to="/signin">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm">Trusted by 10,000+ educators</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                Academic Excellence
              </span>
            </h1>
            
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect students and lecturers in a modern, intuitive platform designed for 
              seamless learning and teaching experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
                  Sign In to Continue
                </Button>
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-white">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/70 text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Role Selection Preview */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Choose Your Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/30 transition-colors">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">I'm a Student</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/70 text-base mb-6">
                    Access courses, track progress, and connect with your lecturers
                  </CardDescription>
                  <div className="space-y-2 text-left">
                    {['View course materials', 'Submit assignments', 'Track grades', 'Join study groups'].map((item, i) => (
                      <div key={i} className="flex items-center text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-500/30 transition-colors">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">I'm a Lecturer</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-white/70 text-base mb-6">
                    Manage courses, grade assignments, and engage with students
                  </CardDescription>
                  <div className="space-y-2 text-left">
                    {['Create courses', 'Grade assignments', 'Track student progress', 'Send announcements'].map((item, i) => (
                      <div key={i} className="flex items-center text-white/80 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center text-white/60">
            <p>&copy; 2024 EduPortal. Built with ❤️ for better education.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
