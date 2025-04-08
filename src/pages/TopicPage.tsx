
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface TopicContent {
  title: string;
  description: string;
  externalLinks: {
    title: string;
    url: string;
  }[];
}

const topicData: Record<string, TopicContent> = {
  'protac-degraders': {
    title: 'PROTAC Degraders',
    description: 'Proteolysis targeting chimeras (PROTACs) are heterobifunctional molecules that can simultaneously bind to a target protein and an E3 ubiquitin ligase, leading to the degradation of the target protein through the ubiquitin-proteasome system.',
    externalLinks: [
      { title: 'Recent advances in PROTAC technology', url: 'https://www.nature.com/articles/s41573-021-00371-6' },
      { title: 'Clinical applications of PROTACs', url: 'https://www.sciencedirect.com/science/article/pii/S1359644621003604' }
    ]
  },
  'ai-in-drug-discovery': {
    title: 'AI in Drug Discovery',
    description: 'Artificial intelligence is revolutionizing drug discovery by accelerating the identification of novel compounds, predicting properties, and optimizing lead molecules with reduced time and cost.',
    externalLinks: [
      { title: 'Machine learning for molecular design', url: 'https://www.nature.com/articles/s41557-021-00716-z' },
      { title: 'AI approaches in pharmaceutical research', url: 'https://www.sciencedirect.com/science/article/pii/S1359644621003628' }
    ]
  },
  'mrna-therapeutics': {
    title: 'mRNA Therapeutics',
    description: 'mRNA therapeutics involve delivering synthetic messenger RNA into cells to direct protein production, with applications ranging from vaccines to protein replacement therapies.',
    externalLinks: [
      { title: 'Progress in mRNA therapeutics', url: 'https://www.nature.com/articles/s41573-022-00444-0' },
      { title: 'Future of mRNA vaccines', url: 'https://www.sciencedirect.com/science/article/pii/S1471489221000345' }
    ]
  },
  'targeted-antibodies': {
    title: 'Targeted Antibodies',
    description: 'Targeted antibody therapeutics specifically bind to antigens associated with diseases, enabling precise treatment with reduced off-target effects compared to traditional small molecule drugs.',
    externalLinks: [
      { title: 'Antibody-drug conjugates', url: 'https://www.nature.com/articles/s41573-021-00291-5' },
      { title: 'Bispecific antibodies', url: 'https://www.sciencedirect.com/science/article/pii/S1359644621000917' }
    ]
  }
};

const TopicPage = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? topicData[topicId] : null;
  
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, [topicId]);

  return (
    <div className="flex min-h-screen flex-col molecule-bg">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {topic ? (
            <>
              <h1 className="text-3xl font-bold mb-6">{topic.title}</h1>
              
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <p className="text-lg">{topic.description}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Related Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {topic.externalLinks.map((link, index) => (
                      <li key={index} className="flex items-start">
                        <a 
                          href={link.url}
                          className="flex items-center text-molecular-blue hover:text-molecular-purple transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="flex-1">{link.title}</span>
                          <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="text-center py-12">
              <h1 className="text-2xl font-bold mb-4">Topic Not Found</h1>
              <p className="text-gray-600 mb-6">The requested topic could not be found.</p>
              <a href="/" className="text-molecular-blue hover:text-molecular-purple underline">
                Return to Home
              </a>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TopicPage;
