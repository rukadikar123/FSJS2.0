import { useState, useCallback, useEffect, useRef } from "react"


function App() {
  const [Length, setLength] = useState(8)
  const [Numberallowed, setNumberallowed] = useState(false)
  const [Charallowed, setCharallowed] = useState(false)
  const [Password, setPassword] = useState("")

  const Passwordref=useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (Numberallowed) str += "0123456789"
    if (Charallowed) str +="@#$%^&*!+_-~"

    for (let i = 1; i <= Length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

    

  }, [Length, Numberallowed, Charallowed, setPassword])

  const cpoyToClipboard=useCallback(()=>{
    Passwordref.current?.select()
    window.navigator.clipboard.writeText(Password)
    
  },[Password])

  useEffect(()=>{
    PasswordGenerator()
  },[Length, Numberallowed, Charallowed, PasswordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-600">
        <h1 className="text-white text-center ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mt-2 mb-10">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={Passwordref}
          />
          <button
          onClick={cpoyToClipboard}
            className="outline-none bg-blue-800 text-white px-4 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={Length}
              onChange={(e) => { setLength(e.target.value) }}
              className="cursor-pointer "
            />
            <label >Length : {Length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={Numberallowed}
              onChange={() => { setNumberallowed((prev) => !prev) }}
            />
            <label htmlFor="">Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
              defaultChecked={Charallowed}
              onChange={() => { setCharallowed((prev) => !prev) }}
            />
            <label htmlFor="">Characters </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
