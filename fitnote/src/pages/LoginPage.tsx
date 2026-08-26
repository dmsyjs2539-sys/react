import { useState, type SyntheticEvent } from "react"

import appleLogo from "../assets/auth/apple_logo.svg"
import googleLogo from "../assets/auth/google_logo.svg"
import kakaoLogo from "../assets/auth/kakao_logo.svg"
import background from "../assets/auth/login_background2.png"
import homeIndicator from "../assets/shared/ios_home_indicator_login.svg"
import statusLevels from "../assets/shared/ios_status_levels_login.svg"
import { BottomWrap } from "../components/BottomWrap.tsx"
import { BrandLogo } from "../components/BrandLogo.tsx"
import { LoginField } from "../components/LoginField.tsx"
import { NextButton } from "../components/NextButton.tsx"
import { ScreenFrame } from "../components/ScreenFrame.tsx"
import { SocialLoginButton } from "../components/SocialLoginButton.tsx"
import { TopWrap } from "../components/TopWrap.tsx"
import { DEMO_LOGIN_INPUT } from "./auth_example_values.ts"
import styles from "./LoginPage.module.css"

interface LoginpageProps{
  readonly onJoin : () => void;
  readonly onAuthenticated : () => void;
}

export function LoginPage({onJoin,onAuthenticated}:LoginpageProps){
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  // 처음에는 오류가 없으므로 빈 글자로 시작하고, 틀린 제출 때만 안내를 넣습니다.
  const [error, setError] = useState("")

  // 이메일 옆 보조 버튼은 지운 수업용 입력값을 한 곳의 데모 상수로 다시 채웁니다.
  const handleFillDemoInput = (): void => {
    setEmail(DEMO_LOGIN_INPUT.email)
    setPassword(DEMO_LOGIN_INPUT.password)
    setError("")
  }

  // 수업용 데모 계정과 맞으면 App에게 Home 화면으로 바꿔 달라고 알려 줍니다.
  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>): void => {
    // form의 기본 새로고침을 막아 React가 지금 화면을 이어서 바꿀 수 있게 합니다.
    event.preventDefault()
    const isDemoAccount = email === DEMO_LOGIN_INPUT.email && password === DEMO_LOGIN_INPUT.password

    if (!isDemoAccount) {
      setError("데모 이메일과 비밀번호를 다시 확인해 주세요.")
      return
    }

    setError("")
    onAuthenticated()
  }
  return(
    <ScreenFrame label="로그인" backgroundSrc={background} glowVariant="login">
      <TopWrap levelsSrc={statusLevels} />
      <div className={styles.main_area}>
        <button className={styles.join_button} type="button" onClick={onJoin}>Join</button>
        <h1 className={styles.login_title}><BrandLogo variant="login"></BrandLogo></h1>
        <div className={styles.login_overlay}>
         <form className={styles.login_form} onSubmit={handleSubmit}>
            <LoginField
              id="login_email"
              label="이메일"
              type="email"
              value={email}
              placeholder={DEMO_LOGIN_INPUT.email}
              note="더미텍스트 입력"
              onNoteClick={handleFillDemoInput}
              onChange={setEmail}
            />
            <LoginField id="login_password" label="비밀번호" type="password" value={password} placeholder="scent1234" note="비밀번호를 잊으셨나요?" onChange={setPassword} />
            <NextButton label="Login" variant="login" type="submit" />
            {error === "" ? null : <p className={styles.form_error} role="alert">{error}</p>}
          </form>
          <div className={styles.social_divider}>또는 소셜 로그인</div>
          <div className={styles.social_list}>
            <SocialLoginButton provider="kakao" logoSrc={kakaoLogo} label="Kakao 계정으로 계속하기" />
            <SocialLoginButton provider="google" logoSrc={googleLogo} label="Google 계정으로 계속하기" />
            <SocialLoginButton provider="apple" logoSrc={appleLogo} label="Apple 계정으로 계속하기" />
          </div>
        </div>
      </div>
      <BottomWrap indicatorSrc={homeIndicator}/>
    </ScreenFrame>
  )
}