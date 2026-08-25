import type { OnboardingPageProps } from "./page_types.ts"
import styles from "./OnboardingPages.module.css";

import background from "../assets/onboarding/onboarding_02_background.png"
import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import { OnboardingActions } from "../components/OnboardingActions.tsx";

export function Onboarding02Page({ onNext, onSkip }: OnboardingPageProps) {
  return (
    <ScreenFrame label="온보딩 02" backgroundSrc={background} glowVariant="onboarding_02">
      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 이 페이지의 내용은 일반 div에 담습니다. */}
      <div className={styles.main_area}>
        <SkipButton onSkip={onSkip} />
        {/* 이 화면에서만 쓰는 문장은 굳이 새 컴포넌트로 쪼개지 않고 페이지에 둡니다. */}
        <div className={styles.headline_block}>
          <h1>AI는 같아도,<br /><span>내 핏</span>은<br />다르니까.</h1>
          <p>내가 만드는<br />맞춤형 AI 지식</p>
        </div>
        {/* 현재 첫 번째 안내 화면이며, 누르면 onNext가 실행됩니다. */}
        <OnboardingActions currentPage={1} variant="split" onNext={onNext} />
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}