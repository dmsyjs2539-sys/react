export default function User3(props:UserProps3) {
  const {name,age,clickHandler} = props;

  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}