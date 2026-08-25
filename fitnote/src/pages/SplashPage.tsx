import { useEffect, useState } from "react"

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

/* 인트로 영상은 public 폴더에 그대로 두고 주소로 불러옵니다.
   import를 쓰지 않으므로 파일이 아직 없어도 앱은 정상으로 뜹니다. */
const SPLASH_VIDEO_SRC = "/splash_intro.mp4"

// 영상 없이 사진만 보여 줄 때 머무는 시간입니다.
const PHOTO_DURATION_MS = 2200

// 영상이 끝나지도, 실패하지도 않고 멈춰 버릴 때를 대비한 최대 대기 시간입니다.
const VIDEO_TIMEOUT_MS = 12000

interface SplashPageProps {
  readonly onNext: () => void
}

export function SplashPage({ onNext }: SplashPageProps) {
  // 영상 파일이 없거나 재생에 실패하면 사진 화면으로 되돌립니다.
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    // 사진 화면은 정해진 시간이 지나면, 영상 화면은 끝날 때 넘어갑니다.
    // 영상이 멈춰 버리는 경우에도 갇히지 않도록 넉넉한 시간을 함께 겁니다.
    const waitMs = videoFailed ? PHOTO_DURATION_MS : VIDEO_TIMEOUT_MS
    const timerId = window.setTimeout(onNext, waitMs)

    // 화면이 사라지면 예약된 이동을 취소합니다.
    return () => {
      window.clearTimeout(timerId)
    }
  }, [onNext, videoFailed])

  return (
    <ScreenFrame
      label="스플래시"
      glowVariant="splash"
      videoSrc={videoFailed ? undefined : SPLASH_VIDEO_SRC}
      videoTestId="splash-video"
      onVideoEnded={onNext}
      onVideoError={() => {
        setVideoFailed(true)
      }}
      backgroundSrc={videoFailed ? splashPhoto : undefined}
    >
      {/* 사진으로 되돌아간 경우에만 로고를 얹습니다.
          영상에는 보통 로고가 이미 들어 있어 겹치면 지저분해집니다. */}
      {videoFailed ? <span className={styles.splash_scrim} aria-hidden="true" /> : null}

      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 페이지 안쪽 내용은 일반 div에 담습니다. */}
      <div className={pageStyles.main_area}>
        {/* 기다리지 않고 바로 시작하고 싶은 사용자를 위한 건너뛰기 버튼입니다. */}
        <SkipButton onSkip={onNext} />
        {videoFailed ? (
          <div className={styles.splash_brand}>
            <BrandLogo variant="onboarding" />
            <span className={styles.splash_tagline}>향을 기억하는 노트</span>
          </div>
        ) : null}
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}
