//1.자바스크립트의 문제점
//자바스크립트는 데이터의 형태를 미리 정하지 않아 AI나 개발자가 실수하기 쉽습니다
let designTool = 'Figma';
designTool = 123; //숫자를 넣어도 에러가 발생하지 않음-오류 발견 어려움
console.log(designTool);