
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FlaskConical, Brain, Atom, BarChart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FlaskConical className="h-8 w-8 text-molecular-purple" />,
      title: "Input Molecule",
      description: "Enter a SMILES string representing your initial molecule. This serves as the starting point for the AI model."
    },
    {
      icon: <Brain className="h-8 w-8 text-molecular-lightPurple" />,
      title: "AI Processing",
      description: "Our generative AI model analyzes the molecular structure and applies deep learning algorithms to generate novel derivatives."
    },
    {
      icon: <Atom className="h-8 w-8 text-molecular-blue" />,
      title: "Molecule Generation",
      description: "The AI generates a new molecule with optimized properties while maintaining structural similarity to the input molecule."
    },
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: "Property Analysis",
      description: "The tool calculates key properties for the generated molecule, helping you assess its potential as a drug candidate."
    }
  ];

  return (
    <section id="how-it-works" className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <div className="mb-4">{step.icon}</div>
                <h3 className="font-medium text-lg mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
