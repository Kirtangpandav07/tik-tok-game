import './App.css'
import{useState} from 'react';  

function App(){
  const[num,setNum]=useState()
  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [num3, setNum3] = useState()
  const [num4, setNum4] = useState()
  const [num5, setNum5] = useState()
  const [num6, setNum6] = useState()
  const [num7, setNum7] = useState()
  const [num8, setNum8] = useState()
  const [cnt, setCnt] = useState(0)
 
  const buttonClickHandler9 = () => {
    setNum("")
    setNum1("")
    setNum2("")
    setNum3("")
    setNum4("")
    setNum5("")
    setNum6("")
    setNum7("")
    setNum8("")
    setCnt(0)
    document.getElementsByClassName('box')[0].disabled = false;
    document.getElementsByClassName('box')[1].disabled = false;
    document.getElementsByClassName('box')[2].disabled = false;
    document.getElementsByClassName('box')[3].disabled = false;
    document.getElementsByClassName('box')[4].disabled = false;
    document.getElementsByClassName('box')[5].disabled = false;
    document.getElementsByClassName('box')[6].disabled = false;
    document.getElementsByClassName('box')[7].disabled = false;
    document.getElementsByClassName('box')[8].disabled = false;

  }
  if (num1 === '0' && num2 === 'O' && num === 'O') {
    alert("O is winner")
  }
  if (num === 'O' && num3 === 'O' && num6 === 'O') {
    alert("O is winner")
  }
  if (num === 'O' && num4 === 'O' && num8 === 'O') {
    alert("O is winner")
  }
  if (num4 === 'O' && num5 === 'O' && num3 === 'O') {
    alert("O is winner")
  }
  if (num7 === 'O' && num8 === 'O' && num6 === 'O') {
    alert("O is winner")
  }
  if (num1 === 'O' && num4 === 'O' && num7 === 'O') {
    alert("O is winner")
  }
  if (num2 === 'O' && num5 === 'O' && num8 === 'O') {
    alert("O is winner")
  }
  if (num2 === 'O' && num4 === 'O' && num6 === 'O') {
    alert("O is winner")
  }

  if (num1 === 'X' && num2 === 'X' && num === 'X') {
    alert("X is winner")
  }
  if (num === 'X' && num3 === 'X' && num6 === 'X') {
    alert("X is winner")
  }
  if (num === 'X' && num4 === 'X' && num8 === 'X') {
    alert("X is winner")
  }
  if (num4 === 'X' && num5 === 'X' && num3 === 'X') {
    alert("X is winner")
  }
  if (num7 === 'X' && num8 === 'X' && num6 === 'X') {
    alert("X is winner")
  }
  if (num1 === 'X' && num4 === 'X' && num7 === 'X') {
    alert("X is winner")
  }
  if (num2 === 'X' && num5 === 'X' && num8 === 'X') {
    alert("X is winner")
  }
  if (num2 === 'X' && num4 === 'X' && num6 === 'X' === 'X') {
    alert("X is winner")
  }

  const buttonClickHandler = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum('X')
    }
    else {
      setNum('O')
    }
    document.getElementsByClassName('box')[0].disabled = true;

  }
  const buttonClickHandler1 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum1('X')
    }
    else {
      setNum1('O')
    }
    document.getElementsByClassName('box')[1].disabled = true;

  }
  const buttonClickHandler2 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum2('X')
    }
    else {
      setNum2('O')
    }
    document.getElementsByClassName('box')[2].disabled = true;

  }
  const buttonClickHandler3 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum3('X')
    }
    else {
      setNum3('O')
    }
    document.getElementsByClassName('box')[3].disabled = true;

  }
  const buttonClickHandler4 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum4('X')
    }
    else {
      setNum4('O')
    }
    document.getElementsByClassName('box')[4].disabled = true;

  }
  const buttonClickHandler5 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum5('X')
    }
    else {
      setNum5('O')
    }
    document.getElementsByClassName('box')[5].disabled = true;

  }
  const buttonClickHandler6 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum6('X')
    }
    else {
      setNum6('O')
    }
    document.getElementsByClassName('box')[6].disabled = true;

  }
  const buttonClickHandler7 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum7('X')
    }
    else {
      setNum7('O')
    }
    document.getElementsByClassName('box')[7].disabled = true;

  }
  const buttonClickHandler8 = () => {
    setCnt(cnt + 1)
    if (cnt % 2 === 1) {
      setNum8('X')
    }
    else {
      setNum8('O')
    }
    document.getElementsByClassName('box')[8].disabled = true;
  }
  return (
    <div className="App">
      <div className='w-150'>
        <div className='flex'>
          <button className='box' onClick={buttonClickHandler}>{num}</button>
          <button className='box' onClick={buttonClickHandler1}>{num1}</button>
          <button className='box' onClick={buttonClickHandler2}>{num2}</button>
        </div>
        <div className='flex'>
          <button className='box' onClick={buttonClickHandler3}>{num3}</button>
          <button className='box' onClick={buttonClickHandler4}>{num4}</button>
          <button className='box' onClick={buttonClickHandler5}>{num5}</button>
        </div>
        <div className='flex'>
          <button className='box' onClick={buttonClickHandler6}>{num6}</button>
          <button className='box' onClick={buttonClickHandler7}>{num7}</button>
          <button className='box' onClick={buttonClickHandler8}>{num8}</button>
        </div>
      </div>
      <div className="flex">
      <button className="reset" onClick={buttonClickHandler9} >Reset</button>
      </div>
    </div>
  );
}
export default App;



