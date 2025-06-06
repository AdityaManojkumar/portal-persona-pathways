
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserCheck, FileCheck, Clock, CheckCircle, Search, Shield, Hash, QrCode, Wallet } from 'lucide-react';
import MetaMaskConnector from '@/components/MetaMaskConnector';

const VerifierDashboard = () => {
  const [connectedAccount, setConnectedAccount] = useState<string | null>(null);
  const [searchCID, setSearchCID] = useState('');
  const [verificationResults, setVerificationResults] = useState<any[]>([]);

  const pendingVerifications = [
    { id: 'VER001', type: 'Degree Certificate', student: 'John Doe', submitted: '2024-01-15', priority: 'High' },
    { id: 'VER002', type: 'Transcript', student: 'Jane Smith', submitted: '2024-01-14', priority: 'Medium' },
    { id: 'VER003', type: 'Course Certificate', student: 'Bob Johnson', submitted: '2024-01-13', priority: 'Low' }
  ];

  const verifiedDocuments = [
    { id: 'DOC001', type: 'Bachelor Degree', hash: '0x1a2b3c...', status: 'Verified', verifiedDate: '2024-01-12' },
    { id: 'DOC002', type: 'Master Degree', hash: '0x4d5e6f...', status: 'Verified', verifiedDate: '2024-01-11' },
    { id: 'DOC003', type: 'PhD Certificate', hash: '0x7g8h9i...', status: 'Verified', verifiedDate: '2024-01-10' }
  ];

  const handleCIDVerification = () => {
    if (!searchCID) return;
    
    // Simulate IPFS verification
    const mockResult = {
      cid: searchCID,
      status: 'Valid',
      contentHash: '0x' + Math.random().toString(16).slice(2, 34),
      pinned: true,
      accessible: true
    };
    
    setVerificationResults([mockResult, ...verificationResults]);
    setSearchCID('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
            <UserCheck className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Verifier Dashboard</h1>
          <p className="text-white/80">Advanced document verification and credential validation</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Overview</TabsTrigger>
            <TabsTrigger value="blockchain" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Blockchain</TabsTrigger>
            <TabsTrigger value="ipfs" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">IPFS Verification</TabsTrigger>
            <TabsTrigger value="zkp" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">ZK Proofs</TabsTrigger>
            <TabsTrigger value="analytics" className="text-white data-[state=active]:bg-white data-[state=active]:text-purple-600">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
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
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-white">{pendingVerifications.length}</p>
                    <p className="text-white/70 text-sm">Documents pending</p>
                  </div>
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
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-white">{verifiedDocuments.length}</p>
                    <p className="text-white/70 text-sm">Documents verified</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Pending Verifications</CardTitle>
                <CardDescription className="text-white/70">
                  Documents awaiting your verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {pendingVerifications.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white/5 rounded border border-white/10">
                      <div>
                        <p className="text-white font-medium">{item.type}</p>
                        <p className="text-white/70 text-sm">Student: {item.student}</p>
                        <p className="text-white/70 text-xs">Submitted: {item.submitted}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge 
                          className={`${
                            item.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                            item.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                            'bg-green-500/20 text-green-300'
                          }`}
                        >
                          {item.priority}
                        </Badge>
                        <Button size="sm" className="bg-white/20 text-white hover:bg-white/30">
                          Verify
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="backdrop-blur-sm bg-white/10 border-white/20 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Wallet className="w-5 h-5 mr-2" />
                  Verification Wallet
                </h3>
                <MetaMaskConnector 
                  onConnect={setConnectedAccount}
                  onDisconnect={() => setConnectedAccount(null)}
                />
              </div>

              <Card className="backdrop-blur-sm bg-white/10 border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Hash className="w-5 h-5 mr-2" />
                    Transaction Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Label className="text-white text-sm">Transaction Hash</Label>
                      <Input 
                        placeholder="0x1a2b3c..."
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      />
                    </div>
                    <Button className="w-full bg-white/20 text-white hover:bg-white/30">
                      Verify Transaction
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Smart Contract Interaction</CardTitle>
                <CardDescription className="text-white/70">
                  Direct interaction with verification smart contracts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Query Certificate
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Verify Signature
                  </Button>
                  <Button className="bg-white/20 text-white hover:bg-white/30">
                    Check Validity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ipfs" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileCheck className="w-5 h-5 mr-2" />
                  IPFS Document Verification
                </CardTitle>
                <CardDescription className="text-white/70">
                  Verify document authenticity through IPFS content integrity
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter IPFS CID to verify"
                    value={searchCID}
                    onChange={(e) => setSearchCID(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button 
                    onClick={handleCIDVerification}
                    className="bg-white/20 text-white hover:bg-white/30"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>

                {verificationResults.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Verification Results</h4>
                    {verificationResults.map((result, index) => (
                      <div key={index} className="p-4 bg-white/5 rounded border border-white/10">
                        <div className="flex justify-between items-start mb-2">
                          <p className="text-white font-mono text-sm">{result.cid}</p>
                          <Badge className="bg-green-500/20 text-green-300">
                            {result.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-white/70">Content Hash:</p>
                            <p className="text-white font-mono text-xs">{result.contentHash}</p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-white/70">Status:</p>
                            <div className="flex space-x-2">
                              <Badge variant={result.pinned ? "default" : "secondary"}>
                                {result.pinned ? "Pinned" : "Unpinned"}
                              </Badge>
                              <Badge variant={result.accessible ? "default" : "destructive"}>
                                {result.accessible ? "Accessible" : "Inaccessible"}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Tamper Detection</CardTitle>
                <CardDescription className="text-white/70">
                  Compare IPFS hashes to detect document modifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Label className="text-white text-sm">Original Hash</Label>
                    <Input 
                      placeholder="Enter original document hash"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <Label className="text-white text-sm">Current Hash</Label>
                    <Input 
                      placeholder="Enter current document hash"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button className="w-full bg-white/20 text-white hover:bg-white/30">
                    Compare Hashes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="zkp" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Zero-Knowledge Proof Verification
                </CardTitle>
                <CardDescription className="text-white/70">
                  Verify cryptographic proofs without accessing sensitive data
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white text-sm">Proof String</Label>
                  <Input 
                    placeholder="Paste zero-knowledge proof here"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label className="text-white text-sm">Verification Key</Label>
                  <Input 
                    placeholder="Enter verification key"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button className="w-full bg-white/20 text-white hover:bg-white/30">
                  Verify Proof
                </Button>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Selective Information Access</CardTitle>
                <CardDescription className="text-white/70">
                  Access only necessary credential information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white/5 rounded border border-white/10">
                    <p className="text-white font-medium text-sm">Degree Status</p>
                    <p className="text-green-300 text-xs">✓ Verified</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border border-white/10">
                    <p className="text-white font-medium text-sm">GPA Range</p>
                    <p className="text-green-300 text-xs">✓ Above 3.5</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border border-white/10">
                    <p className="text-white font-medium text-sm">Graduation Year</p>
                    <p className="text-green-300 text-xs">✓ 2024</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded border border-white/10">
                    <p className="text-white font-medium text-sm">Institution</p>
                    <p className="text-green-300 text-xs">✓ Accredited</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Verification Analytics</CardTitle>
                <CardDescription className="text-white/70">
                  Track verification patterns and performance metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">98.7%</p>
                    <p className="text-white/70 text-sm">Success Rate</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">1.2s</p>
                    <p className="text-white/70 text-sm">Avg. Verification Time</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">247</p>
                    <p className="text-white/70 text-sm">Documents Today</p>
                  </div>
                  <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                    <p className="text-2xl font-bold text-white">99.1%</p>
                    <p className="text-white/70 text-sm">Authenticity Rate</p>
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

export default VerifierDashboard;
