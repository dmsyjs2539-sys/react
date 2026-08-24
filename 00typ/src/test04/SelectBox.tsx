//1. 제네릭(Generices)이란 ? - 타입을 위한 빈 상자<T>
//제니릭은 타입을 미리 정하지 않고, 사용할 떄 괄호<>를 통해 나중에 끼어넣는 문법

import { useState } from "react";

//보통 타입에 앞글자를 따서 <T>라고 많이 씁니다
interface Box<T>{
    item:T;
}
//상자를 사용할 때, 꺽쇠<> 안에 어떤 타입을 담을지 적어줍니다
let stringBox : Box<string> = {item:'문자열을 담음 상자'};
let numberBox : Box<number> = {item:1345};

//2.리액트 상태에서 만나는 제네릭
//ai가 컴포넌트 내부에서 데이터를 저장할때 usestate 제네릭을 많이 씀
//const [test,setText] = useState<string>('');
//const [isLoding,setIsLoading]= useState<boolean>(false);

//3. 핵심 : ui 컴포넌트 코드 리뷰 실습(드롭다운/셀렉트)
//제네릭 타입 파라미터 : 아직 정해지지 않은 타입을 담은 변수
//<t>를 사용해서 옵션 목록과 선택된 값의 타입이 항상 같도록 묶어줌
interface SelectBoxProps<T>{
    options:T[]; //선택할 수 있는 옵션들의 배열
    selectVlaue : T; //현재 선택된 하나의 값
    onChange: (Value:T) => void; //T타입의 벨류를 받아서 아무것도 반환하지 않는 함수

}
//3. 제네릭의 제약조건
//<T extends string> : 이 컴포넌트는 문자열 타입만 받습니다
 function SelectBox<T extends string>({options,selectValue,onChange}:
    SelectBoxProps<T>){
    return(
        <select value={selectValue} onChange={(e)=>{
            const value = options.find((opt)=>opt === e.target.value);
            if(value !=== undefined) onChange(value);
        }}>
            {
                options.map((opt)=>(
                    <option key={opt}></option>
                ))
            }
        </select>
    )
}

export default function SelectBocDemo(){
 const fruits = ['사과','바나나','딸기','복숭아;'];
 const [selected,selected] = useState<string>(fruits[0]);
 return(
    <div>
        <hr/>
        <p>
        선택된 과일 : {selected}
        </p>
        <SelectBox<string> options={fruits} selectVlaue={selected}/>
    </div>
 )
}