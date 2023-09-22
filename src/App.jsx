
import './App.css'
import LineChart from './components/LineChart/LineChart'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl bg-amber-300'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>

      
    </>
  )
}

export default App
