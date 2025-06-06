
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Shield, Users, Settings, BarChart3, Wallet, FileText, Lock, Zap, Database } from 'lucide-react';
import MetaMaskConnector from '@/components/MetaMaskConnector';
import IPFSManager from '@/components/IPFSManager';

const AdminDashboard = () => {
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  
  const networkStats = [
    { name: 'Ethereum Mainnet', status: 'Active', gasPrice: '25 Gwei', load: 78 },
    { name: 'Polygon', status: 'Active', gasPrice: '30 Gwei', load: 45 },
    { name: 'Goerli Testnet', status: 'Active', gasPrice: '10 Gwei', load: 23 }
  ];

  const zkpTemplates = [
    { name: 'Degree Verification', complexity: 'Medium', usageCount: 1247 },
    { name: 'GPA Range Proof', complexity: 'Low', usageCount: 892 },
    { name: 'Employment Status', complexity: 'High', usageCount: 534 }
  ];

  const systemMetrics = [
    { label: 'Total Certificates', value: '12,847', change: '+5.2%' },
    { label: 'Active Users', value: '3,291', change: '+12.8%' },
    { label: 'IPFS Storage', value: '2.4 TB', change: '+8.9%' },
    { label: 'ZK Proofs Generated', value: '8,932', change: '+15.3%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-white/80">System administration and blockchain management</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Overview</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Blockchain</TabsTrigger>
            <TabsTrigger value="storage" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">IPFS Storage</TabsTrigger>
            <TabsTrigger value="zkp" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">ZK Proofs</TabsTrigger>
            <TabsTrigger value="system" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">System</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {systemMetrics.map((metric, index) => (
                <Card key={index} className="backdrop-blur-sm bg-white/10 border-white/20">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-white/70 text-sm">{metric.label}</p>
                      <p className="text-3xl font-bold text-white">{metric.value}</p>
                      <Badge className="mt-2 bg-green-500/20 text-green-300">
                        {metric.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-white/10 border-white/20 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Wallet className="w-5 h-5 mr-2" />
                  MetaMask Integration
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
                    Gas Fee Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {networkStats.map((network, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded border border-white/10">
                        <div>
                          <p className="text-white font-medium text-sm">{network.name}</p>
                          <p className="text-white/70 text-xs">{network.gasPrice}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Progress value={network.load} className="w-16 h-2" />
                          <Badge 
                            className={`${network.status === 'Active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}
                          >
                            {network.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Network Configuration</CardTitle>
                <CardDescription className="text-white/70">
                  Manage blockchain network settings and smart contract deployments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Deploy Contracts
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Update Networks
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    View Transactions
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="storage" className="space-y-6">
            <div className="backdrop-blur-sm bg-white/10 border-white/20 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                IPFS Storage Management
              </h3>
              <IPFSManager />
            </div>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Storage Analytics</CardTitle>
                <CardDescription className="text-white/70">
                  Monitor IPFS storage usage and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">2.4 TB</p>
                    <p className="text-white/70 text-sm">Total Storage</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">99.8%</p>
                    <p className="text-white/70 text-sm">Uptime</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">156</p>
                    <p className="text-white/70 text-sm">Nodes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zkp" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Lock className="w-5 h-5 mr-2" />
                  Zero-Knowledge Proof Configuration
                </CardTitle>
                <CardDescription className="text-white/70">
                  Manage ZKP templates and cryptographic parameters
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {zkpTemplates.map((template, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded border border-white/10">
                      <div>
                        <p className="text-white font-medium">{template.name}</p>
                        <p className="text-white/70 text-sm">Used {template.usageCount} times</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={
                            template.complexity === 'Low' ? 'bg-green-500/20 text-green-300' :
                            template.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-red-500/20 text-red-300'
                          }
                        >
                          {template.complexity}
                        </Badge>
                        <Button size="sm" className="bg-white/20 text-white hover:bg-white/30">
                          Configure
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Elliptic Curve Parameters</CardTitle>
                <CardDescription className="text-white/70">
                  Configure cryptographic parameters for enhanced security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Update Curve Parameters
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Generate New Keys
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">System Health</CardTitle>
                <CardDescription className="text-white/70">
                  Monitor overall system performance and security
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white">API Response Time</span>
                      <span className="text-green-300">&lt; 200ms</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-white">Security Score</span>
                      <span className="text-green-300">98/100</span>
                    </div>
                    <Progress value={98} className="h-2" />
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

export default AdminDashboard;
