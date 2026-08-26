// root Survey의 질문 순서와 답변 모델을 수업용 프로젝트에서도 같은 이름으로 유지합니다.
export type SurveyExperience = "beginner" | "explorer" | "maker" | "operator"
export type SurveyGoal = "learn_foundations" | "ship_mvp" | "improve_workflow" | "lead_product"
export type SurveyPreference = "step_by_step" | "example_first" | "build_first" | "feedback_first"
export type SurveyStepNumber = 1 | 2 | 3
export type SurveyQuestion = "experience" | "goal" | "preference"
export type SurveyAnswer = SurveyExperience | SurveyGoal | SurveyPreference

export interface SurveyAnswers {
  readonly experience?: SurveyExperience
  readonly goal?: SurveyGoal
  readonly preference?: SurveyPreference
}

export interface SurveyOptionConfig {
  readonly label: string
  readonly value: SurveyAnswer
  readonly description: string
}

export interface SurveyStepConfig {
  readonly step: SurveyStepNumber
  readonly question: string
  readonly eyebrow: string
  readonly helper: string
  readonly field: SurveyQuestion
  readonly options: readonly SurveyOptionConfig[]
}

export const SURVEY_STEPS: Record<SurveyStepNumber, SurveyStepConfig> = {
  1: {
    step: 1,
    question: "AI 제품을 만들어본 경험은 어느 정도인가요?",
    eyebrow: "Experience",
    helper: "현재 위치를 알아야 첫 학습 경로가 흔들리지 않습니다.",
    field: "experience",
    options: [
      { label: "처음이에요", value: "beginner", description: "도구 이름은 알지만 제품 흐름은 이제 시작합니다." },
      { label: "따라 만들어봤어요", value: "explorer", description: "튜토리얼이나 예제를 보고 한 번쯤 완성했습니다." },
      { label: "직접 배포해봤어요", value: "maker", description: "작은 기능을 정하고 실제 사용자에게 보여줬습니다." },
      { label: "여러 프로젝트를 이끌었어요", value: "operator", description: "기획, 디자인, 구현 기준을 함께 조율해봤습니다." },
    ],
  },
  2: {
    step: 2,
    question: "이번 FitNote에서 가장 먼저 이루고 싶은 목표는 무엇인가요?",
    eyebrow: "Goal",
    helper: "목표에 따라 추천 학습 경로와 다음 행동이 달라집니다.",
    field: "goal",
    options: [
      { label: "기초 익히기", value: "learn_foundations", description: "AI 제품 제작의 기본 개념과 순서를 먼저 정리합니다." },
      { label: "첫 MVP 완성", value: "ship_mvp", description: "작게 만들고 테스트할 수 있는 첫 버전을 끝냅니다." },
      { label: "작업 방식 정리", value: "improve_workflow", description: "프롬프트, 노트, 프로젝트 운영 방식을 표준화합니다." },
      { label: "제품 방향 이끌기", value: "lead_product", description: "문제 정의와 의사결정 기준을 주도하고 싶습니다." },
    ],
  },
  3: {
    step: 3,
    question: "어떤 방식으로 배울 때 가장 오래 이어지나요?",
    eyebrow: "Learning style",
    helper: "선호 학습 방식은 Fit 분석의 마지막 입력입니다.",
    field: "preference",
    options: [
      { label: "단계별 안내", value: "step_by_step", description: "순서와 체크포인트가 있을 때 안정적으로 진행합니다." },
      { label: "예시 먼저", value: "example_first", description: "잘 만든 사례를 보고 내 상황에 맞게 바꿉니다." },
      { label: "직접 만들기", value: "build_first", description: "만지면서 배우고 결과를 보며 빠르게 수정합니다." },
      { label: "피드백 중심", value: "feedback_first", description: "결과를 공유하고 받은 피드백으로 방향을 잡습니다." },
    ],
  },
}

export function getAnswerForStep(answers: SurveyAnswers, step: SurveyStepNumber): SurveyAnswer | undefined {
  switch (SURVEY_STEPS[step].field) {
    case "experience":
      return answers.experience
    case "goal":
      return answers.goal
    case "preference":
      return answers.preference
  }
}

export function withSurveyAnswer(answers: SurveyAnswers, question: SurveyQuestion, value: SurveyAnswer): SurveyAnswers {
  switch (question) {
    case "experience":
      return isSurveyExperience(value) ? { ...answers, experience: value } : answers
    case "goal":
      return isSurveyGoal(value) ? { ...answers, goal: value } : answers
    case "preference":
      return isSurveyPreference(value) ? { ...answers, preference: value } : answers
  }
}

export function toCompleteSurveyAnswers(answers: SurveyAnswers): Required<SurveyAnswers> | null {
  if (answers.experience === undefined || answers.goal === undefined || answers.preference === undefined) {
    return null
  }

  return { experience: answers.experience, goal: answers.goal, preference: answers.preference }
}

function isSurveyExperience(value: SurveyAnswer): value is SurveyExperience {
  return value === "beginner" || value === "explorer" || value === "maker" || value === "operator"
}

function isSurveyGoal(value: SurveyAnswer): value is SurveyGoal {
  return value === "learn_foundations" || value === "ship_mvp" || value === "improve_workflow" || value === "lead_product"
}

function isSurveyPreference(value: SurveyAnswer): value is SurveyPreference {
  return value === "step_by_step" || value === "example_first" || value === "build_first" || value === "feedback_first"
}

// 아직 답하지 않은 첫 질문을 찾으면, 앞 답 없이 뒤 질문으로 건너뛰지 않습니다.
export function getFirstIncompleteStep(answers: SurveyAnswers): SurveyStepNumber | null {
  if (answers.experience === undefined) return 1
  if (answers.goal === undefined) return 2
  if (answers.preference === undefined) return 3
  return null
}