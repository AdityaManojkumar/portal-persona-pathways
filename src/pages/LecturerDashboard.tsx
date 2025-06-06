
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Calendar, 
  FileText, 
  TrendingUp, 
  MessageSquare,
  LogIn,
  Bell,
  Settings,
  PlusCircle
} from 'lucide-react';

const LecturerDashboard = () => {
  const navigate = useNavigate();
  const [notifications] = useState(5);

  const courses = [
    { name: 'Advanced Mathematics', students: 45, assignments: 3, avgGrade: 'B+' },
    { name: 'Linear Algebra', students: 32, assignments: 2, avgGrade: 'A-' },
    { name: 'Calculus I', students: 67, assignments: 4, avgGrade: 'B' },
  ];

  const recentActivities = [
    { type: 'submission', title: '12 new assignment submissions', time: '1 hour ago' },
    { type: 'message', title: '3 new student messages', time: '3 hours ago' },
    { type: 'grade', title: 'Graded Math Assignment #5', time: '1 day ago' },
    { type: 'course', title: 'Updated course materials', time: '2 days ago' },
  ];

  const upcomingClasses = [
    { course: 'Advanced Mathematics', time: 'Today 2:00 PM', room: 'Room 204' },
    { course: 'Linear Algebra', time: 'Tomorrow 10:00 AM', room: 'Room 301' },
    { course: 'Calculus I', time: 'Friday 3:00 PM', room: 'Room 205' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold text-gray-900">Lecturer Portal</h1>
                <p className="text-sm text-gray-500">Welcome back, Professor!</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Good Morning! 📚</h2>
          <p className="text-gray-600">Here's an overview of your teaching activities today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm">Active Courses</p>
                  <p className="text-3xl font-bold">{courses.length}</p>
                </div>
                <BookOpen className="w-8 h-8 text-emerald-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Total Students</p>
                  <p className="text-3xl font-bold">144</p>
                </div>
                <Users className="w-8 h-8 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm">Pending Grades</p>
                  <p className="text-3xl font-bold">23</p>
                </div>
                <FileText className="w-8 h-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Messages</p>
                  <p className="text-3xl font-bold">8</p>
                </div>
                <MessageSquare className="w-8 h-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Course Overview & Upcoming Classes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-emerald-600" />
                Course Overview
              </CardTitle>
              <CardDescription>Your current courses and their statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-gray-900">{course.name}</h4>
                    <Badge variant="secondary">{course.avgGrade}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students} students
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-4 h-4 mr-1" />
                      {course.assignments} assignments
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                Upcoming Classes
              </CardTitle>
              <CardDescription>Your schedule for the next few days</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingClasses.map((class_, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">{class_.course}</p>
                    <p className="text-sm text-gray-600">{class_.room}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-600">{class_.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                Recent Activity
              </CardTitle>
              <CardDescription>Latest updates and activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Frequently used teaching tools</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Button className="h-20 flex-col space-y-2 bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                  <PlusCircle className="w-6 h-6" />
                  <span className="text-sm">Create Assignment</span>
                </Button>
                <Button className="h-20 flex-col space-y-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                  <FileText className="w-6 h-6" />
                  <span className="text-sm">Grade Papers</span>
                </Button>
                <Button className="h-20 flex-col space-y-2 bg-purple-100 text-purple-700 hover:bg-purple-200">
                  <MessageSquare className="w-6 h-6" />
                  <span className="text-sm">Messages</span>
                </Button>
                <Button className="h-20 flex-col space-y-2 bg-orange-100 text-orange-700 hover:bg-orange-200">
                  <Calendar className="w-6 h-6" />
                  <span className="text-sm">Schedule</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LecturerDashboard;
