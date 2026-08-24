import './Layout.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Aside from './components/Aside';
import Section from './components/Section';
import Footer from './components/Footer';
import User from './components/User';
import User2 from './components/User2';
import User3 from './components/User3';
import James from './components/James';
import Button from './components/Button';
function Layout() {
  const userObj = {
    name: '철수',
    age: 20,
  }
  const clickHandler = () => {
    console.log('click');
  }
  const clickHandler2 = () => {
    alert('five');
  }
  const clickHandler3 = (msg: string) => {
    console.log(msg);
  }
  const clickHandler4 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log('click');
    console.log(e);
  }
  return (
    <div className="wrap">
      <User userObj={userObj} clickHandler={clickHandler} />
      <Header />
      <Nav />
      <Article></Article>
      <Section />
      <Aside />
      <Footer />
      <User2 userObj={userObj} clickHandler={clickHandler} />
      <User3 {...userObj} clickHandler={clickHandler} />
      <James title='User Component'>
        <p>James</p>
        <p>20</p>
        <p>male</p>
        <button onClick={clickHandler4}>제임스 버튼</button>
      </James>
      <button onClick={() => { alert('button click') }}>click</button>
      <Button onFive={clickHandler2} />
      <button onClick={() => { clickHandler3('ch3 그만하고싶다') }}>매개변수 핸들러</button>
      <button onClick={(e) => { console.log(e) }}>이벤트객체받기</button>
    </div>
  )
}

export default Layout;