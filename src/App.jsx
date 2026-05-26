import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import CommoditiesPage from './pages/CommoditiesPage';
import CommodityDetailPage from './pages/CommodityDetailPage';
import SegmentsPage from './pages/SegmentsPage';
import ClientsPage from './pages/ClientsPage';
import ExportsPage from './pages/ExportsPage';
import ExportDetailPage from './pages/ExportDetailPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Page transition wrapper component
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// Shared Layout Component
function Layout() {
  const location = useLocation();

  return (
    <div className="font-body text-neutral-charcoal bg-neutral-offwhite min-h-screen flex flex-col antialiased selection:bg-green-primary selection:text-white">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
            <Route path="/commodities" element={<PageTransition><CommoditiesPage /></PageTransition>} />
            <Route path="/commodities/:id" element={<PageTransition><CommodityDetailPage /></PageTransition>} />
            <Route path="/segments" element={<PageTransition><SegmentsPage /></PageTransition>} />
            <Route path="/clients" element={<PageTransition><ClientsPage /></PageTransition>} />
            <Route path="/export-countries" element={<PageTransition><ExportsPage /></PageTransition>} />
            <Route path="/export-countries/:id" element={<PageTransition><ExportDetailPage /></PageTransition>} />
            <Route path="/exports" element={<PageTransition><ExportsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
