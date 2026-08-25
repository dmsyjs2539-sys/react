//1유니온 타입 - a이거나 b
// 파이프(|) 기호를 사용해 여러 타입중 하나만 들어올 수 있게 제한

//버튼의 크기 베리언츠 : small,medium,large 세 글자중 하나만 가능
type ButtonSize = 'small' | 'medium' | 'large';
//알림창의 상태 베리언츠
type AlertStatus = 'success' | 'error' | 'loading';
//type : 여러 상태중 하나만 들어올 수 있게 제한하는 유니온 타입에 이름을 붙임

//2. 컴포넌트 Props에 유니온 타입 적용하기
//ai가 만든 ui 컴포넌트는 무한한 텍스트가 아니라
//디자이너가 정해둔 특정 단어(상태)만 입력 받도록 유니온 타입을 씁니다
interface AlertProps {
  massage: string; //어떤 메시지를 띄울 것인지?
  status: AlertStatus; // 현재 상태는 무엇인지? 위에 정의한 3개중 하나
}
export default function AlertBox(props: AlertProps) {
  //상태가 loading일때 보여줄 화면
  if (props.status === 'loading') {
    return <div>로딩중 .... </div>
  }
  //상태가 error일때 보여줄 화면
  if (props.status === 'error') {
    return <div style={{color:'red',fontWeight:'bold'}}>에러 :{props.massage}</div>
  }
  //위에서 로딩과 에러를 걸러냈으므로
  //여기 도달한 status는 무조건 success 상태로 타입이 좁혀짐
  return <div style={{color:'green'}}>성공 : {props.massage}</div>
}