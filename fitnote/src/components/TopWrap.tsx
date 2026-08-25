import styles from './components.module.css'

interface TopWrapProps {
  // 화면마다 상태 아이콘 그림이 달라질 수 있어 부모가 파일 주소를 건넵니다.
  readonly levelsSrc: string
}

export function TopWrap({ levelsSrc }: TopWrapProps) {
  return (
    // 앱의 진짜 머리말이 아니라 휴대폰 모양을 꾸미는 그림이라서 일반 div로 만듭니다.
    <div className={styles.top_wrap} aria-hidden="true">
      <span className={styles.status_time}>9:41</span>
      {/* 모양만 꾸미는 요소는 화면 읽기 프로그램이 읽지 않도록 숨깁니다. */}
      <span className={styles.dynamic_island} aria-hidden="true" />
      <img className={styles.status_levels} src={levelsSrc} alt="" aria-hidden="true" />
    </div>
  )
}