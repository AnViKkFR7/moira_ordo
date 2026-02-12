import { useEffect } from 'react'

export default function YoutubePopup({ videoId, open, onClose }) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="youtube-popup-overlay" onClick={onClose}>
      <div className="youtube-popup-content" onClick={e => e.stopPropagation()}>
        <button className="youtube-popup-close" onClick={onClose}>&times;</button>
        <div className="youtube-popup-video-wrapper">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
