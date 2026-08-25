import styles from "./components.module.css";
import { NextButton } from "./NextButton";
import { PaginationBullets } from "./PaginationBullets";

interface OnboardingActionsProps{
  readonly currentPage :1|2|3
  readonly variant: 'split' | 'stacked'
  readonly onNext :() =>void
}
export function OnboardingActions({ currentPage, variant, onNext }: OnboardingActionsProps) {
  // 마지막 화면만 Start라고 읽고, 나머지는 다음 화면으로 이동한다고 읽습니다.
  const label = variant === "stacked" ? "Start" : "다음 온보딩으로 이동"

  return (
    // 페이지 점과 다음 버튼을 한 묶음으로 만들어 여러 화면에서 함께 씁니다.
    <div className={styles.onboarding_actions} data-variant={variant}>
      <PaginationBullets currentPage={currentPage} />
      <NextButton label={label} variant={variant === "stacked" ? "wide" : "circle"} onClick={onNext} />
    </div>
  )
}