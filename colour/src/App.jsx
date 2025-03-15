import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColour] = useState();


  return (
    <>
    <div className='p-11 h-screen w-full duration-200 ' style={{backgroundColor:color}}>
      <div className='fixed flex gap-4 flex-wrap justify-center items-center inset-x-0 bottom-12'>
      <button className="p-1 rounded-full border-2 shadow-lg border-black" onClick={()=>setColour("white") }style={{backgroundColor: "white" }} >X</button> 
      <button className="p-3 rounded-xl border shadow-lg " onClick={()=>setColour("yellow") }style={{backgroundColor: "yellow" }} >yellow</button> 
      <button className="p-3 rounded-xl border shadow-lg" onClick={()=>setColour("green")} style={{backgroundColor: "green"}} >green</button> 
      <button className="p-3 rounded-xl border shadow-lg" onClick={()=>setColour("red")} style={{backgroundColor: "red"}} >red</button> 
      </div>
    </div>
    </>
  )
}

export default App
