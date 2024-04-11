import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeButton from './components/ThemeButton';

function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;