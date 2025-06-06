
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, FileText, Award, Wallet, Database, Zap } from 'lucide-react';
import MetaMaskConnector from '@/components/MetaMaskConnector';
import IPFSManager from '@/components/IPFSManager';
import BlockcertsWorkflow from '@/components/BlockcertsWorkflow';

const LecturerDashboard = () => {
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);

  const institutionStats = [
    { label: 'Certificates Issued', value: '1,247', change: '+23%' },
    { label: 'Active Students', value: '892', change: '+12%' },
    { label: 'Verification Requests', value: '534', change: '+8%' },
    { label: 'Blockchain Transactions', value: '156', change: '+5%' }
  ];

  const recentCertificates = [
    { id: 'CERT001', student: 'Alice Johnson', degree: 'BSc Computer Science', status: 'Completed', date: '2024-01-15' },
    { id: 'CERT002', student: 'Bob Smith', degree: 'MSc Data Science', status: 'Processing', date: '2024-01-14' },
    { id: 'CERT003', student: 'Carol Brown', degree: 'PhD Mathematics', status: 'Anchored', date: '2024-01-13' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Institution Dashboard</h1>
          <p className="text-white/80">Blockcerts-compatible certificate issuance platform</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Overview</TabsTrigger>
            <TabsTrigger value="issuance" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Certificate Issuance</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Blockchain</TabsTrigger>
            <TabsTrigger value="storage" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">IPFS Storage</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionStats.map((stat, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-white/70 text-sm">{stat.label}</p>
                      <p className="text-3xl font-bold text-white">{stat.value}</p>
                      <Badge className="mt-2 bg-green-500/20 text-green-300">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="backdrop-blur-sm bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Recent Certificates
                  </CardTitle>
                  <CardDescription className="text-white/70">
                    Latest certificate issuance activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentCertificates.map((cert) => (
                      <div key={cert.id} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
                        <div>
                          <p className="text-white font-medium text-sm">{cert.student}</p>
                          <p className="text-white/70 text-xs">{cert.degree}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            className={`${
                              cert.status === 'Completed' ? 'bg-green-500/20 text-green-300' :
                              cert.status === 'Processing' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-blue-500/20 text-blue-300'
                            }`}
                          >
                            {cert.status}
                          </Badge>
                          <p className="text-white/70 text-xs mt-1">{cert.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="h-20 flex-col space-y-2 bg-white/20 text-white hover:bg-white/30">
                      <FileText className="w-6 h-6" />
                      <span className="text-sm">Issue Certificate</span>
                    </Button>
                    <Button className="h-20 flex-col space-y-2 bg-white/20 text-white hover:bg-white/30">
                      <Users className="w-6 h-6" />
                      <span className="text-sm">Manage Students</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="issuance" className="space-y-6">
            <BlockcertsWorkflow />
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-white/10 border-white/20 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Wallet className="w-5 h-5 mr-2" />
                  Institution Wallet
                </h3>
                <MetaMaskConnector 
                  onConnect={setConnectedAccount}
                  onDisconnect={() => setConnectedAccount(null)}
                />
              </div>

              <Card className="backdrop-blur-sm bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Transaction Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white/70">Certificate Issuance:</span>
                      <span className="text-white">~$0.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Batch Processing (10):</span>
                      <span className="text-white">~$0.80</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Monthly Average:</span>
                      <span className="text-white">~$24.00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="storage" className="space-y-6">
            <div className="backdrop-blur-sm bg-white/10 border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                Decentralized Certificate Storage
              </h3>
              <IPFSManager />
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Institution Analytics</CardTitle>
                <CardDescription className="text-white/70">
                  Track certificate issuance and verification metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">98.7%</p>
                    <p className="text-white/70 text-sm">Success Rate</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">2.4s</p>
                    <p className="text-white/70 text-sm">Avg. Processing Time</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">99.9%</p>
                    <p className="text-white/70 text-sm">Uptime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LecturerDashboard;
