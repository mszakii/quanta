import researchData from '../data/research.json';
import { ExternalLink, FileText } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  authors: string;
  date: string;
  abstract?: string;
  journal?: string;
  link: string;
}

export default function Research() {
  const { reviews, papers } = researchData as { reviews: Article[], papers: Article[] };

  return (
    <section id="research" className="py-24 bg-quanta-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-quanta-navy mb-4">Our Research</h2>
          <p className="text-lg text-quanta-gray">
            Exploring the frontiers of nanotechnology through comprehensive reviews and original peer-reviewed publications.
          </p>
        </div>

        {/* Review Articles */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 border-b border-quanta-light pb-4">
            <FileText className="text-quanta-violet" size={24} />
            <h3 className="font-serif text-2xl font-bold text-quanta-navy">Review Articles</h3>
          </div>
          
          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((article) => (
                <div key={article.id} className="bg-quanta-light p-8 rounded-2xl border border-gray-100 flex flex-col h-full">
                  <h4 className="font-serif font-bold text-xl text-quanta-navy mb-3">{article.title}</h4>
                  <p className="text-sm text-quanta-gray mb-1"><span className="font-medium text-quanta-navy">Authors:</span> {article.authors}</p>
                  <p className="text-sm text-quanta-gray mb-4"><span className="font-medium text-quanta-navy">Date:</span> {article.date}</p>
                  {article.abstract && (
                    <p className="text-quanta-gray text-sm leading-relaxed mb-6 flex-grow">{article.abstract}</p>
                  )}
                  <a 
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-quanta-violet font-medium hover:text-quanta-navy transition-colors mt-auto"
                  >
                    Read Article <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-quanta-light p-12 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-quanta-gray text-lg">Our first review article is on the way.</p>
            </div>
          )}
        </div>

        {/* Published Papers */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-quanta-light pb-4">
            <FileText className="text-quanta-violet" size={24} />
            <h3 className="font-serif text-2xl font-bold text-quanta-navy">Published Papers</h3>
          </div>
          
          {papers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {papers.map((paper) => (
                <div key={paper.id} className="bg-quanta-light p-8 rounded-2xl border border-gray-100 flex flex-col h-full">
                  <h4 className="font-serif font-bold text-xl text-quanta-navy mb-3">{paper.title}</h4>
                  <p className="text-sm text-quanta-gray mb-1"><span className="font-medium text-quanta-navy">Journal:</span> {paper.journal}</p>
                  <p className="text-sm text-quanta-gray mb-1"><span className="font-medium text-quanta-navy">Authors:</span> {paper.authors}</p>
                  <p className="text-sm text-quanta-gray mb-6 flex-grow"><span className="font-medium text-quanta-navy">Date:</span> {paper.date}</p>
                  <a 
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-quanta-violet font-medium hover:text-quanta-navy transition-colors mt-auto"
                  >
                    View DOI <ExternalLink size={16} />
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-quanta-light p-12 rounded-2xl border border-dashed border-gray-300 text-center">
              <p className="text-quanta-gray text-lg">Our first publication is coming soon — stay tuned.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
