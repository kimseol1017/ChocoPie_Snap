import React from 'react';

export default function Services() {
  return (
    <section id="services" className="about">
      <div className="about-card">
        <h2 className="about-title">촬영 서비스</h2>

        <ul className="service-list" >
          <li>
            <strong>인스타그램 스냅 촬영</strong>
            <span>자연스러운 인물 · 일상 · 감성 피드용 사진</span>
          </li>

          <li>
            <strong>프로필 사진 촬영</strong>
            <span>SNS · 개인 브랜딩 · 소개용 프로필</span>
          </li>

          <li>
            <strong>협찬 · 상업 촬영</strong>
            <span>브랜드, 제품, 쇼핑몰 콘텐츠</span>
          </li>

          <li>
            <strong>팝업 · 이벤트 촬영</strong>
            <span>현장 분위기를 담는 기록형 스냅</span>
          </li>

          <li>
            <strong>야외 촬영</strong>
            <span>자연광과 공간을 살린 로케이션 촬영</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
