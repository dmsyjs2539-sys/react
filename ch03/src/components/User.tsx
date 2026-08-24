export default function User({userObj :{name,age},clickHandler}:{
  userObj : {name:string; age:number};
  clickHandler : () => void;
}){

  return(
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}