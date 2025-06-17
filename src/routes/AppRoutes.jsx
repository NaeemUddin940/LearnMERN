import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import HTML from "../pages/HTML"
import UpdateNotify from "../components/UpdateNotify"

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/html" element={<HTML/>}/>
        <Route path="/noty" element={<UpdateNotify/>}/>
    </Routes>
  )
}

export default AppRoutes