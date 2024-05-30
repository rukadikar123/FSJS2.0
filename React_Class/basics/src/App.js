import {useState} from 'react'


function Superheros(){
  const [heros,setHeros]=useState(["superman","spiderman","ironman"])
  const [Name, setName]=useState(()=>"antman")
  const onAddName=()=>{
    setHeros([...heros,Name])
    setName("")
  }
  return (
    <div>
      <ul>
        {heros.map((h)=> (
          <li key={h}>{h}</li>
        ))
        }
      </ul>
      <input
      type='text'
      value={Name}
      onChange={(e)=>(e.target.value)}/>
      <button onClick={onAddName}>Add Value</button>
    </div>
  )
}
function Counter() {
  let [count, setCount]=useState(100);
  function oneUp(){
     setCount(count+1)
  }
  return (
    <div>
      <button onClick={oneUp}>Count : {count}</button>
      <Superheros/>
    </div>
  )
}

function App() {
  return (
    <>
      <h1>Hello to react</h1>
      <Counter />
    </>

  );
}

export default App;
