import Login from "./Login";
import Logout from "./Logout";

export default function Layout() {
  const isLogin = false;
  const str = '메시지';
  const isActive = false;
  const test = !isLogin && <Logout />;
  return (
    <>
      <hr />
      {isLogin ? <h1>환영합니다{str}</h1> : <h1>거짓{str}</h1>}
      <div style={{
        background: isActive ? 'blue' : 'red',
      }} className={`main ${isActive ? 'active' : 'inactive'}`}>
        {isLogin ? <Login /> : <Logout />}
      </div>
      <hr />
      <div style={{ background: 'pink' }}>
        {isLogin && (<><Login /><Login/></>)}
        {test}
      </div>
    </>
  )
}