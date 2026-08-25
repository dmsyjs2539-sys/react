import type { MouseEvent } from "react";
import styles from "./components.module.css";

interface SkipButtonProps {
  readonly onSkip: () => void
}

export function SkipButton({ onSkip }: SkipButtonProps) {
  // Skip을 눌렀을 때 바깥 내용 영역의 클릭까지 함께 실행되지 않도록 여기서 멈춥니다.
  const handleSkipClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation()
    onSkip()
  }

  return (
    <button className={styles.skip_button} type="button" onClick={handleSkipClick}>
      Skip
    </button>
  )
}