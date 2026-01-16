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

  return (
    <>
      <section className="insta-preview">
        <h2 className="section-title">Instagram</h2>

        <div className="insta-grid">
          {images.map((src, idx) => (
            <a
              key={idx}
              onClick={() => {
                setIndex(idx);
                setOpen(true);
              }}
            >
              <img src={src} alt={`insta-${idx}`} />
            </a>
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
