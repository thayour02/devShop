import Navbar from "./component/navbar"
import Home from "./component/home"
import Contact from './pages/contact/contact'
import Footer from "./component/footer";
import Serve from './pages/services/ser'
import { Route,Routes } from "react-router-dom"
import About from "./pages/about/about";
function App() {
  return (
    <div className="bg-blue-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Serve/>} />
        <Route path="/about" element={<About/>} /> 

      </Routes>
      <Footer />
    </div>
  )
}

export default App
