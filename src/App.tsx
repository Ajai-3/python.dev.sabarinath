import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { CurriculumPage } from './pages/CurriculumPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export const AppContent: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedModule, setPreselectedModule] = useState<string | undefined>();

  const handleOpenBooking = (moduleName?: string) => {
    setPreselectedModule(moduleName);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
    setPreselectedModule(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-page text-brand-text-primary selection:bg-brand-accent selection:text-brand-forest">
      <ScrollToTop />
      <Navbar onOpenBookingModal={() => handleOpenBooking()} />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenBookingModal={handleOpenBooking} />} />
          <Route path="/curriculum" element={<CurriculumPage onOpenBookingModal={handleOpenBooking} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />
      <FloatingWhatsApp onOpenBookingModal={handleOpenBooking} />
      
      <BookingModal
        isOpen={isModalOpen}
        onClose={handleCloseBooking}
        preselectedModule={preselectedModule}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
