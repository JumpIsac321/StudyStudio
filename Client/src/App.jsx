import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home/Home'
import JoinGame from './Pages/Quiz/join-game/JoinGame'
import Questions from './Pages/Quiz/questions/Questions'
import Header from './components/Header'

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/game" element = {<JoinGame/>}/>
        <Route path = "/game/start" element = {<Questions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
