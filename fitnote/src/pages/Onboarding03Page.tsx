import type { OnboardingPageProps } from "./page_types.ts"
import styles from "./OnboardingPages.module.css";

import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import { OnboardingActions } from "../components/OnboardingActions.tsx";
import { Box } from "../components/Box.tsx";
import organizeImage from "../assets/onboarding/onboarding_02_background.png";
import readImage from "../assets/onboarding/onboarding_01_background.png";
import rememberImage from "../assets/onboarding/onboarding_04_background.png"

export function Onboarding03Page({ onNext, onSkip }: OnboardingPageProps) {
  return (
    <ScreenFrame label="온보딩 03" glowVariant="onboarding_03">
      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 이 페이지의 내용은 일반 div에 담습니다. */}
      <div className={styles.main_area}>
        <SkipButton onSkip={onSkip} />
        {/* 이 화면에서만 쓰는 문장은 굳이 새 컴포넌트로 쪼개지 않고 페이지에 둡니다. */}
        <div className={styles.headline_block}>
        <h1>맡고<br/><span>기록</span>하고<br/>기억한다.</h1>
        </div>
        <div className={styles.feature_box_list} aria-label="ScentNote 기록 흐름">
          <Box title="Discover" description={"새로운 향을\n깊이 있게 맡고"} imageSrc={readImage} imageAlt="TOM FORD LOST CHERRY 향수병 사진" variant="read" />
          <Box title="Record" description={"나만의 언어로\n향을 기록하고"} imageSrc={organizeImage} imageAlt="SWEET CHERRY 향수병 사진" variant="organize" />
          <Box title="Remember" description={"내 취향에 맞춰\n오래 기억하게 합니다"} imageSrc={rememberImage} imageAlt="midnight cherry 향수병 사진" variant="remember" />
        </div>
        {/* 현재 첫 번째 안내 화면이며, 누르면 onNext가 실행됩니다. */}
        <OnboardingActions currentPage={2} variant="split" onNext={onNext} />
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}