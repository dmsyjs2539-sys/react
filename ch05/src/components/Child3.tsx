import classNames from "classnames";
import { useState } from "react";

export default function Child3(){
  const [isActive,setIsActive] = useState(false);
  const handleClick = ()=>{
    setIsActive((prev)=>!prev);
  }

  return(
    <>
    <button className={classNames({btn:true, 'is-active':isActive})} onClick={handleClick}>App Button</button>
    </>
  )
}