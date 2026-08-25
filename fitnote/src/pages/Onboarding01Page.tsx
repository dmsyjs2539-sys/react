import type { OnboardingPageProps } from "./page_types.ts"
import type { MouseEvent } from "react";
import styles from "./OnboardingPages.module.css";

import background from "../assets/onboarding/onboarding_01_background.png"
import { BrandLogo } from "../components/BrandLogo.tsx";

import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"


export function Onboarding01Page({ onNext, onSkip }: OnboardingPageProps) {
  //가운데 버튼을 눌렀을 때 부모 내용 영역 까지 클릭이 번지는 것을 막아 한번만 이동
  const handleNextClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onNext()
  }
  return (
    <ScreenFrame label="온보딩 01" backgroundSrc={background} glowVariant="onboarding_01">
      <TopWrap levelsSrc={statusLevels} />
      <div
        className={[styles.main_area, styles.onboarding_01_main].join(" ")}
        data-testid="onboarding_01_content"
        onClick={onNext}
      >
        <SkipButton onSkip={onSkip} />
        {/* 키보드 사용자도 Enter나 Space로 이동할 수 있게 실제 button을 사용합니다. */}
        <button
          className={styles.intro_trigger}
          type="button"
          onClick={handleNextClick}
          aria-label="다음 온보딩으로 이동"
        >
          <BrandLogo variant="onboarding" />
          <span className={styles.intro_description}>내 핏에 맞춰<br />AI를 학습하는 노트</span>
        </button>
      </div>
      <BottomWrap  indicatorSrc={homeIndicator}/>
    </ScreenFrame>
  )
}