import Home from "./pages/Home";
import ContentPages from "./pages/ContentPages";
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<ContentPages />} />
        </Routes>
    
    </Router>
  );
}

export default App;
