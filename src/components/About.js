import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about">
      <div className="about-card">
        <h2 className="about-title">작가 소개</h2>

        <p className="about-text">
          초코파이 작가는 아이폰과 디지털 카메라를 활용해
          <strong> 자연스럽고 감각적인 순간</strong>을 기록하는
          스냅 촬영 전문 포토그래퍼입니다.
        </p>

        <p className="about-text">
          일상 속의 우연한 표정, 거리의 분위기, 사람과 공간이 만들어내는
          찰나의 감정을 담아내는 데 집중합니다.
          인위적인 연출보다는 <strong>그 순간의 공기와 분위기</strong>를
          사진에 남기고자 합니다.
        </p>

        <p className="about-text">
          인스타그램 콘텐츠 촬영, 프로필 사진, 협찬 및 브랜드 촬영,
          팝업스토어와 행사 현장 스냅 등
          <strong> 다양한 촬영 경험</strong>을 바탕으로
          목적에 맞는 이미지를 제공합니다.
        </p>
      </div>
    </section>
  );
});

export default About;
