import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ThemeButton from './components/ThemeButton';


function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="Article" element={<Article/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;