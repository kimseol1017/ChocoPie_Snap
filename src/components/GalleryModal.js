import React, { useState } from 'react';

export default function GalleryModal({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () =>
    setCurrent((current - 1 + images.length) % images.length);

  const next = () =>
    setCurrent((current + 1) % images.length);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <img src={images[current]} alt="" className="gallery-img" />

        <div className="gallery-controls">
          <button onClick={prev}>‹</button>
          <span>{current + 1} / {images.length}</span>
          <button onClick={next}>›</button>
        </div>
      </div>
    </div>
  );
}
