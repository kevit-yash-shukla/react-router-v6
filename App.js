import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Navbar from "./components/Navbar";
import Errorpage from "./components/pages/Errorpage";
import Post from "./components/pages/Post";
import './Style.css'
function App() {
  return (
    <>
  <Router>   <Navbar/>
    
    <Routes>

    {/*<Route path="/" element={<h2>welcome to react js world</h2>}/>*/}
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/post" element={<Post/>}/>
      <Route path="*" element={<Errorpage/>}/>

    </Routes>
  </Router>
      <div className="footer">
        <p className="text-center mt-4 ">@copyright 2022 | all right reserved | Developed by: Shukla yash </p>
        <p className="text-center"></p>
      </div>

    </>
  );
}

export default App;
