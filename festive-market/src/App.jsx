import Home from '../src/pages/home/home.jsx'
import "../src/App.css";
import { Routes, Route } from 'react-router-dom'
import About from '../src/pages/about/about.jsx'
import Contact from '../src/pages/contact/contact.jsx'
import Gallery from '../src/pages/gallery/gallery.jsx'

function App() {
    return (
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
       </Routes>
    );
}

export default App;
