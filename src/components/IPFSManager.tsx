
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Upload, Download, Hash, QrCode } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface IPFSFile {
  cid: string;
  name: string;
  size: number;
  uploadDate: Date;
}

const IPFSManager = () => {
  const [files, setFiles] = useState<IPFSFile[]>([
    { cid: 'QmX7M9CiYXjVeFnkTVbEHZ1L9L8K2mJ3nN4oP5qR6sT7uV', name: 'Certificate_001.pdf', size: 256789, uploadDate: new Date() },
    { cid: 'QmY8N0DjZYkWgGmOkUvBfH2M9M3kK4jO6pQ7rS8tV9wX', name: 'Transcript_2024.pdf', size: 187432, uploadDate: new Date() }
  ]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadToIPFS = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    try {
      // Simulate IPFS upload
      setTimeout(() => {
        const newFile: IPFSFile = {
          cid: `Qm${Math.random().toString(36).substring(2, 15)}`,
          name: selectedFile.name,
          size: selectedFile.size,
          uploadDate: new Date()
        };
        setFiles(prev => [newFile, ...prev]);
        setSelectedFile(null);
        setIsUploading(false);
        toast({
          title: "File uploaded to IPFS",
          description: `CID: ${newFile.cid}`,
        });
      }, 2000);
    } catch (error) {
      setIsUploading(false);
      toast({
        title: "Upload failed",
        description: "Failed to upload file to IPFS",
        variant: "destructive"
      });
    }
  };

  const generateQRCode = (cid: string) => {
    toast({
      title: "QR Code Generated",
      description: `QR code for ${cid} created successfully`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="w-5 h-5 mr-2" />
          IPFS Storage Management
        </CardTitle>
        <CardDescription>Upload and manage files on the InterPlanetary File System</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="file-upload">Upload File to IPFS</Label>
          <Input
            id="file-upload"
            type="file"
            onChange={handleFileSelect}
            accept=".pdf,.jpg,.png,.doc,.docx"
          />
          {selectedFile && (
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm">{selectedFile.name}</span>
              <Button 
                onClick={uploadToIPFS} 
                disabled={isUploading}
                size="sm"
              >
                {isUploading ? 'Uploading...' : 'Upload'}
              </Button>
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold text-sm">Stored Files</h4>
          {files.map((file, index) => (
            <div key={index} className="border rounded-lg p-3 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    Size: {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <Badge variant="outline">Pinned</Badge>
              </div>
              <div className="bg-gray-50 p-2 rounded text-xs font-mono">
                CID: {file.cid}
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Download className="w-3 h-3 mr-1" />
                  Download
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => generateQRCode(file.cid)}
                  className="flex-1"
                >
                  <QrCode className="w-3 h-3 mr-1" />
                  QR Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default IPFSManager;
