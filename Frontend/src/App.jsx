import Login from "./pages/Login"
import { Signup } from "./pages/Signup"
import {BrowserRouter,Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
      </Routes>
    </BrowserRouter>
  )
}