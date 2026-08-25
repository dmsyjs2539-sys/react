import onboardingVideo from "../assets/vid/on.mp4"
import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import styles from "./OnboardingPages.module.css";

interface SplashPageProps {
  readonly onNext: () => void
}
export function SplashPage({onNext}:SplashPageProps){
  return(
    <ScreenFrame
      label="스플래시"
      glowVariant="splash"
      videoSrc={onboardingVideo}
      videoTestId="splash-video"
      onVideoEnded={onNext}
      onVideoError={onNext}
    >
      <TopWrap levelsSrc={statusLevels} />
      {/* 앱의 main은 App이 맡으므로 페이지 안쪽 내용은 일반 div에 담습니다. */}
      <div className={styles.main_area}>
        {/* 기다리지 않고 바로 시작하고 싶은 사용자를 위한 건너뛰기 버튼입니다. */}
        <SkipButton onSkip={onNext} />
      </div>
      <BottomWrap indicatorSrc={homeIndicator} />
    </ScreenFrame>
  )
}