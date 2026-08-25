import { useEffect } from "react"
import type { CSSProperties } from "react"

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

// 체리가 다 떨어지고 로고를 읽을 시간까지 더한 길이입니다.
const SPLASH_DURATION_MS = 4200

// 배경 사진의 원본 크기입니다. 체리를 오려낼 위치를 이 좌표계로 적습니다.
const PHOTO_WIDTH = 736
const PHOTO_HEIGHT = 1104

/* 떨어지는 체리는 그림이 아니라 배경 사진에서 실제로 오려낸 조각입니다.
   x, y, r은 사진 속 체리 한 알의 중심과 반지름(원본 픽셀)이고,
   size는 화면에 보여 줄 지름입니다. 나머지는 낙하 연출 값입니다. */
interface CherryCrop {
  readonly id: number
  readonly x: number
  readonly y: number
  readonly r: number
  readonly size: number
  readonly left: string
  readonly land: string
  readonly drift: string
  readonly spinFrom: string
  readonly spinTo: string
  readonly delay: string
  readonly fall: string
}

const CHERRY_CROPS: readonly CherryCrop[] = [
  { id: 1, x: 329, y: 588, r: 49, size: 44, left: "13%", land: "63dvh", drift: "10px", spinFrom: "-24deg", spinTo: "14deg", delay: "0s", fall: "1.5s" },
  { id: 2, x: 390, y: 999, r: 50, size: 47, left: "66%", land: "70dvh", drift: "-16px", spinFrom: "18deg", spinTo: "-12deg", delay: "0.22s", fall: "1.7s" },
  { id: 3, x: 401, y: 310, r: 40, size: 33, left: "39%", land: "57dvh", drift: "14px", spinFrom: "-8deg", spinTo: "22deg", delay: "0.46s", fall: "1.4s" },
  { id: 4, x: 604, y: 442, r: 39, size: 38, left: "82%", land: "76dvh", drift: "-10px", spinFrom: "26deg", spinTo: "-6deg", delay: "0.70s", fall: "1.6s" },
  { id: 5, x: 94, y: 935, r: 40, size: 30, left: "26%", land: "80dvh", drift: "-8px", spinFrom: "-16deg", spinTo: "8deg", delay: "0.94s", fall: "1.55s" },
  { id: 6, x: 592, y: 947, r: 35, size: 27, left: "54%", land: "86dvh", drift: "12px", spinFrom: "10deg", spinTo: "-18deg", delay: "1.18s", fall: "1.45s" },
]

/* 사진을 size에 맞게 줄인 뒤, 원하는 체리가 원 안에 들어오도록 밀어 줍니다.
   원형으로 잘라 내는 일은 CSS의 border-radius가 맡습니다. */
function cropStyle(crop: CherryCrop): CSSProperties {
  const scale = crop.size / (crop.r * 2)

  return {
    left: crop.left,
    width: `${String(crop.size)}px`,
    height: `${String(crop.size)}px`,
    backgroundImage: `url(${splashPhoto})`,
    backgroundSize: `${String(PHOTO_WIDTH * scale)}px ${String(PHOTO_HEIGHT * scale)}px`,
    backgroundPosition: `${String(-(crop.x - crop.r) * scale)}px ${String(-(crop.y - crop.r) * scale)}px`,
    "--land": crop.land,
    "--drift": crop.drift,
    "--spin_from": crop.spinFrom,
    "--spin_to": crop.spinTo,
    "--delay": crop.delay,
    "--fall": crop.fall,
  } as CSSProperties
}

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
        {CHERRY_CROPS.map((crop) => (
          <span className={styles.cherry} key={crop.id} style={cropStyle(crop)} />
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
