import './App.css'
import NewArrival from '../src/Pages/NewArrival'
import { Route, Routes } from 'react-router-dom'
import Mainpage from './Pages/Mainpage'
import Adding from './Pages/Adding'
import Footer from './Components/Footer'
import Update from './Pages/Update'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Mainpage/>} />
        <Route path='/newarrival' element={<NewArrival/>} />
        <Route path='/adding' element={<Adding/>} />
        <Route path='/update/:id' element={<Update/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
