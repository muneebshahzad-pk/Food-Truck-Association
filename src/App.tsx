/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { FindTrucks } from './pages/FindTrucks';
import { BecomeVendor } from './pages/BecomeVendor';
import { DispatcherServices } from './pages/DispatcherServices';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <div className="bg-mesh">
          <div className="blob-1" />
          <div className="blob-2" />
        </div>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/find-trucks" element={<FindTrucks />} />
            <Route path="/become-vendor" element={<BecomeVendor />} />
            <Route path="/dispatcher" element={<DispatcherServices />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
