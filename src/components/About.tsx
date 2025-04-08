
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-molecular-gray">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">About Drug Molecule Generator</h2>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-4">
            The Drug Molecule Generator is a powerful and simple tool that harnesses the power of Generative AI 
            to help accelerate drug discovery and molecular design.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-3">🧪 What Does It Do?</h3>
          <p>
            This tool allows users to input a SMILES (Simplified Molecular Input Line Entry System) string — 
            a textual representation of a chemical structure — and receive a generated or modified molecule 
            based on AI-driven predictions.
          </p>
          <p>
            Whether you're a researcher, a student, or just curious about how molecules are created in drug 
            development, this tool provides a quick and interactive way to explore molecular possibilities.
          </p>
          
          <h3 className="text-xl font-medium mt-8 mb-3">🌐 Powered By AI</h3>
          <p>
            This application is backed by a Generative AI model trained on large chemical databases. It's designed to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Suggest new drug-like molecules</li>
            <li>Aid in structure-based design</li>
            <li>Enable rapid hypothesis testing in silico</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-8 mb-3">Accelerating Drug Discovery</h3>
          <p>
            The process of drug discovery is time-consuming, expensive, and often inefficient, with a high rate 
            of failure in clinical trials. Traditional methods rely heavily on trial and error, requiring years 
            of research and significant financial investment.
          </p>
          <p>
            Generative AI, with its ability to analyze large datasets, predict molecular interactions, and generate 
            novel compounds, has the potential to revolutionize this process, making it faster, more efficient, 
            and potentially more successful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
