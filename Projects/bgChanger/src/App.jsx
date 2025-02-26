import { useState } from 'react'
import './App.css'

function App() {

    const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-md px-3 py-2'>
                <button onClick={()=> setColor("red")} className='px-4 py-1 text-xs outline-none bg-red-500 rounded-full text-white shadow-lg cursor-pointer'>Red</button>
                <button onClick={()=> setColor("green")} className='px-4 py-1 text-xs outline-none bg-green-500 rounded-full text-white shadow-lg cursor-pointer'>Green</button>
                <button onClick={()=> setColor("blue")} className='px-4 py-1 text-xs outline-none bg-blue-500 rounded-full text-white shadow-lg cursor-pointer'>Blue</button>
                <button  onClick={()=> setColor("yellow")} className='px-4 py-1 text-xs outline-none bg-yellow-500 rounded-full text-white shadow-lg cursor-pointer'>Yellow</button>
                <button onClick={()=> setColor("black")} className='px-4 py-1 text-xs outline-none bg-black rounded-full text-white shadow-lg cursor-pointer'>Black</button>
                <button  onClick={()=> setColor("indigo")} className='px-4 py-1 text-xs outline-none bg-indigo-500 rounded-full text-white shadow-lg cursor-pointer'>Indigo</button>
                <button  onClick={()=> setColor("orange")} className='px-4 py-1 text-xs outline-none bg-orange-500 rounded-full text-white shadow-lg cursor-pointer'>Orange</button>
                <button  onClick={()=> setColor("pink")} className='px-4 py-1 text-xs outline-none bg-pink-500 rounded-full text-white shadow-lg cursor-pointer'>Pink</button>
                <button  onClick={()=> setColor("violet")} className='px-4 py-1 text-xs outline-none bg-violet-500 rounded-full text-white shadow-lg cursor-pointer'>Violet</button>
                <button  onClick={()=> setColor("fuchsia")} className='px-4 py-1 text-xs outline-none bg-fuchsia-500 rounded-full text-white shadow-lg cursor-pointer'>Fuchsia</button>
                <button  onClick={()=> setColor("gray")} className='px-4 py-1 text-xs outline-none bg-gray-500 rounded-full text-white shadow-lg cursor-pointer'>Gray</button>
            </div>
        </div>
    </div>
  )
}

export default App
