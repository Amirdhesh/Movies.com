import Login from "./pages/Login"
import { Signup } from "./pages/Signup"
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import main from "./pages/main"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Login}/>
        <Route path="/signup" Component={Signup}/>
        <Route path = "/main" Component={main}/>
      </Routes>
    </BrowserRouter>
  )
}