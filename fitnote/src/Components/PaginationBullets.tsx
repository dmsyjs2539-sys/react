import activeDot from "../assets/shared/pagination_dot_active.svg";
import inactiveDot from "../assets/shared/pagination_dot_inactive.svg";
import styles from "./components.module.css";

interface PaginationBulletsProps {
  //안내 화면은 세장뿐이므로 1,2,3 외의 숫자는 받을 수 없습니다
  readonly currentPage: 1 | 2 | 3
}

export function PaginationBullets({ currentPage }: PaginationBulletsProps) {
  return (
    <div className={styles.pagination_bullets} role="status" aria-label={`온보딩 
    ${String(currentPage)}/3`}>
      {[1, 2, 3].map((pageNumber) => {
        // 지금 보고 있는 페이지의 점만 활성 그림으로 바꿉니다.
        const isCurrent = pageNumber === currentPage

        return (
          <span
            className={styles.pagination_bullet}
            key={pageNumber}
            aria-label={isCurrent ? `현재 페이지 ${String(pageNumber)}` : `페이지 ${String(pageNumber)}`}
            // aria-current는 눈으로 점을 구분하기 어려운 사용자에게도 현재 위치를 알려 줍니다.
            aria-current={isCurrent ? "step" : undefined}
          >
            <img src={isCurrent ? activeDot : inactiveDot} alt="" aria-hidden="true" />
          </span>
        )
      })}
    </div>
  )
}