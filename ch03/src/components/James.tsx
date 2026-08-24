export default function James( {title,children} : {
  title:string;
  children :React.ReactNode}){
  return(
    <>
    <h1>{title}</h1>
    {children}
    </>
  )
}