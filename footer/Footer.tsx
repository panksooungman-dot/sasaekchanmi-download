// =============================================================
//  Footer.tsx
//
//  사색찬미한정식 홈페이지 푸터 — 모바일 앱 다운로드 칸 추가 버전
//
//  ★ 이 파일은 2026-11-08 현재 운영 중인 saseokchanmi.com 의
//    실제 푸터를 그대로 옮긴 것입니다. (10개 페이지 모두 동일)
//
//  변경점은 딱 두 곳입니다.
//    1) grid :  sm:grid-cols-2  →  sm:grid-cols-2 lg:grid-cols-3
//    2) 세 번째 칸(<div>) 추가  ← "모바일 앱" 블록
//
//  나머지는 한 글자도 바꾸지 않았습니다.
// =============================================================

import Image from "next/image";

/** 앱 다운로드 안내 페이지 (GitHub Pages) */
const APP_DOWNLOAD_URL =
  "https://panksooungman-dot.github.io/sasaekchanmi-download/";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-secondary bg-secondary/40">
      {/* 배경 구름 패턴 */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full text-primary opacity-[0.12]"
      >
        <defs>
          <pattern
            id="traditional-cloud-footer"
            width="90"
            height="90"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 18,45 C 18,32 28,22 41,22 C 53,22 63,32 63,45 C 63,55 55,63 45,63 C 39,63 35,59 38,54 C 40,50 44,51 44,55"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#traditional-cloud-footer)"
        />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* ── 변경 1 : 2칸 → (태블릿 2칸 유지) → 와이드 3칸 ── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── 1. 로고 + 소개 (원본 그대로) ── */}
          <div>
            <Image
              src="/images/logo.png"
              alt="사색찬미한정식"
              width={1435}
              height={755}
              className="h-10 w-auto"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              파주 한정식 맛집, 사색찬미한정식
            </p>
          </div>

          {/* ── 2. 오시는 길 (원본 그대로) ── */}
          <div>
            <p className="text-sm font-semibold text-foreground">오시는 길</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              경기 파주시 광탄면 만장산로 363 1층
            </p>
            <div className="mt-2 flex flex-col gap-1 text-sm">
              <a href="tel:0319458004" className="text-primary hover:underline">
                전화 문의
              </a>
              <a
                href="https://pcmap.place.naver.com/restaurant/1882539912/home"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                네이버 지도에서 길찾기
              </a>
              <a
                href="https://blog.naver.com/4s_chanmihanjeongsik"
                target="_blank"
                rel="noreferrer"
                className="text-primary hover:underline"
              >
                네이버 블로그
              </a>
              <span className="text-muted">매일 10:00 ~ 19:30 · 매일 영업</span>
            </div>
          </div>

          {/* ── 3. 모바일 앱 (★ 신규) ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-sm font-semibold text-foreground">모바일 앱</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              메뉴와 예약문의를 앱에서 더 편하게
            </p>

            <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-start">
              {/* QR — PC 화면에서만 표시 */}
              <div className="hidden shrink-0 md:block">
                <Image
                  src="/images/app-qr.png"
                  alt="사색찬미한정식 앱 다운로드 QR 코드"
                  width={160}
                  height={160}
                  className="h-40 w-40 rounded-lg border border-secondary bg-white p-1"
                />
                <p className="mt-2 text-xs text-muted">
                  휴대폰 카메라로 스캔하세요
                </p>
              </div>

              <div>
                <a
                  href={APP_DOWNLOAD_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98]"
                >
                  앱 다운로드
                </a>
                <p className="mt-2 text-xs text-muted">Android 전용 · 약 59MB</p>
              </div>
            </div>
          </div>
        </div>

        {/* 저작권 (원본 그대로) */}
        <p className="mt-12 border-t border-secondary pt-6 text-xs text-muted">
          © 2026 사색찬미한정식. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
