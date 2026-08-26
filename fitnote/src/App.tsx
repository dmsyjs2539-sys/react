import { useState, useEffect,useRef } from 'react'
import { SplashPage } from './pages/SplashPage'
import { Onboarding01Page } from './pages/Onboarding01Page'
import { Onboarding02Page } from './pages/Onboarding02Page'
import { Onboarding03Page } from './pages/Onboarding03Page'
import { Onboarding04Page } from './pages/Onboarding04Page'
import { LoginPage } from './pages/LoginPage'

type CurrentPage = "splash" | "onboarding_01" | "onboarding_02" | "onboarding_03" | "onboarding_04" | "login" |"signup" | "home"

interface AppRoute{
  readonly page:CurrentPage
}
function getRouteFromHash():AppRoute{
  switch(window.location.hash){
    case'#onboarding-01': return{page:'onboarding_01'}
    case'#onboarding-02': return{page:'onboarding_02'}
    case'#onboarding-03': return{page:'onboarding_03'}
    case'#onboarding-04': return{page:'onboarding_04'}
    case'#login': return{page:'login'}
    case'#signup':return{page:'signup'}
    case'#home':return{page:'home'}
    default : return{page:'splash'}
  }
}

function getHashForRoute(page:CurrentPage):string{
  switch(page){
    case'onboarding_01': return '#onboarding-01'
    case'onboarding_02': return '#onboarding-02'
    case'onboarding_03': return '#onboarding-03'
    case'onboarding_04': return '#onboarding-04'
    case'login': return '#login'
    case 'signup':return '#signup'
    case 'home':return '#home'
    default : return '#splash'
  }
}

export function App() {
  const initialRoute = getRouteFromHash();
  const [currentPage, setCurrentPage] = useState<CurrentPage>(initialRoute.page);
  const [workspace,setWorkspace] = useState(null);
  const [isDrawerOpen,setisDrawerOpen] = useState(false);
  const [isNotificationOpen,setisNotificationOpen] = useState(false);
  const previousRouteRef = useRef<AppRoute|null>(null);
  const drawerTriggerRef = useRef<HTMLBRElement|null>(null);

  const handleRouteChange = (route:AppRoute):void =>{
    setCurrentPage(route.page);

    setisDrawerOpen(false);
    setisNotificationOpen(false);

  }
  const handleNavigate = (page:CurrentPage):void => {
    previousRouteRef.current = {page:currentPage}
    const hash = getHashForRoute(page);
    if(window.location.hash !==hash){window.history.pushState({},'',hash)}
    handleRouteChange({page})
  }
  const handleAuthenticated = ():void=> {
    handleNavigate('home')
  }
  //여러 화면의 skip 버튼이 똑같이 로그인으로 가므로, 한 함수를 함께 사용
  const handleSkip = (): void => {handleNavigate('login');}



  return (
    <main className='app_shell' aria-label='ScentNote workspace'>
      {currentPage === 'splash' ? (
        <SplashPage onNext={() => {handleNavigate('onboarding_01')}} />) : null}
      {currentPage === 'onboarding_01' ? (
        <Onboarding01Page onNext={() => {handleNavigate('onboarding_02')}} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_02' ? (
        <Onboarding02Page onNext={() => {handleNavigate('onboarding_03')}} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_03' ? (
        <Onboarding03Page onNext={() => {handleNavigate('onboarding_04')}} onSkip={handleSkip} />) : null}
      {currentPage === 'onboarding_04' ? (
        <Onboarding04Page onNext={() => handleNavigate('login')} />) : null}
       {currentPage === 'login' ? <LoginPage onJoin={() => handleNavigate('signup')} onAuthenticated={handleAuthenticated} /> : null} 
    </main>
  )
}

export default App
