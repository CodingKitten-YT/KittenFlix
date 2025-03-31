import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const SERVERS = [
  { name: 'Embed.su (primary)', url: 'https://embed.su/embed' },
  { name: 'Vidsrc.xyz', url: 'https://vidsrc.xyz/embed' },
  { name: 'Vidsrc.rip', url: 'https://vidsrc.rip/embed' },
  { name: 'Vidsrc.icu', url: 'https://vidsrc.icu/embed' },
];

export const ServerSwitcher = ({ onServerChange }: { onServerChange: (url: string) => void }) => {
  const [selectedServer, setSelectedServer] = useState(SERVERS[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleServerChange = (server: typeof SERVERS[number]) => {
    setSelectedServer(server);
    onServerChange(server.url);
    setIsOpen(false);
  };

  return (
    <div className="absolute top-4 right-4 backdrop-blur-xl bg-gray-900/80 p-2 rounded-xl shadow-2xl border border-gray-600/30 w-52 transition-all duration-300 hover:border-gray-500/50">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-transparent border border-gray-500/40 p-3 rounded-lg cursor-pointer
                   hover:bg-gray-700/40 hover:border-gray-400/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50
                   transition-all duration-200 group"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="truncate text-gray-100 group-hover:text-white text-sm font-medium">
          {selectedServer.name}
        </span>
        <ChevronDown 
          size={18} 
          className={`text-gray-300 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown List */}
      {isOpen && (
        <ul className="absolute top-full mt-2 w-full bg-gray-800/95 backdrop-blur-xl border border-gray-600/30 rounded-lg shadow-xl
                      overflow-hidden animate-fadeIn">
          {SERVERS.map((server) => (
            <li
              key={server.url}
              className="px-3 py-2.5 text-sm text-gray-200 hover:bg-gray-700/60 cursor-pointer transition-all duration-150
                        hover:pl-4 hover:text-white active:bg-gray-600/60 first:rounded-t-lg last:rounded-b-lg
                        border-b border-gray-700/50 last:border-b-0 truncate"
              onClick={() => handleServerChange(server)}
              role="option"
              aria-selected={selectedServer.url === server.url}
            >
              {server.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};