import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.tsx'

const rootElement = document.getElementById("root")

// 상자가 없으면 화면을 그릴 곳도 없으므로, 조용히 실패하지 않고 바로 알려 줍니다.
if (rootElement === null) {
  throw new Error("FitNote root element를 찾을 수 없습니다.")
}

// StrictMode는 개발 중 실수를 빨리 찾도록 도와주는 안전 점검 모드입니다.
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)