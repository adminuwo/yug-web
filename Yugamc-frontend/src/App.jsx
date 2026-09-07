import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import UpcomingProject from './pages/UpcomingProject';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ProjectDetail from './pages/ProjectDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './auth/ProtectedRoute';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AIAssistant from './components/AIAssistant';
import BookVisitModal from './components/BookVisitModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Wrapper component to get the location/path
const AppContent = ({ isLoading, setIsLoading }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAdminPage = location.pathname.startsWith('/admin');
  const [isBookModalOpen, setIsBookModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;
      if (document.body.style.overflow === 'hidden' || isBookModalOpen) return;

      const routes = ['/', '/about', '/projects', '/upcoming', '/why-us', '/gallery', '/contact'];
      const currentIndex = routes.indexOf(location.pathname);
      
      if (currentIndex === -1) return;

      if (e.key === 'ArrowLeft') {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) navigate(routes[prevIndex]);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = currentIndex + 1;
        if (nextIndex < routes.length) navigate(routes[nextIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [location.pathname, navigate, isBookModalOpen]);

  useEffect(() => {
    const handleOpenModal = () => setIsBookModalOpen(true);
    window.addEventListener('open-book-modal', handleOpenModal);
    return () => window.removeEventListener('open-book-modal', handleOpenModal);
  }, []);

  return (
    <>
      <Loader onLoaded={() => setIsLoading(false)} />
      <ScrollToTop />
      {!isLoading && !isAdminPage && (
        <Navbar onBookVisit={() => setIsBookModalOpen(true)} />
      )}
      
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home onBookVisit={() => setIsBookModalOpen(true)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/upcoming" element={<UpcomingProject />} />
          <Route path="/why-us" element={<WhyChooseUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {!isLoading && !isAdminPage && <Footer />}
      {!isLoading && !isAdminPage && (
        <>
          <FloatingWhatsApp />
          <AIAssistant />
          <BookVisitModal 
            isOpen={isBookModalOpen} 
            onClose={() => setIsBookModalOpen(false)} 
          />
        </>
      )}
    </>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ReactLenis root>
      <Router>
        <AppContent isLoading={isLoading} setIsLoading={setIsLoading} />
      </Router>
    </ReactLenis>
  );
}

export default App;
