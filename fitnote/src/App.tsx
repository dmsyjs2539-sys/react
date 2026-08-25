import { useState } from 'react'
import { SplashPage } from './pages/SplashPage'
import { Onboarding01Page } from './pages/Onboarding01Page'
import { Onboarding02Page } from './pages/Onboarding02Page'
import { Onboarding03Page } from './pages/Onboarding03Page'
import { Onboarding04Page } from './pages/Onboarding04Page'
import { LoginPage } from './pages/LoginPage'

type CurrentPage = "splash" | "onboarding_01" | "onboarding_02" | "onboarding_03" | "onboarding_04" | "login"

function App() {
  // state는 앱이 기억하는 값입니다. 처음에는 영상이 나오는 splash 화면을 기억합니다.
  const [currentPage, setCurrentPage] = useState<CurrentPage>("splash");
  //여러 화면의 skip 버튼이 똑같이 로그인으로 가므로, 한 함수를 함께 사용
  const handleSkip = (): void => {
    setCurrentPage('login');
  }
  return (
    <main className='app_shell' aria-label='fitnote workspace'>
      {currentPage === 'splash' ? (
        <SplashPage onNext={() => setCurrentPage('onboarding_01')} />) : null}
      {currentPage === 'onboarding_01' ? (
        <Onboarding01Page onNext={() => setCurrentPage('onboarding_02')} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_02' ? (
        <Onboarding02Page onNext={() => setCurrentPage('onboarding_03')} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_03' ? (
        <Onboarding03Page onNext={() => setCurrentPage('onboarding_04')} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_04' ? (
        <Onboarding04Page onNext={() => setCurrentPage('login')} onSkip={handleSkip} />) : null}
       {currentPage === 'login' ? <LoginPage /> : null} 
    </main>
  )
}

export default App
