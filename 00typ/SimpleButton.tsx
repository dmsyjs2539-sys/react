import { useState } from "react";

export default function SimpleButton(){
    const buttonText:string = '클릭하세요'
    const buttonWidth:number = 120;
    //제네릭 타입 지정

    const [isActive,setIsActive] = useState<boolean>(false);
    return(
        <button onClick={()=>setIsActive(!isActive)} style={{
            width:buttonWidth,
            backgroundColor:isActive ? 'blue':'gray'
        }}>
            {buttonText}
        </button>
    )
}