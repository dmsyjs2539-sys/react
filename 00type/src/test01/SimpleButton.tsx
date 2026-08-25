import { useState } from "react";

export default function SimpleButton(){
  //컴포넌트 내부에서 상태나 데이터를 정의할 때 기본 타입이 쓰입니다
  const buttonText:string ='클릭하세요';
  const buttonWidth:number = 120;
  //제네릭 타입 지정
  const [isActive,setIsActive] = useState<boolean>(false); 
  return(
    <button onClick={()=>setIsActive(!isActive)} style={{
      width:buttonWidth,
      backgroundColor: isActive ? 'blue':'gray'
    }}>
      {buttonText}
    </button>
  )
}