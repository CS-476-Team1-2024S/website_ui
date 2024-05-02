import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeButton from './components/ThemeButton';
import LoginPage from './pages/LoginPage';
import Page from './pages/Page';

function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="page/:pageName" element={<Page/>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;