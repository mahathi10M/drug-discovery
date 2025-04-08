
import React from 'react';
import { FlaskConical } from 'lucide-react';

const Header = () => {
  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-8 w-8 text-molecular-purple" />
          <div>
            <h1 className="text-xl font-bold tracking-tight">Drug Molecule Generator</h1>
            <p className="text-xs text-muted-foreground">Accelerating drug discovery with AI</p>
          </div>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</a>
            </li>
            <li>
              <a href="#about" className="text-sm font-medium hover:text-primary">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
