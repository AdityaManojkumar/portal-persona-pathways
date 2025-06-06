
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Shield, Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProofAttribute {
  id: string;
  label: string;
  value: string;
  isPrivate: boolean;
}

const ZKProofGenerator = () => {
  const [attributes] = useState<ProofAttribute[]>([
    { id: 'name', label: 'Full Name', value: 'John Doe', isPrivate: false },
    { id: 'degree', label: 'Degree', value: 'Bachelor of Science', isPrivate: false },
    { id: 'gpa', label: 'GPA', value: '3.85', isPrivate: true },
    { id: 'graduation_date', label: 'Graduation Date', value: '2024-05-15', isPrivate: false },
    { id: 'student_id', label: 'Student ID', value: 'ST123456', isPrivate: true }
  ]);
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProof, setGeneratedProof] = useState<string | null>(null);
  const { toast } = useToast();

  const toggleAttribute = (attributeId: string) => {
    setSelectedAttributes(prev => 
      prev.includes(attributeId)
        ? prev.filter(id => id !== attributeId)
        : [...prev, attributeId]
    );
  };

  const generateProof = async () => {
    if (selectedAttributes.length === 0) {
      toast({
        title: "No attributes selected",
        description: "Please select at least one attribute to generate a proof",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate ZK proof generation
      setTimeout(() => {
        const proof = `zkproof_${Math.random().toString(36).substring(2, 15)}`;
        setGeneratedProof(proof);
        setIsGenerating(false);
        toast({
          title: "Zero-Knowledge Proof Generated",
          description: `Proof created for ${selectedAttributes.length} attributes`,
        });
      }, 3000);
    } catch (error) {
      setIsGenerating(false);
      toast({
        title: "Proof generation failed",
        description: "Failed to generate zero-knowledge proof",
        variant: "destructive"
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          Zero-Knowledge Proof Generator
        </CardTitle>
        <CardDescription>
          Generate cryptographic proofs for selective disclosure of credentials
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Label className="text-sm font-semibold">Select Attributes to Include in Proof</Label>
          {attributes.map((attr) => (
            <div key={attr.id} className="flex items-center space-x-3 p-3 border rounded-lg">
              <Checkbox
                id={attr.id}
                checked={selectedAttributes.includes(attr.id)}
                onCheckedChange={() => toggleAttribute(attr.id)}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <Label htmlFor={attr.id} className="font-medium">
                    {attr.label}
                  </Label>
                  {attr.isPrivate ? (
                    <Badge variant="secondary" className="flex items-center">
                      <Lock className="w-3 h-3 mr-1" />
                      Private
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      Public
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{attr.value}</p>
              </div>
            </div>
          ))}
        </div>

        <Button 
          onClick={generateProof} 
          disabled={isGenerating || selectedAttributes.length === 0}
          className="w-full"
        >
          {isGenerating ? 'Generating Proof...' : 'Generate Zero-Knowledge Proof'}
        </Button>

        {generatedProof && (
          <div className="space-y-2">
            <Label className="text-sm font-semibold">Generated Proof</Label>
            <div className="bg-gray-50 p-3 rounded border">
              <p className="font-mono text-xs break-all">{generatedProof}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex-1">
                Copy Proof
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                Share Proof
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ZKProofGenerator;
