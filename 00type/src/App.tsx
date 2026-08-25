import './App.css';
import SimpleButton from './test01/SimpleButton';
import CustomButton from './test02/CustomButton';
import AlertBox from './test03/AlertBox';
import SelectBoxDemo from './test04/SelectBox';

function App() {
 
  return (
    <>
      <SimpleButton />
      <CustomButton label='저장하기' color='red' />
      <AlertBox massage='데이터를 불러왔습니다' status='loading'/>
      <SelectBoxDemo />
    </>
  )
}

export default App
