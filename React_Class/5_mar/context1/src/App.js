import Navbar from "./Components/Navbar";
import { useState , createContext } from "react";
import HeroSection from "./Components/HeroSection";


export const myContext=createContext();

function App() {
const [name, setName]=useState("")
const [color,setColor]=useState("")

const myName=(event)=>{
  setName(event.target.value)
}
const myColor=(event)=>{
  setColor(event.target.value)
}

  return (
   <myContext.Provider value={{name , color}}>
   <Navbar/> 
   <from >
    <input type={"text"}
    placeholder="Enter user name"
    value={name}
    onChange={myName}
    />
    <input type={"text"} placeholder="enter a color name" value={color} onChange={myColor}/>
   </from>
   <HeroSection/>
   </myContext.Provider>
  );
}

export default App;
