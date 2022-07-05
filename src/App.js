import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './components/About';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
