
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SMILESInput from '@/components/SMILESInput';
import MoleculeViewer from '@/components/MoleculeViewer';
import MoleculeProperties from '@/components/MoleculeProperties';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [inputSmiles, setInputSmiles] = useState<string>('');
  const [generatedSmiles, setGeneratedSmiles] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // This is a mock function that simulates an AI generating a molecule
  // In a real app, this would make an API call to a backend service
  const generateMolecule = async (smiles: string) => {
    setIsLoading(true);
    setInputSmiles(smiles);
    
    try {
      // Simulate API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // This is a mock function that makes a slight modification to the input SMILES
      // In a real app, this would be the result from the AI model
      const mockAIModification = (input: string) => {
        // Simple mock: add or replace some atoms or bonds
        // This is NOT chemically accurate, just for demonstration
        const modifications = [
          { from: 'C', to: 'N' },
          { from: 'O', to: 'S' },
          { from: 'N', to: 'P' },
          { from: '=O', to: '=S' },
          { from: 'Cl', to: 'F' }
        ];
        
        let modified = input;
        const mod = modifications[Math.floor(Math.random() * modifications.length)];
        modified = modified.replace(mod.from, mod.to);
        
        return modified;
      };
      
      const result = mockAIModification(smiles);
      setGeneratedSmiles(result);
      
      toast({
        title: "Molecule Generated",
        description: "New molecule has been successfully generated",
      });
    } catch (error) {
      console.error("Error generating molecule:", error);
      toast({
        title: "Generation Failed",
        description: "There was an error generating the molecule",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col molecule-bg">
      <Header />
      
      <main className="flex-1">
        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                Drug Molecule Generator
              </h1>
              <p className="text-xl text-muted-foreground">
                Accelerate your drug discovery workflow with generative AI
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <SMILESInput onGenerate={generateMolecule} isLoading={isLoading} />
              
              <MoleculeViewer 
                smiles={inputSmiles} 
                generatedSmiles={generatedSmiles} 
                isLoading={isLoading} 
              />
              
              <MoleculeProperties generatedSmiles={generatedSmiles} />
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
