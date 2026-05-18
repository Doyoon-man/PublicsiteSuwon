import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright 설정 파일
 * 웹 접근성 자동화 테스트에 필요한 기본 설정을 정의합니다.
 */
export default defineConfig({
  // 테스트 파일들이 위치한 폴더
  testDir: './tests',
  
  // 개별 테스트들의 기본 제한 시간 (30초)
  timeout: 30000,
  
  // 단일 어서션(expect) 제한 시간 (5초)
  expect: {
    timeout: 5000
  },

  // 병렬 실행 여부
  fullyParallel: true,
  
  // CI 환경이 아닌 로컬에서는 전역 테스트 제한 방지
  forbidOnly: !!process.env.CI,
  
  // 실패 시 재시도 횟수
  retries: process.env.CI ? 2 : 0,
  
  // 테스트 실행에 사용할 워커 수
  workers: process.env.CI ? 1 : undefined,
  
  // 결과 리포트 형식 (로컬 실행 시 브라우저에서 볼 수 있는 HTML 리포트 생성)
  reporter: 'html',

  use: {
    // 테스트 대상 기본 URL (로컬 Vite 서버)
    baseURL: 'http://localhost:5173',

    // 실패한 테스트에 대해서만 스크린샷/트레이스 기록
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },

  // 테스트를 실행할 브라우저 프로젝트 설정
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // 테스트 실행 전에 로컬 웹 서버가 꺼져있다면 실행하도록 설정 (이미 켜져있다면 기존 서버 재사용)
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
    timeout: 120000,
  },
});
