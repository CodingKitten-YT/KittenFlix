import React from 'react';

const LegalPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="prose prose-lg dark:prose-invert">
        <h2>Legal Disclaimer</h2>

        <p><strong>Last Updated: 12/03/2025</strong></p>

        <p>KittenFlix (<strong>"the Site"</strong>) is a third-party interface that provides access to content hosted on external platforms. We do not host, upload, or control any of the content displayed through our service. Instead, we function as a search engine, indexing and organizing links from publicly available sources.</p>

        <h3>No Ownership or Control Over Content</h3>

        <p>KittenFlix does not own, operate, or manage the servers where the content is stored. All videos, streams, and media are provided by third-party services, primarily from <a href="https://vidsrc.net/">VidSrc</a>. Any legal concerns regarding copyright infringement, DMCA takedown requests, or content-related issues should be directed to the respective hosting provider, such as VidSrc.</p>

        <h3>No Responsibility for Third-Party Content</h3>

        <p>We do not have control over, nor do we endorse, any content made available through the Site. Users should be aware that accessing or streaming copyrighted material without proper authorization may violate copyright laws in their jurisdiction. It is the user's responsibility to ensure they comply with all applicable laws.</p>

        <h3>Fair Use and Compliance</h3>

        <p>KittenFlix operates solely as an indexing and search service, similar to search engines that aggregate publicly available content. We do not facilitate the distribution of copyrighted material, nor do we encourage copyright infringement.</p>

        <h3>Contact</h3>

        <p>For legal inquiries regarding specific content, please contact <a href="https://vidsrc.net/">VidSrc</a> directly, as they are the hosting provider. KittenFlix does not have the ability to remove or modify any content.</p>

        <p>By using this Site, you acknowledge and agree to this disclaimer. If you do not agree with these terms, please discontinue use of KittenFlix immediately.</p>
      </div>
    </div>
  );
};

export default LegalPage;