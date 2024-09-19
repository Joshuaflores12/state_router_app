// lines 1-8 imports the js files inside the components folder
// Browser rowrer is the root that binds all the routing in react making the user have easier navigation on the website
import React from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Counter from './components/counter';
import Mynavbar from './Mynavbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




// Router wraps everything from the links to the path of each page, it's the main route
// routes are where the route component is set to call the page in the components folder

function App(){
return(
  
  <Router>
    <Mynavbar/>
    {/* <nav className="Menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="counter">Counter</Link></li>
      </ul>
    </nav> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
     </Routes>
    </Router>
 
  );
}

export default App;
