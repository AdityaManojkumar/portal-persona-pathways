
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone, Plus, Share } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Get the Free Blockcerts App",
      description: "Download our secure wallet to store your certificates",
      action: "Connect Wallet"
    },
    {
      icon: Plus,
      title: "Add Credential Issuers", 
      description: "Connect with your institution to receive certificates",
      action: "Add Issuer"
    },
    {
      icon: Share,
      title: "Receive & Share Credentials",
      description: "Get your certificates and share them securely",
      action: "Share Now"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Three Simple Steps to Digital Credentials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="bg-blue-500 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-white/80 mb-6">{step.description}</p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg transition-colors">
                  {step.action}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
