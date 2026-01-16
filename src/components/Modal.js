import React from 'react';

export default function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="close">✕</button>
        <h3>작가 소개</h3>
        <p>
         인간 카피바라의 퍼스널 촬영
        </p>
        <ul>
          <li>전문분야: 인물·웨딩·라이프스타일</li>
          <li>연락: hello@chocopie-snap.com</li>
        </ul>
      </div>
    </div>
  );
}
