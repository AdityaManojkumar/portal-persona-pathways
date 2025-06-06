
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, FileCheck, AlertCircle, CheckCircle, Hash, Link } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UniversalVerifier = () => {
  const [dragActive, setDragActive] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const { toast } = useToast();

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      await processCertificate(files[0]);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      await processCertificate(files[0]);
    }
  };

  const processCertificate = async (file: File) => {
    setIsVerifying(true);
    
    try {
      // Simulate certificate verification process
      const fileContent = await file.text();
      const certificate = JSON.parse(fileContent);
      
      // Mock verification steps following Blockcerts standard
      const verificationSteps = {
        integrity: Math.random() > 0.1, // 90% success rate
        merkleProof: Math.random() > 0.1,
        blockchain: Math.random() > 0.1,
        issuerAuth: Math.random() > 0.1,
        revocation: Math.random() > 0.05, // 95% success rate
        expiration: Math.random() > 0.05
      };

      const isValid = Object.values(verificationSteps).every(result => result);
      
      const result = {
        isValid,
        verificationSteps,
        certificate,
        verifiedAt: new Date().toISOString(),
        transactionId: '0x' + Math.random().toString(16).slice(2, 34),
        blockHeight: Math.floor(Math.random() * 1000000) + 700000,
        issuer: certificate.badge?.issuer?.name || 'Unknown Institution'
      };

      setVerificationResult(result);
      
      toast({
        title: isValid ? "Certificate Verified" : "Verification Failed",
        description: isValid ? "This certificate is authentic and valid" : "This certificate could not be verified",
        variant: isValid ? "default" : "destructive"
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid certificate format",
        variant: "destructive"
      });
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Drag & Drop Zone */}
      <Card className="bg-white/10 backdrop-blur-sm border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center">
            <FileCheck className="w-6 h-6 mr-2" />
            Universal Certificate Verifier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div
            className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
              dragActive 
                ? 'border-blue-400 bg-blue-400/10' 
                : 'border-white/30 hover:border-white/50'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-16 h-16 text-white/70 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Verify Your Certificate
            </h3>
            <p className="text-white/80 mb-4">
              Drag and drop your JSON certificate file here, or click to browse
            </p>
            <input
              type="file"
              accept=".json,.txt"
              onChange={handleFileSelect}
              className="hidden"
              id="file-upload"
            />
            <Button
              asChild
              className="bg-white/20 hover:bg-white/30 text-white"
              disabled={isVerifying}
            >
              <label htmlFor="file-upload" className="cursor-pointer">
                {isVerifying ? 'Verifying...' : 'Browse Files'}
              </label>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Verification Results */}
      {verificationResult && (
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              {verificationResult.isValid ? (
                <CheckCircle className="w-6 h-6 mr-2 text-green-400" />
              ) : (
                <AlertCircle className="w-6 h-6 mr-2 text-red-400" />
              )}
              Verification Results
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Overall Status */}
            <div className="text-center p-6 rounded-lg bg-white/5">
              <Badge 
                className={`text-lg px-4 py-2 ${
                  verificationResult.isValid 
                    ? 'bg-green-500/20 text-green-300' 
                    : 'bg-red-500/20 text-red-300'
                }`}
              >
                {verificationResult.isValid ? 'VERIFIED' : 'FAILED'}
              </Badge>
              <p className="text-white/80 mt-2">
                Issued by: {verificationResult.issuer}
              </p>
            </div>

            {/* Verification Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(verificationResult.verificationSteps).map(([step, passed]) => (
                <div key={step} className="flex items-center space-x-3 p-3 bg-white/5 rounded">
                  {passed ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                  <span className="text-white text-sm capitalize">
                    {step.replace(/([A-Z])/g, ' $1').trim()}
                  </span>
                </div>
              ))}
            </div>

            {/* Transaction Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded">
                <div className="flex items-center mb-2">
                  <Hash className="w-4 h-4 text-white/70 mr-2" />
                  <span className="text-white/70 text-sm">Transaction ID</span>
                </div>
                <p className="text-white font-mono text-xs break-all">
                  {verificationResult.transactionId}
                </p>
              </div>
              <div className="p-4 bg-white/5 rounded">
                <div className="flex items-center mb-2">
                  <Link className="w-4 h-4 text-white/70 mr-2" />
                  <span className="text-white/70 text-sm">Block Height</span>
                </div>
                <p className="text-white font-mono text-sm">
                  {verificationResult.blockHeight}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default UniversalVerifier;
