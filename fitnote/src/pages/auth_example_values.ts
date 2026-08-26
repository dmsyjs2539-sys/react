import type { SurveyAnswers } from "./survey_config.ts"

// 수업에서 바로 눌러 볼 수 있는 기존 예시 값을 한 곳에 모읍니다.
export const DEMO_LOGIN_INPUT = {
  email: "demo@scentnote.com",
  password: "fitnote1234",
} as const

// 회원가입 예시는 기존 검증 테스트에서 통과한 값을 그대로 사용합니다.
export const SIGNUP_EXAMPLE_INPUT = {
  name: "입문자",
  email: "new@fitnote.local",
  password: DEMO_LOGIN_INPUT.password,
  passwordConfirmation: DEMO_LOGIN_INPUT.password,
  hasAcceptedTerms: true,
} as const

// Login 데모 계정은 이미 성향조사를 마친 수강생이라 Home을 바로 열 수 있습니다.
export const DEMO_COMPLETED_SURVEY_ANSWERS: Required<SurveyAnswers> = {
  experience: "operator",
  goal: "lead_product",
  preference: "feedback_first",
}