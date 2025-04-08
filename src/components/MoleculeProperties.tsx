
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Copy } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface MoleculePropertiesProps {
  generatedSmiles?: string;
}

const MoleculeProperties: React.FC<MoleculePropertiesProps> = ({ generatedSmiles }) => {
  const { toast } = useToast();

  // In a real application, these would be calculated based on the molecule structure
  // using a cheminformatics library
  const properties = {
    molecularWeight: "342.42 g/mol",
    logP: "3.8",
    hBondDonors: "1",
    hBondAcceptors: "5",
    rotatable: "6",
    tpsa: "78.5 Å²",
    qed: "0.72",
  };

  const copyToClipboard = () => {
    if (generatedSmiles) {
      navigator.clipboard.writeText(generatedSmiles);
      toast({
        title: "Copied to clipboard",
        description: "SMILES string copied successfully",
      });
    }
  };

  const downloadSMILES = () => {
    if (generatedSmiles) {
      const element = document.createElement('a');
      const file = new Blob([generatedSmiles], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "generated_molecule.smi";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };

  if (!generatedSmiles) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Molecule Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {Object.entries(properties).map(([key, value]) => (
            <div key={key} className="space-y-1">
              <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Drug-likeness</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge className="bg-green-500">Lipinski's Rule</Badge>
              <span className="text-sm">Passes (0 violations)</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-500">PAINS</Badge>
              <span className="text-sm">No alerts</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={copyToClipboard}
          >
            <Copy className="h-4 w-4" />
            <span>Copy SMILES</span>
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={downloadSMILES}
          >
            <Download className="h-4 w-4" />
            <span>Download</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoleculeProperties;
