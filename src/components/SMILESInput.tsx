
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from 'lucide-react';

interface SMILESInputProps {
  onGenerate: (smiles: string) => void;
  isLoading: boolean;
}

const SMILESInput: React.FC<SMILESInputProps> = ({ onGenerate, isLoading }) => {
  const [smiles, setSmiles] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Simple SMILES validation - just checking for basic format
  const validateSMILES = (input: string): boolean => {
    // Basic validation - could be more sophisticated
    if (input.trim().length < 2) {
      setError('SMILES string is too short');
      return false;
    }
    
    // Check for some basic SMILES characters
    const hasValidChars = /[A-Za-z0-9\(\)\[\]\.\=\#\-\+]/.test(input);
    if (!hasValidChars) {
      setError('SMILES string contains invalid characters');
      return false;
    }
    
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSMILES(smiles)) {
      onGenerate(smiles);
    }
  };

  // Example SMILES structures
  const examples = [
    { name: 'Aspirin', smiles: 'CC(=O)OC1=CC=CC=C1C(=O)O' },
    { name: 'Caffeine', smiles: 'CN1C=NC2=C1C(=O)N(C)C(=O)N2C' },
    { name: 'Ibuprofen', smiles: 'CC(C)CC1=CC=C(C=C1)C(C)C(=O)O' }
  ];
  
  return (
    <div className="w-full space-y-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="flex items-center gap-2">
          <label htmlFor="smiles-input" className="text-sm font-medium">
            SMILES Input
          </label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent className="max-w-80">
                <p>SMILES (Simplified Molecular Input Line Entry System) is a notation that allows you to represent molecular structures as text strings.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        <div className="flex gap-2">
          <Input
            id="smiles-input"
            placeholder="Enter SMILES string (e.g., CC(=O)OC1=CC=CC=C1C(=O)O for Aspirin)"
            value={smiles}
            onChange={(e) => setSmiles(e.target.value)}
            className="font-mono"
          />
          <Button type="submit" disabled={isLoading || !smiles.trim()}>
            {isLoading ? 'Generating...' : 'Generate'}
          </Button>
        </div>
        
        {error && (
          <p className="text-destructive text-sm">{error}</p>
        )}
      </form>
      
      <div>
        <p className="text-sm font-medium mb-2">Examples:</p>
        <div className="flex flex-wrap gap-2">
          {examples.map((example) => (
            <Button
              key={example.name}
              variant="outline"
              size="sm"
              onClick={() => setSmiles(example.smiles)}
              className="text-xs"
            >
              {example.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SMILESInput;
