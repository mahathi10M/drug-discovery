
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Drug Molecule Generator. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
