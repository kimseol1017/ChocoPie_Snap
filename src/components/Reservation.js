import React from 'react';

export default function Reservation() {
  return (
    <section className="reservation" id="reservation" >
      <h2 className="section-title">촬영 예약 안내</h2>

      <div className="reservation-card">
        <div className="price-item">
          <h3>📱 아이폰 스냅</h3>
          <p>
            기본 최소 촬영시간 <strong>1시간</strong><br />
            촬영 비용 <strong>40,000원 / 1시간</strong>
          </p>
        </div>

        <div className="price-item">
          <h3>📷 디카 스냅</h3>
          <p>
            기본 최소 촬영시간 <strong>1시간</strong><br />
            촬영 비용 <strong>55,000원 / 1시간</strong><br />
            <span className="highlight">사진 꾸미기 무료 제공</span>
          </p>
        </div>

        <div className="price-item">
          <h3>🎞 카메라 스냅 (대표 촬영)</h3>
          <p>
            기본 최소 촬영시간 <strong>50분</strong><br />
            촬영 비용 <strong>100,000원 / 50분</strong><br />
            <span className="highlight">보정본 3장 기본 제공</span>
          </p>
        </div>

        <div className="price-item sub">
          <p>
            * 실장 촬영 희망 시<br />
            <strong>50분 90,000원</strong><br />
            <small>(보정은 초코파이 대표가 직접 진행합니다)</small>
          </p>
        </div>

        <div className="reservation-guide">
          <p>
            촬영 진행을 원하실 경우<br />
            <strong>
              아이폰 / 디카 / 카메라(대표촬영·실장촬영)
            </strong>{' '}
            중 택 1 후
          </p>
          <p className="dm-text">
            <strong>“예약양식받기”</strong> 라고 보내주시면<br />
            예약 양식 및 간단한 안내를 보내드립니다 ☺️
          </p>
        </div>

        <a
          href="https://www.instagram.com/chocopie_snap/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-solid insta-btn"
        >
          인스타그램으로 예약 문의
        </a>
      </div>
    </section>
  );
}
