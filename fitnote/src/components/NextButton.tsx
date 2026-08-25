import nextArrow from "../assets/shared/next_arrow.svg";
import nextArrow04 from "../assets/shared/next_arrow_04.svg";
import nextArrowLogin from "../assets/shared/next_arrow_login.svg";
import styles from "./components.module.css";

interface NextButtonProps {
  readonly label: string
  // variant는 원형, 넓은 시작 버튼, 로그인 버튼 중 하나만 고르게 합니다.
  readonly variant: "circle" | "wide" | "login"
  // 물음표가 붙은 값은 필요할 때만 받을 수 있습니다.
  readonly type?: "button" | "submit"
  readonly onClick?: (() => void) | undefined
}

export function NextButton({ label, variant, type = "button", onClick }: NextButtonProps) {
  // 버튼 모양에 맞춰 Figma에서 가져온 화살표 그림을 고릅니다.
  const arrowSrc = variant === "wide" ? nextArrow04 : variant === "login" ? nextArrowLogin : nextArrow
  return(
  <button
      className={styles.next_button}
      type={type}
      data-variant={variant}
      onClick={onClick}
      aria-label={label}
    >
      {/* 원형 버튼의 글자는 눈에는 숨겨도 화면 읽기 프로그램은 읽을 수 있습니다. */}
      <span className={variant === "circle" ? styles.visually_hidden : undefined}>{label}</span>
      <img src={arrowSrc} alt="" aria-hidden="true" />
    </button>
  )}