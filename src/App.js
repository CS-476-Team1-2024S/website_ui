import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ThemeButton from './components/ThemeButton';
import UserPage from './pages/UserPage';
import Page from './pages/Page';
import ResultsPage from './pages/ResultsPage'; // Import ResultsPage component
import DirectoryPage from './pages/DirectoryPage'; // Import DirectoryPage component
import Signup from './pages/Signup';

function App() {
  return (
    <>
      <ThemeButton></ThemeButton>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="user" element={<UserPage/>}/>
          <Route path="page/:path" element={<Page/>} />
          <Route path="category/:directory" element={<DirectoryPage />} />
          <Route path="signup" element={<Signup/>} />
          {/* Route for displaying search results */}
          <Route path="results/:query" element={<ResultsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;