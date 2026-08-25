import styles from "./components.module.css";
interface BrandLogoProps {
  // 같은 FitNote 글자도 온보딩과 로그인에서 크기와 색이 달라집니다.
  readonly variant: "onboarding" | "login"
}

export function BrandLogo({ variant }: BrandLogoProps) {
  // data-variant 값을 CSS가 읽고 알맞은 로고 모양을 골라 줍니다.
  return <span className={styles.brand_logo} data-variant={variant}>FitNote</span>
}