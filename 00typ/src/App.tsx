import SimpleButton from './components/SimpleButton'
import CustomButton from './components/CustomButton'
import AlertBox from './test03/AlertBox'
import SelectBocDemo from './test04/SelectBox'

function App() {
  return (
    <>
      <SimpleButton />
      <CustomButton label="저장하기" color='red'/>
      <AlertBox massage='데이터를 불어왔습니다' status='succes'/>
      <SelectBocDemo/>
    </>
  )
}

export default App