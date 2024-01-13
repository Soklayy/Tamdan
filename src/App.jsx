import {
  BrowserRouter, Outlet, Route, Routes
} from "react-router-dom"

import Header from "./component/Header"
import Home from "./page/Home/Home"
import Footer from "./component/Footer"
import Summary from "./page/SumaryInformation/Index"
import Alert from "./component/Alert"
import Scores from "./page/scores/Index"
import Attendance from "./page/Attendance"
import Schedule from "./page/Schedule/Index"
import ChatComponent from "./page/chat/Indext"
import Profile from "./component/Profile"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <>
              <Alert />
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/schedule" element={<Schedule />} />
        </Route>
        <Route path="/chat" element={<ChatComponent />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
