
import About from "./components/About";
import Contact from "./components/Contact";
import Header  from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import My_Network from "./components/My_Network";
import Jobs from "./components/Jobs";
import Messaging from "./components/Messaging";
import Notifications from "./components/Notifications";

function App() {
  return (
    <>
    {/* <div className="container"> */}





      <BrowserRouter>
      <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/mynetwork" element={<My_Network />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/notification" element={<Notifications />} />
      </Routes>
    </BrowserRouter>




    {/* </div> */}
    </>
  );
}

export default App;
