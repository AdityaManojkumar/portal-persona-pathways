
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Mail, 
  Hash, 
  TreePine, 
  Link, 
  Upload, 
  QrCode,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CertificateData {
  studentEmail: string;
  studentName: string;
  degree: string;
  program: string;
  issueDate: string;
  expirationDate?: string;
}

const BlockcertsWorkflow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [certificateData, setCertificateData] = useState<CertificateData>({
    studentEmail: '',
    studentName: '',
    degree: '',
    program: '',
    issueDate: new Date().toISOString().split('T')[0],
    expirationDate: ''
  });
  const [batchCertificates, setBatchCertificates] = useState<CertificateData[]>([]);
  const [processingStatus, setProcessingStatus] = useState<{[key: string]: string}>({});
  const { toast } = useToast();

  const workflowSteps = [
    { id: 'invitation', title: 'Send Invitation', icon: Mail },
    { id: 'creation', title: 'Create Certificate', icon: Hash },
    { id: 'batch', title: 'Batch Processing', icon: TreePine },
    { id: 'blockchain', title: 'Blockchain Anchoring', icon: Link },
    { id: 'ipfs', title: 'IPFS Storage', icon: Upload },
    { id: 'delivery', title: 'Certificate Delivery', icon: QrCode }
  ];

  const sendInvitation = async () => {
    setProcessingStatus(prev => ({...prev, invitation: 'processing'}));
    
    // Simulate invitation process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const inviteLink = `https://blockcerts.org/invite/${Math.random().toString(36).slice(2)}`;
    
    setProcessingStatus(prev => ({...prev, invitation: 'completed'}));
    toast({
      title: "Invitation Sent",
      description: `Invitation sent to ${certificateData.studentEmail}`,
    });
    
    setCurrentStep(1);
  };

  const createCertificate = async () => {
    setProcessingStatus(prev => ({...prev, creation: 'processing'}));
    
    // Create Blockcerts-compatible certificate
    const certificate = {
      "@context": [
        "https://www.w3.org/2018/credentials/v1",
        "https://www.blockcerts.org/schema/3.0-alpha/context.json"
      ],
      type: ["VerifiableCredential", "BlockcertsCredential"],
      id: `urn:uuid:${crypto.randomUUID()}`,
      issuer: {
        id: "https://institution.edu/issuer",
        name: "Sample Institution",
        publicKey: "0x" + Math.random().toString(16).slice(2, 34)
      },
      credentialSubject: {
        id: `mailto:${certificateData.studentEmail}`,
        name: certificateData.studentName,
        degree: certificateData.degree,
        program: certificateData.program
      },
      issuanceDate: certificateData.issueDate,
      expirationDate: certificateData.expirationDate || undefined
    };

    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setBatchCertificates([certificateData]);
    setProcessingStatus(prev => ({...prev, creation: 'completed'}));
    toast({
      title: "Certificate Created",
      description: "Certificate structure generated successfully",
    });
    
    setCurrentStep(2);
  };

  const processBatch = async () => {
    setProcessingStatus(prev => ({...prev, batch: 'processing'}));
    
    // Simulate Merkle tree creation
    const certificateHashes = batchCertificates.map(() => 
      '0x' + Math.random().toString(16).slice(2, 66)
    );
    
    const merkleRoot = '0x' + Math.random().toString(16).slice(2, 66);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setProcessingStatus(prev => ({...prev, batch: 'completed'}));
    toast({
      title: "Batch Processed",
      description: `Merkle tree created with ${batchCertificates.length} certificate(s)`,
    });
    
    setCurrentStep(3);
  };

  const anchorToBlockchain = async () => {
    setProcessingStatus(prev => ({...prev, blockchain: 'processing'}));
    
    // Simulate blockchain transaction
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const txId = '0x' + Math.random().toString(16).slice(2, 66);
    
    setProcessingStatus(prev => ({...prev, blockchain: 'completed'}));
    toast({
      title: "Blockchain Anchored",
      description: `Transaction ID: ${txId.slice(0, 10)}...`,
    });
    
    setCurrentStep(4);
  };

  const storeInIPFS = async () => {
    setProcessingStatus(prev => ({...prev, ipfs: 'processing'}));
    
    // Simulate IPFS storage
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const ipfsCid = 'Qm' + Math.random().toString(36).slice(2, 48);
    
    setProcessingStatus(prev => ({...prev, ipfs: 'completed'}));
    toast({
      title: "IPFS Storage Complete",
      description: `Certificate stored with CID: ${ipfsCid.slice(0, 15)}...`,
    });
    
    setCurrentStep(5);
  };

  const deliverCertificate = async () => {
    setProcessingStatus(prev => ({...prev, delivery: 'processing'}));
    
    // Simulate certificate delivery
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setProcessingStatus(prev => ({...prev, delivery: 'completed'}));
    toast({
      title: "Certificate Delivered",
      description: "Certificate sent to student successfully",
    });
  };

  const getStepStatus = (stepIndex: number) => {
    if (stepIndex < currentStep) return 'completed';
    if (stepIndex === currentStep) return 'current';
    return 'pending';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-400" />;
      case 'processing':
        return <Clock className="w-5 h-5 text-yellow-400 animate-spin" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Timeline */}
      <Card className="backdrop-blur-sm bg-white/10 border-white/20">
        <CardHeader>
          <CardTitle className="text-white">Blockcerts Issuance Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={(currentStep / (workflowSteps.length - 1)) * 100} className="h-2" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {workflowSteps.map((step, index) => {
                const status = getStepStatus(index);
                const processing = processingStatus[step.id];
                const Icon = step.icon;
                
                return (
                  <div key={step.id} className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${
                      status === 'completed' ? 'bg-green-500/20' :
                      status === 'current' ? 'bg-blue-500/20' :
                      'bg-gray-500/20'
                    }`}>
                      {processing === 'processing' ? getStatusIcon('processing') :
                       processing === 'completed' ? getStatusIcon('completed') :
                       <Icon className="w-6 h-6 text-white/70" />}
                    </div>
                    <p className="text-white text-xs">{step.title}</p>
                    <Badge variant={status === 'completed' ? 'default' : 'secondary'} className="text-xs mt-1">
                      {processing || status}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Input Form */}
      {currentStep === 0 && (
        <Card className="backdrop-blur-sm bg-white/10 border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Certificate Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-white">Student Email</Label>
                <Input
                  type="email"
                  value={certificateData.studentEmail}
                  onChange={(e) => setCertificateData(prev => ({...prev, studentEmail: e.target.value}))}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="student@university.edu"
                />
              </div>
              <div>
                <Label className="text-white">Student Name</Label>
                <Input
                  value={certificateData.studentName}
                  onChange={(e) => setCertificateData(prev => ({...prev, studentName: e.target.value}))}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label className="text-white">Degree</Label>
                <Input
                  value={certificateData.degree}
                  onChange={(e) => setCertificateData(prev => ({...prev, degree: e.target.value}))}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Bachelor of Science"
                />
              </div>
              <div>
                <Label className="text-white">Program</Label>
                <Input
                  value={certificateData.program}
                  onChange={(e) => setCertificateData(prev => ({...prev, program: e.target.value}))}
                  className="bg-white/10 border-white/20 text-white"
                  placeholder="Computer Science"
                />
              </div>
            </div>
            <Button onClick={sendInvitation} className="w-full bg-white/20 hover:bg-white/30 text-white">
              Send Invitation to Student
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Step-specific Actions */}
      {currentStep > 0 && (
        <Card className="backdrop-blur-sm bg-white/10 border-white/20">
          <CardContent className="p-6">
            <div className="flex justify-center space-x-4">
              {currentStep === 1 && (
                <Button onClick={createCertificate} disabled={processingStatus.creation === 'processing'}>
                  Create Certificate
                </Button>
              )}
              {currentStep === 2 && (
                <Button onClick={processBatch} disabled={processingStatus.batch === 'processing'}>
                  Process Batch & Create Merkle Tree
                </Button>
              )}
              {currentStep === 3 && (
                <Button onClick={anchorToBlockchain} disabled={processingStatus.blockchain === 'processing'}>
                  Anchor to Blockchain
                </Button>
              )}
              {currentStep === 4 && (
                <Button onClick={storeInIPFS} disabled={processingStatus.ipfs === 'processing'}>
                  Store in IPFS
                </Button>
              )}
              {currentStep === 5 && (
                <Button onClick={deliverCertificate} disabled={processingStatus.delivery === 'processing'}>
                  Deliver Certificate
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BlockcertsWorkflow;
