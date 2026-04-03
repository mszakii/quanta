/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Research from './components/Research';
import SDGs from './components/SDGs';
import Affiliations from './components/Affiliations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-quanta-white font-sans text-quanta-text">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Research />
        <SDGs />
        <Affiliations />
      </main>
      <Footer />
    </div>
  );
}
