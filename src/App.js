import React,{useState} from 'react';
import Parent from './Parent';
import Child from './Child';
const App = () => {
  const [display,setDisplay] = useState('none');
  return (
    <div className="App">
      <Parent display={display} setDisplay={setDisplay} >
      	<Child/>
      </Parent>
      <button onClick={()=>setDisplay('flex')}>Open Modal</button>
    </div>
  );
}

export default App;
