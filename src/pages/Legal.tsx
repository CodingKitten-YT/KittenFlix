import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

const LegalPage: React.FC = () => {
  const [content, setContent] = useState<string>(
    'Loading legal information...'
  );

  useEffect(() => {
    fetch('/legal.md')
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch(() => setContent('Legal information could not be loaded.'));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="prose prose-lg dark:prose-invert">
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default LegalPage;
