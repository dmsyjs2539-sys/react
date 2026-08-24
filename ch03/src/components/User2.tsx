export default function User2(props:UserProps) {
  const {userObj:{name,age},clickHandler} = props;

  return (
    <div>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}