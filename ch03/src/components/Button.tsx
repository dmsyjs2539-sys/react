export default function Button({onFive}:{onFive:()=>void}){
  return(
    <button onClick={onFive}>버튼컴포넌트 클릭</button>
  )
}