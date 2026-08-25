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
import { Box } from "../components/Box.tsx";
import organizeImage from "../assets/onboarding/onboarding_03_organize_card_image.png";
import readImage from "../assets/onboarding/onboarding_03_read_card_image.png";
import rememberImage from "../assets/onboarding/onboarding_03_remember_card_image.png"

export function Onboarding03Page({ onNext, onSkip }: OnboardingPageProps) {
  return (
    <ScreenFrame label="온보딩 03" glowVariant="onboarding_03">
      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 이 페이지의 내용은 일반 div에 담습니다. */}
      <div className={styles.main_area}>
        <SkipButton onSkip={onSkip} />
        {/* 이 화면에서만 쓰는 문장은 굳이 새 컴포넌트로 쪼개지 않고 페이지에 둡니다. */}
        <div className={styles.headline_block}>
        <h1>읽고<br/><span>정리</span>하고<br/>기억한다.</h1>
        </div>
        <div className={styles.feature_box_list} aria-label="finote 학습 흐름">
          <Box title="Read" description={"필요한 지식을\n깊이 있게 읽고"} imageSrc={readImage} imageAlt="펼쳐진 책 오브젝트" variant="read" />
          <Box title="Organize" description={"나만의 방식으로\n체계적으로 정리하고"} imageSrc={organizeImage} imageAlt="정리된 지식 큐브 오브젝트" variant="organize" />
          <Box title="Remember" description={"AI가 내 핏에 맞춰\n오래 기억하게 합니다"} imageSrc={rememberImage} imageAlt="기억을 상징하는 유리 구체" variant="remember" />
        </div>
        {/* 현재 첫 번째 안내 화면이며, 누르면 onNext가 실행됩니다. */}
        <OnboardingActions currentPage={2} variant="split" onNext={onNext} />
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}