import { useEffect } from "react"

import splashPhoto from "../assets/onboarding/onboarding_01_background.png"
import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { BrandLogo } from "../components/BrandLogo"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import pageStyles from "./OnboardingPages.module.css"
import styles from "./SplashPage.module.css"

// 움직임 없이 사진만 보여 주는 화면이라 오래 붙잡아 둘 이유가 없습니다.
const SPLASH_DURATION_MS = 2200

interface SplashPageProps {
  readonly onNext: () => void
}

export function SplashPage({ onNext }: SplashPageProps) {
  // 영상이 아니라 정지 화면이므로, 넘어갈 시점을 타이머로 알려 줍니다.
  useEffect(() => {
    const timerId = window.setTimeout(onNext, SPLASH_DURATION_MS)

    // 사용자가 Skip을 눌러 화면이 사라지면 예약된 이동을 취소합니다.
    return () => {
      window.clearTimeout(timerId)
    }
  }, [onNext])

  return (
    <ScreenFrame label="스플래시" glowVariant="splash">
      <img className={styles.splash_photo} src={splashPhoto} alt="" aria-hidden="true" />
      <span className={styles.splash_scrim} aria-hidden="true" />

      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 페이지 안쪽 내용은 일반 div에 담습니다. */}
      <div className={pageStyles.main_area}>
        {/* 기다리지 않고 바로 시작하고 싶은 사용자를 위한 건너뛰기 버튼입니다. */}
        <SkipButton onSkip={onNext} />
        <div className={styles.splash_brand}>
          <BrandLogo variant="onboarding" />
          <span className={styles.splash_tagline}>향을 기억하는 노트</span>
        </div>
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}
