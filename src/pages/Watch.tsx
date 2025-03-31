import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { VideoPlayer } from '../components/VideoPlayer';
import { ServerSwitcher } from '../components/ServerSwitcher';
import { ChevronLeft } from 'lucide-react';

export const Watch = () => {
  const { type, id } = useParams<{ type: string; id: string }>();
  const [baseUrl, setBaseUrl] = useState('https://embed.su/embed');
  const navigate = useNavigate();

  const embedUrl = type === 'movie'
    ? `${baseUrl}/movie/${id}`
    : `${baseUrl}/tv/${id}`;

  return (
    <div className="fixed inset-0 bg-black">
      {/* Home Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 left-4 backdrop-blur-lg bg-white/10 p-3 rounded-xl shadow-lg text-white border border-white/20 hover:bg-white/20 transition-all duration-200 group z-10"
        aria-label="Go home"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      </button>

      <VideoPlayer src={embedUrl} />
      <ServerSwitcher onServerChange={setBaseUrl} />
    </div>
  );
};