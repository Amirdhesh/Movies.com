import Login from "./pages/Login"
import { Signup } from "./pages/Signup"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import main from "./pages/main"
import movie from "./pages/movie"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path = "/dashboard" Component={main}/>
        <Route path = "/movie" Component={movie}/>
      </Routes>
    </BrowserRouter>
  )
}