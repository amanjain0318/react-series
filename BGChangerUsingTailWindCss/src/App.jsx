import { useState } from 'react'
import './App.css'
import { Fragment } from 'react'

function App() {
  const [color, setColor] = useState('orange')

  return (
    <Fragment>
      <div className='w-full h-screen duration-200 ' style={{backgroundColor: color}}> 
        <button 
        onClick={()=> setColor('red')}
        className='px-10 py-10 text-white bg-black rounded-full'>Red Color</button>{'  '}
        <>
        <button
         onClick={()=> setColor('orange')}
        className='px-10 py-10 text-white bg-black rounded-full'>Default Color</button>{'  '}
        <button 
        onClick={()=> setColor('blue')}
        className='px-10 py-10 text-white bg-black rounded-full'>Blue Color</button>
        </>
      </div>
    </Fragment>
  )
}

export default App
