
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Result from './pages/Result'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='result' element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
