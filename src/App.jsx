import { BrowserRouter } from "react-router-dom"
import AppRouter from "./AppRouter"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"

// import '../App.css'


function App(){
  return(
    <>
    <Navbar />
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    <Footer/>
    </>
  ) 
}
export default App

