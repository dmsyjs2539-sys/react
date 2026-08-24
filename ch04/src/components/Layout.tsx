import { useState } from "react";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";

export default function Layout(){
  const [num,setNum] = useState(0);
  const increment = () => setNum(num+1);
  const decrement = () => setNum(num-1);
  const reset = () => setNum(0);
  return(
    <>
    <h1>카운트상태 끌어올리기 연습</h1>
    <CountDisplay num={num}/>
    <CountButtons increment={increment} decrement={decrement} reset={reset}/>
    </>
  )
}