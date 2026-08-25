//여러 온보딩 화면이 함께 쓰는 약속
//onNext와 onSkip은 부모인 App이 각 화면에 건네주는 이동 버튼 리모컨
export interface OnboardingPageProps {
  readonly onNext: () => void
  readonly onSkip: () => void
}