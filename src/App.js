import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-black min-h-screen overflow-hidden">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Routes>
          {/* <Route path='/' element={<About />} /> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
