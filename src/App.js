import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeButton from './components/ThemeButton';
import LoginPage from './pages/LoginPage';
import Article from './pages/Article';
import Template from './pages/Template';

function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="Article" element={<Article/>}/>
          <Route path="Template" element={<Template/>}/>
          <Route path="login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;