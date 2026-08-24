import classNames from "classnames/bind";
import styles from './Child.module.css';
import { useState } from "react";

export default function Child2(){
  const [isActive,setIsActive] = useState(false);
  const handleClick = ()=>{
    setIsActive((prev)=>!prev);
  }
  //const isActive = true;
  const cx = classNames.bind(styles);
  return(
    <>
    <button className={cx({btn:true, 'is-active':isActive})} onClick={handleClick}>App Button</button>
    </>
  )
}