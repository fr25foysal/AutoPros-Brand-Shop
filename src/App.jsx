
import './App.css'

function App() {
  console.log(import.meta.env.VITE_nothing);
  return (
    <>
      <div className='dark'>
        <div className='bg-white dark:bg-black '>
        <h1 className='text-yellow-400'>{import.meta.env.VITE_nothing}</h1>
      </div>
      </div>
      
      
      
    </>
  )
}

export default App
