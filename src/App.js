import React from "react";
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Home from "./components/Home";
import About from  "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Counter from   './components/counter';

function App(){
return(
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="counter">Counter</Link></li>
      </ul>
    </nav>
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
