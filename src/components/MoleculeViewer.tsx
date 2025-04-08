
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Atom } from 'lucide-react';

interface MoleculeViewerProps {
  smiles?: string;
  generatedSmiles?: string;
  isLoading: boolean;
}

const MoleculeViewer: React.FC<MoleculeViewerProps> = ({ 
  smiles, 
  generatedSmiles,
  isLoading 
}) => {
  // In a real application, we would use a molecular visualization library
  // like RDKit.js, 3DMol.js, or similar to render the molecules
  
  // For this demo, we'll use placeholder graphics

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Input Molecule */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-molecular-gray py-2 px-4 border-b">
            <h3 className="font-medium">Input Molecule</h3>
          </div>
          <div className="h-64 flex items-center justify-center p-6">
            {!smiles ? (
              <div className="text-center text-muted-foreground">
                <Beaker className="h-16 w-16 mx-auto mb-2 text-muted-foreground/50" />
                <p>Enter a SMILES string to visualize</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-white rounded-full h-40 w-40 mx-auto flex items-center justify-center shadow-sm border">
                  <Beaker className="h-20 w-20 text-molecular-purple animate-spin-slow" />
                </div>
                <p className="mt-4 font-mono text-xs truncate max-w-xs mx-auto">{smiles}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Generated Molecule */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-molecular-gray py-2 px-4 border-b">
            <h3 className="font-medium">Generated Molecule</h3>
          </div>
          <div className="h-64 flex items-center justify-center p-6">
            {isLoading ? (
              <div className="text-center">
                <div className="bg-white rounded-full h-32 w-32 mx-auto flex items-center justify-center shadow-sm border animate-pulse">
                  <Atom className="h-16 w-16 text-molecular-lightPurple animate-spin-slow" />
                </div>
                <p className="mt-4">Generating molecule...</p>
              </div>
            ) : !generatedSmiles ? (
              <div className="text-center text-muted-foreground">
                <Atom className="h-16 w-16 mx-auto mb-2 text-muted-foreground/50" />
                <p>Generated molecule will appear here</p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-white rounded-full h-40 w-40 mx-auto flex items-center justify-center shadow-sm border">
                  <Atom className="h-20 w-20 text-molecular-blue animate-spin-slow" />
                </div>
                <p className="mt-4 font-mono text-xs truncate max-w-xs mx-auto">{generatedSmiles}</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoleculeViewer;
