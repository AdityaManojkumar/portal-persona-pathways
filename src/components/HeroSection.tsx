
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Shield, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="text-center py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">
          Own and Share Your Achievements
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          With blockchain, your official records are now yours forever. 
          Secure, verifiable, and completely under your control.
        </p>
        
        {/* Universal Verifier */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-16">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white mr-3" />
              <h3 className="text-2xl font-semibold text-white">Universal Verifier</h3>
            </div>
            <div className="border-2 border-dashed border-white/30 rounded-lg p-12 text-center hover:border-white/50 transition-colors cursor-pointer">
              <Upload className="w-12 h-12 text-white/70 mx-auto mb-4" />
              <p className="text-white/80 text-lg mb-2">Drag & drop your certificate here</p>
              <p className="text-white/60 text-sm">or click to browse files</p>
            </div>
            <Button className="mt-6 bg-white text-purple-600 hover:bg-gray-100">
              Verify Certificate
            </Button>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
            <p className="text-white/80">Blockchain-secured certificates that can't be faked</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Trusted</h3>
            <p className="text-white/80">Verified by institutions worldwide</p>
          </div>
          <div className="text-center">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Yours</h3>
            <p className="text-white/80">Own your credentials forever</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
