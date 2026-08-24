import { useState } from 'react';
import './App.css'
import Count from './components/Count';
import Layout from './components/Layout';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState<string | null>(null);
  const [age,setAge] = useState<number | null>(null);
  const [gender,setGender] = useState<string | null>(null);
  const increment = () => setCount(count=>count+1);
  const clickHandler = () => {
    // setCount(count => count + 1)
    setCount((count)=>{return count+1});
    setCount((count)=>{return count+1});
    setCount((count)=>{return count+1});
  /*   setCount(count+1);
    setCount(count+1);
    setCount(count+1); */
  };
  //let name2 = '변우석';
  //const age = 20;
  const clickHandler2 = () => {
    setName('Mike');
    setAge(23);
    setGender('female');
  }
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <button onClick={clickHandler2}>이름나이성별바꾸기</button>
      <h1>count : {count}</h1>
      <button onClick={clickHandler}>증가</button>
      <hr/>
      <Count count={count} increment={increment}/>
      <Layout />
    </div>
  )
}

export default App
