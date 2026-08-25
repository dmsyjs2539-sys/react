import type { OnboardingPageProps } from "./page_types.ts";
import styles from "./OnboardingPages.module.css";
import background from "../assets/onboarding/onboarding_04_background.png"

import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { TopWrap } from "../components/TopWrap"
import { OnboardingActions } from "../components/OnboardingActions.tsx";

interface Onboarding04PageProps{
  readonly onNext : () => void;
}

export function Onboarding04Page({ onNext } :Onboarding04PageProps){
  return (
    <ScreenFrame label="온보딩 04" backgroundSrc={background} glowVariant="onboarding_04">
      <TopWrap levelsSrc={statusLevels} />
      <div className={styles.main_area}>
        <div className={styles.final_copy}>
          <h1>Every Note<br />becomes<br /><span>your own AI</span></h1>
          <p>당신의 노트가 쌓일수록<br />더 정확히, 더 깊이,<br />더 나답게 AI가 완성됩니다.</p>
        </div>
          {/* 현재 첫 번째 안내 화면이며, 누르면 onNext가 실행됩니다. */}
        <OnboardingActions currentPage={3} variant="stacked" onNext={onNext} />
      </div>
      <BottomWrap  indicatorSrc={homeIndicator}/>
    </ScreenFrame>
  )
}