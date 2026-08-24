import { useReducer, type Dispatch, type SetStateAction } from "react"
import {counterReducer} from '../reducer/counterReducer';
export default function Count({
  count,increment,
}:{count:number;increment:()=>void;}) {

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={increment}>증가</button>
    </div>
  )
}