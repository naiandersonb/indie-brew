import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignUpForm from './pages/SignUpForm';

function RoutesApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/started" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default RoutesApp;
