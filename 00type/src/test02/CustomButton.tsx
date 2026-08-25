//1.객체 타입
//객체란 여러개의 데이터를 하나로 묶어놓은 상자
//AI가 만든 코드에서 중괄호{} 안에 콜론(:)이 잔뜩 있다면 객체
let userProfile:{name:string; age:number; isDesigner:boolean} = {
  name:'율디자인',
  age:25,
  isDesigner:true,
}

//2.인터페이스 - 데이터 설계도 (이름붙이기)
//매번 길게 쓰기 힘드니, interface 키워드로 설계도에 이름을 붙임
//AI가 가장 많이 생성하는 핵심 문법
interface UserData{
  name:string;
  email:string;
  role:string;
}

let currentUser:UserData = {
  name:'율코딩',
  email:'yulssem@aa.com',
  role:'admin'
}
//3.리액트 ui 컴포넌트의 props 읽어보기
interface ButtonProps{
  label:string; //버튼에 들어갈 글자 - 필수
  color:string; //버튼색상 - 필수
  icon?:boolean; // ?(선택) :  아이콘이 있을 수도 있고 없을수도 있음 
}
export default function CustomButton(props:ButtonProps){
  return(
    <button style={{backgroundColor:props.color}}>
      {props.icon ? '★':''}{props.label}
    </button>
  )
}