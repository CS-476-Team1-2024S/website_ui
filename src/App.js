import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeButton from './components/ThemeButton';
import LoginPage from './pages/LoginPage';
import Page from './pages/Page';
import ResultsPage from './pages/ResultsPage'; // Import ResultsPage component
import DirectoryPage from './pages/DirectoryPage'; // Import DirectoryPage component

function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="page/:path" element={<Page/>} />
          <Route path="category/:directory" element={<DirectoryPage />} />

          {/* Route for displaying search results */}
          <Route path="results/:query" element={<ResultsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;