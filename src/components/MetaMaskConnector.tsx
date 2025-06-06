
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wallet, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MetaMaskConnectorProps {
  onConnect?: (account: string) => void;
  onDisconnect?: () => void;
}

const MetaMaskConnector = ({ onConnect, onDisconnect }: MetaMaskConnectorProps) => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [network, setNetwork] = useState<string>('');
  const { toast } = useToast();

  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          getNetwork();
          onConnect?.(accounts[0]);
        }
      } catch (error) {
        console.error('Error checking MetaMask connection:', error);
      }
    }
  };

  const getNetwork = async () => {
    if (window.ethereum) {
      try {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        const networks: { [key: string]: string } = {
          '0x1': 'Ethereum Mainnet',
          '0x3': 'Ropsten Testnet',
          '0x4': 'Rinkeby Testnet',
          '0x5': 'Goerli Testnet'
        };
        setNetwork(networks[chainId] || 'Unknown Network');
      } catch (error) {
        console.error('Error getting network:', error);
      }
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast({
        title: "MetaMask not found",
        description: "Please install MetaMask browser extension",
        variant: "destructive"
      });
      return;
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setAccount(accounts[0]);
      getNetwork();
      onConnect?.(accounts[0]);
      toast({
        title: "Wallet connected",
        description: "MetaMask wallet connected successfully",
      });
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Failed to connect MetaMask wallet",
        variant: "destructive"
      });
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAccount(null);
    setNetwork('');
    onDisconnect?.();
    toast({
      title: "Wallet disconnected",
      description: "MetaMask wallet has been disconnected",
    });
  };

  if (!account) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="w-5 h-5 mr-2" />
            MetaMask Wallet
          </CardTitle>
          <CardDescription>Connect your MetaMask wallet to access blockchain features</CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={connectWallet} 
            disabled={isConnecting}
            className="w-full"
          >
            {isConnecting ? 'Connecting...' : 'Connect MetaMask'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
          Wallet Connected
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">Address:</p>
          <p className="font-mono text-xs bg-gray-100 p-2 rounded">
            {account.slice(0, 6)}...{account.slice(-4)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Network:</p>
          <Badge variant="secondary">{network}</Badge>
        </div>
        <Button variant="outline" onClick={disconnectWallet} className="w-full">
          Disconnect
        </Button>
      </CardContent>
    </Card>
  );
};

export default MetaMaskConnector;
