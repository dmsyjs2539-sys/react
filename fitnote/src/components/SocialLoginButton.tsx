import styles from './FormComponents.module.css';

interface SocialLoginButtonProps {
  // provider는 CSS가 카카오, 구글, 애플 색을 고를 때 쓰는 이름표입니다.
  readonly provider: "kakao" | "google" | "apple"
  readonly logoSrc: string
  readonly label: string
}

export function SocialLoginButton({ provider, logoSrc, label }: SocialLoginButtonProps) {
  return (
    <button className={styles.social_login_button} data-provider={provider} type="button">
      {/* 옆의 글자가 회사 이름을 알려 주므로 로고 그림은 장식으로 처리합니다. */}
      <img src={logoSrc} alt="" aria-hidden="true" />
      <span>{label}</span>
    </button>
  )
}