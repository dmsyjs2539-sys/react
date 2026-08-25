import styles from "./ScreenFrame.module.css";
import type { ReactNode } from "react";

interface ScreenFrameProps {
  readonly label: string
  // children은 액자 안에 끼워 넣을 상태바, 페이지 내용, 홈 표시줄 같은 화면 조각입니다.
  readonly children: ReactNode
  // 물음표가 붙은 배경은 화면에 따라 없을 수도 있습니다.
  readonly backgroundSrc?: string | undefined
  readonly videoSrc?: string | undefined
  readonly videoTestId?: string | undefined
  readonly onVideoEnded?: (() => void) | undefined
  readonly onVideoError?: (() => void) | undefined
  readonly glowVariant: "onboarding_01" | "onboarding_02" | "onboarding_03" | "onboarding_04" | "login" | "splash"
}
export function ScreenFrame({
  label,
  children,
  backgroundSrc,
  videoSrc,
  videoTestId,
  onVideoEnded,
  onVideoError,
  glowVariant
}: ScreenFrameProps) {
  return (
    <section className={styles.screen_frame} aria-label={label} data-screen={glowVariant}>
      {videoSrc === undefined ? null : (
        <video
          className={styles.background_video}
          data-testid={videoTestId}
          src={videoSrc}
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnded}
          onError={onVideoError}
        />
      )}
      {backgroundSrc === undefined ? null : (
        <img
          className={styles[glowVariant === "login" ? "background_image_blurred" : "background_image"]}
          src={backgroundSrc}
          alt=""
          aria-hidden="true"
        />
      )}
      {/* ambient_glow는 눌러야 하는 내용이 아닌 은은한 빛 장식입니다. */}
      <span className={styles.ambient_glow} aria-hidden="true" />
      {children}
    </section>
  )
}