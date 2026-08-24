import './App.css'
import Layout from './components/Layout';
import ListItem from './components/ListItem';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const items = ['item1', 'item2', 'item3'];
  const ulItems = [
    <li key='0'>아이템1</li>,
    <li key='1'>아이템2</li>,
    <li key='2'>아이템3</li>,
  ]
  const listComponents = [
    <ListItem key='0' text='컴포넌트 아이템1' />,
    <ListItem key='1' text='컴포넌트 아이템2' />,
    <ListItem key='2' text='컴포넌트 아이템3' />,
  ]
  return (
    <>
      <div>{items}</div>
      <ul>{ulItems}</ul>
      <ul>{listComponents}</ul>
      <ul style={{ background: 'pink' }}>
        {items.map((item,index)=>(
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ol>
        {
          items.map((item,index)=>(
            <ListItem key={index} text={item}/>
          ))
        }
      </ol>
    </>
  )
  /*  const isLogin = true;
   const isEditable = false;
   if (isLogin) {
     return (
       <>
         <Login editable = {isEditable ? true : false}/>
         <Layout />
       </>
     )
   }
   return (
     <>
       <Logout />
       <Layout />
     </>
   ) */
}

export default App
