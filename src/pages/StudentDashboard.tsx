
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  TrendingUp, 
  Users, 
  Clock,
  LogIn,
  Bell,
  Settings
} from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [notifications] = useState(3);

  const courses = [
    { name: 'Advanced Mathematics', progress: 75, grade: 'A-', nextClass: 'Today 2:00 PM' },
    { name: 'Computer Science', progress: 85, grade: 'A', nextClass: 'Tomorrow 10:00 AM' },
    { name: 'Physics Laboratory', progress: 60, grade: 'B+', nextClass: 'Friday 3:00 PM' },
  ];

  const recentActivities = [
    { type: 'assignment', title: 'Math Assignment #5 submitted', time: '2 hours ago' },
    { type: 'grade', title: 'Received grade for CS Project', time: '1 day ago' },
    { type: 'announcement', title: 'New course material uploaded', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Student Portal</h1>
                <p className="text-sm text-gray-500">Welcome back, Student!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
                {notifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                    {notifications}
                  </Badge>
                )}
              </div>
              <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              <Button
                onClick={() => navigate('/signin')}
                variant="outline"
                size="sm"
                className="flex items-center"
              >
                <LogIn className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Good Morning! 🌟</h2>
          <p className="text-gray-600">Here's what's happening with your studies today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Enrolled Courses</p>
                  <p className="text-3xl font-bold">6</p>
                </div>
                <BookOpen className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Average Grade</p>
                  <p className="text-3xl font-bold">A-</p>
                </div>
                <Award className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Completed</p>
                  <p className="text-3xl font-bold">73%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Study Hours</p>
                  <p className="text-3xl font-bold">24h</p>
                </div>
                <Clock className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                Course Progress
              </CardTitle>
              <CardDescription>Your current progress in enrolled courses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {courses.map((course, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">{course.name}</span>
                    <Badge variant="secondary">{course.grade}</Badge>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{course.progress}% complete</span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {course.nextClass}
                    </span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>Your latest academic activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 flex-col space-y-2 bg-purple-100 text-purple-700 hover:bg-purple-200">
                <BookOpen className="w-6 h-6" />
                <span className="text-sm">View Courses</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                <Calendar className="w-6 h-6" />
                <span className="text-sm">Schedule</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-green-100 text-green-700 hover:bg-green-200">
                <Award className="w-6 h-6" />
                <span className="text-sm">Grades</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-orange-100 text-orange-700 hover:bg-orange-200">
                <Users className="w-6 h-6" />
                <span className="text-sm">Study Groups</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;
