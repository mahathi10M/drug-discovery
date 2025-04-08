
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Beaker, Atom, TrendingUp, BookOpen, ExternalLink } from 'lucide-react';

interface MoleculeViewerProps {
  smiles?: string;
  generatedSmiles?: string;
  isLoading: boolean;
}

interface NewsItem {
  title: string;
  url: string;
}

const MoleculeViewer: React.FC<MoleculeViewerProps> = ({ 
  smiles, 
  generatedSmiles,
  isLoading 
}) => {
  // In a real application, we would use a molecular visualization library
  // like RDKit.js, 3DMol.js, or similar to render the molecules
  
  // For this demo, we'll use placeholder graphics
  const [trendingTopics, setTrendingTopics] = useState<string[]>([
    'PROTAC degraders',
    'AI in drug discovery',
    'mRNA therapeutics',
    'Targeted antibodies'
  ]);
  
  const [latestNews, setLatestNews] = useState<NewsItem[]>([
    { title: 'New breakthrough in cancer drug development', url: '#' },
    { title: 'AI accelerates discovery of novel antibiotics', url: '#' },
    { title: 'FDA approves revolutionary treatment for rare disease', url: '#' },
  ]);

  // Simulate dynamic data loading
  useEffect(() => {
    // In a real app, this would fetch from an API
    const rotateNews = () => {
      setLatestNews(prev => {
        const rotated = [...prev];
        const first = rotated.shift();
        if (first) rotated.push(first);
        return rotated;
      });
    };
    
    const newsInterval = setInterval(rotateNews, 5000);
    return () => clearInterval(newsInterval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Input Molecule */}
      <Card className="overflow-hidden md:col-span-1">
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
      <Card className="overflow-hidden md:col-span-1">
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

      {/* Trends & News Section */}
      <Card className="overflow-hidden md:col-span-1">
        <CardContent className="p-0">
          <div className="bg-molecular-gray py-2 px-4 border-b">
            <h3 className="font-medium">Trends & News</h3>
          </div>
          <div className="p-4 h-64 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <TrendingUp className="h-4 w-4 mr-2 text-molecular-purple" />
                <h4 className="font-medium">Trending in Drug Discovery</h4>
              </div>
              <ul className="pl-6 list-disc text-sm">
                {trendingTopics.map((topic, index) => (
                  <li key={index} className="mb-1 text-molecular-blue hover:text-molecular-purple">
                    <a href={`#${topic.replace(/\s+/g, '-').toLowerCase()}`}>{topic}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <BookOpen className="h-4 w-4 mr-2 text-molecular-purple" />
                <h4 className="font-medium">Latest Research News</h4>
              </div>
              <ul className="space-y-2 text-sm">
                {latestNews.map((item, index) => (
                  <li key={index} className="p-2 hover:bg-molecular-gray/50 rounded transition-colors">
                    <a href={item.url} className="flex items-start">
                      <span className="flex-1">{item.title}</span>
                      <ExternalLink className="h-3 w-3 ml-1 flex-shrink-0 text-molecular-purple" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MoleculeViewer;
