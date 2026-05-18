import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import path from 'path';

test.describe('웹 접근성 자동화 테스트 (Web Accessibility Automated Testing)', () => {
  
  test('메인 페이지 웹 접근성 검증 및 위반 리포트 추출', async ({ page }) => {
    // 1. 설정된 baseURL(http://localhost:5173)을 기반으로 메인 페이지로 이동합니다.
    await page.goto('/');

    // 2. 메인 페이지 콘텐츠가 로드될 때까지 대기합니다.
    await page.waitForLoadState('domcontentloaded');

    // 3. axe-core 스캐너를 생성하여 현재 페이지의 접근성 요소를 분석합니다.
    const accessibilityScanResults = await new AxeBuilder({ page })
      // 전체 표준 규격(WCAG 2.0/2.1/2.2 AA, KWCAG 등)에 맞춰 검사를 유연하게 수행하도록 태그 설정 가능합니다.
      .analyze();

    const violations = accessibilityScanResults.violations;

    // 4. 위반 사항이 발견되면 소스 코드를 수정하기 전에 리포트 파일로 먼저 추출합니다.
    if (violations.length > 0) {
      const reportPath = path.resolve(process.cwd(), 'accessibility-violations.json');
      
      // JSON 포맷을 예쁘게 정렬하여 파일로 저장합니다.
      fs.writeFileSync(
        reportPath, 
        JSON.stringify(violations, null, 2), 
        'utf-8'
      );
      
      console.log(`\n⚠️ [웹 접근성 위반 감지] 총 ${violations.length}개의 위반 사항이 발견되었습니다.`);
      console.log(`📄 상세 에러 리포트 파일이 추출되었습니다: ${reportPath}\n`);
    }

    // 5. 최종적으로 접근성 위반 목록이 비어있는지 검증하여 테스트 성공 여부를 결정합니다.
    expect(violations).toEqual([]);
  });

});
