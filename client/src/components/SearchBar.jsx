import React, { useState, useEffect, useRef } from 'react';

const defaultIndex = [
  { id: 'end-user-services', title: 'End User Services', category: 'Services', keywords: 'desktop support workspace IT support' },
  { id: 'cloud-migration', title: 'Cloud Migration & Strategy', category: 'Services', keywords: 'AWS Azure cloud deployment DevOps' },
  { id: 'soc-managed-detection', title: 'SOC & Managed Detection', category: 'Services', keywords: 'SOC security threat protection risk' },
  { id: 'financial-services', title: 'Financial Services', category: 'Industries', keywords: 'banking fintech compliance' },
  { id: 'healthcare', title: 'Healthcare', category: 'Industries', keywords: 'medical HIPAA EHR health analytics' },
  { id: 'about-teceze', title: 'About Teceze', category: 'Company', keywords: 'company info about leadership' },
];

export default function SearchBar({ onSelectResult, theme }) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const wrapperRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = defaultIndex.filter(item => 
      item.title.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.keywords.toLowerCase().includes(q)
    ).slice(0, 6);

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id) => {
    if (onSelectResult) onSelectResult(id);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div className="relative flex items-center">
        <span className="absolute left-2.5 text-slate-400 text-[10px]">🔍</span>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder="Search site..."
          className={`w-full pl-7 pr-6 py-1 rounded-full text-xs font-normal outline-none transition-all border ${
            isDark 
              ? 'bg-slate-900/90 text-slate-100 border-slate-700/80 focus:border-cyan-400' 
              : 'bg-white text-slate-900 border-slate-300 focus:border-cyan-600'
          }`}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
            }}
            className="absolute right-2 text-slate-400 hover:text-slate-200 text-[10px]"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && query.trim() !== '' && (
        <div className={`absolute left-0 mt-2 w-64 rounded-xl border shadow-2xl overflow-hidden z-50 ${
          isDark ? 'bg-[#070E1B] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          {results.length > 0 ? (
            <div className="max-h-60 overflow-y-auto divide-y divide-slate-800/40">
              {results.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelect(item.id)}
                  className={`p-2.5 cursor-pointer transition-colors flex items-center justify-between gap-2 ${
                    isDark ? 'hover:bg-cyan-500/10' : 'hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <div className="text-xs font-bold text-cyan-400">{item.title}</div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">{item.keywords}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-3 text-center text-xs text-slate-400">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}