import styles from "./components.module.css";
interface BottomWrapProps {
  // iPhone 아래쪽 막대 이미지를 부모 화면이 골라서 보냅니다.
  readonly indicatorSrc: string
}

export function BottomWrap({ indicatorSrc }: BottomWrapProps) {
  return (
    // 앱의 진짜 꼬리말이 아니라 휴대폰 아래쪽 모양을 꾸미는 장식이라서 일반 div로 만듭니다.
    <div className={styles.bottom_wrap} aria-hidden="true">
      <img src={indicatorSrc} alt="" aria-hidden="true" />
    </div>
  )
}