import { useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import TrajectorySection from '../components/sections/TrajectorySection';
import MediaSection from '../components/sections/MediaSection';
import MusicSection from '../components/sections/MusicSection';
import ContactSection from '../components/sections/ContactSection';
import FloatingWhatsApp from '../components/ui/FloatingWhatsApp';
import { applySeo } from '../utils/seo';

function App() {
  useEffect(() => {
    applySeo({
      title: 'Dom Preto',
      description:
        'Dom Preto é um artista independente de Belo Horizonte que mistura blues, R&B, rock, MPB, rap e pop em uma identidade sonora forte, brasileira e autoral.',
    });
  }, []);

  return (
    <main className="app-shell">
      <Header />
      <HeroSection />
      <AboutSection />
      <TrajectorySection />
      <MediaSection />
      <MusicSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;
