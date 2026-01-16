import React, { useState } from 'react';
import '../InstagramPreview.css';
import GalleryModal from './GalleryModal';

const images = [
  '/IMG/3.jpg',
  '/IMG/4.jpg',
  '/IMG/5.jpg',
  '/IMG/6.jpg',
  '/IMG/7.jpg',
  '/IMG/8.jpg',
];

export default function InstagramPreview() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openGallery = (idx) => {
    setIndex(idx);
    setOpen(true);
  };

  return (
    <>
      <section className="insta-preview">
        <h2 className="section-title">Instagram</h2>

        <div className="insta-grid">
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              className="insta-item"
              onClick={() => openGallery(idx)}
              aria-label={`인스타 사진 ${idx + 1} 보기`}
            >
              <img src={src} alt={`insta-${idx}`} />
            </button>
          ))}
        </div>
      </section>

      {open && (
        <GalleryModal
          images={images}
          startIndex={index}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
