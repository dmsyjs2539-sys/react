import { useEffect } from "react"
import type { CSSProperties } from "react"

import splashPhoto from "../assets/onboarding/onboarding_01_background.png"
import cherry from "../assets/shared/cherry.svg"
import homeIndicator from "../assets/shared/ios_home_indicator.svg"
import statusLevels from "../assets/shared/ios_status_levels.svg"
import { BottomWrap } from "../components/BottomWrap"
import { BrandLogo } from "../components/BrandLogo"
import { ScreenFrame } from "../components/ScreenFrame"
import { SkipButton } from "../components/SkipButton"
import { TopWrap } from "../components/TopWrap"
import pageStyles from "./OnboardingPages.module.css"
import styles from "./SplashPage.module.css"

// 체리가 다 떨어지고 로고를 읽을 시간까지 더한 길이입니다.
const SPLASH_DURATION_MS = 4200

/* 체리 한 알이 어디서 떨어져 어디에 앉을지 미리 정해 둡니다.
   무작위로 만들면 열 때마다 화면이 달라져 어색하므로 값을 고정합니다. */
interface FallingCherry {
  readonly id: number
  readonly left: string
  readonly size: string
  readonly land: string
  readonly drift: string
  readonly spinFrom: string
  readonly spinTo: string
  readonly delay: string
  readonly fall: string
}

const FALLING_CHERRIES: readonly FallingCherry[] = [
  { id: 1, left: "14%", size: "38px", land: "64dvh", drift: "10px", spinFrom: "-24deg", spinTo: "14deg", delay: "0s", fall: "1.5s" },
  { id: 2, left: "68%", size: "46px", land: "70dvh", drift: "-16px", spinFrom: "18deg", spinTo: "-12deg", delay: "0.22s", fall: "1.7s" },
  { id: 3, left: "40%", size: "30px", land: "58dvh", drift: "14px", spinFrom: "-8deg", spinTo: "22deg", delay: "0.48s", fall: "1.4s" },
  { id: 4, left: "84%", size: "34px", land: "76dvh", drift: "-10px", spinFrom: "26deg", spinTo: "-6deg", delay: "0.700s", fall: "1.6s" },
  { id: 5, left: "27%", size: "42px", land: "80dvh", drift: "-8px", spinFrom: "-16deg", spinTo: "8deg", delay: "0.94s", fall: "1.55s" },
  { id: 6, left: "56%", size: "26px", land: "86dvh", drift: "12px", spinFrom: "10deg", spinTo: "-18deg", delay: "1.18s", fall: "1.45s" },
]

interface SplashPageProps {
  readonly onNext: () => void
}

export function SplashPage({ onNext }: SplashPageProps) {
  // 영상 대신 애니메이션을 쓰므로, 끝나는 시점을 타이머로 알려 줍니다.
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

      {/* 떨어지는 체리는 장식이므로 화면 읽기 프로그램에는 알리지 않습니다. */}
      <div className={styles.cherry_layer} aria-hidden="true">
        {FALLING_CHERRIES.map((item) => (
          <img
            className={styles.cherry}
            key={item.id}
            src={cherry}
            alt=""
            style={{
              left: item.left,
              "--size": item.size,
              "--land": item.land,
              "--drift": item.drift,
              "--spin_from": item.spinFrom,
              "--spin_to": item.spinTo,
              "--delay": item.delay,
              "--fall": item.fall,
            } as CSSProperties}
          />
        ))}
      </div>

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
