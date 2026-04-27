import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import WebsitesWithAjay from './components/WebsitesWithAjay';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<Resume onNavigateToPortfolio={() => navigate('/portfolio')} />} />
      <Route path="/portfolio" element={<Portfolio onNavigateToResume={() => navigate('/')} />} />
      <Route path="/websiteswithajay" element={<WebsitesWithAjay />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}