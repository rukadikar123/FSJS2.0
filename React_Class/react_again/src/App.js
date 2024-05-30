 import React, { useEffect, useState } from "react"

 import Card from "./card"
 import Axios from 'axios'

function App(){
    let list=["siddharth","rahul","sachin"]
    const [details, setDetails]=useState({})
    const fetchDetails=async ()=>{
        const {data}=await Axios.get('https://randomuser.me/api')
        console.log("response",data);
        const details=data.results[0];
        setDetails(details)
    }
    useEffect(()=>{
        fetchDetails()
    },[])
    return (
      <>
        <div>App</div>
        <Card myName="siddharth" list={list} details={details}/>
        <button onClick={fetchDetails}
        >get details</button>
        </>
    )
}

export default App