import { BrowserRouter, Route, Routes, redirect } from "react-router-dom"
import Header from "./component/Header"
import Home from "./page/Home/Home"
import Footer from "./component/Footer"
import Summary from "./page/SumaryInformation/Index"
import Alert from "./component/Alert"
import Scores from "./page/scores/Index"
import Attendance from "./page/Attendance"
import Schedule from "./page/Schedule/Index"
import ChatComponent from "./page/chat/Indext"
import { useEffect } from "react"

function App() {
  return (
    <BrowserRouter>
      <Alert />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/scores" element={<Scores />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chat" element={<ChatComponent />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
