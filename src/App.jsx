import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Diferenciais from './components/Diferenciais';
import Servicos from './components/Servicos';
import Contato from './components/Contato';
import Localizacao from './components/Localizacao';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  return (
    <>
      {/* Skip-to-content for keyboard/screen reader users */}
      <a
        href="#servicos"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
                   focus:rounded-full focus:bg-moss-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para conteúdo principal
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <Servicos />
        <Diferenciais />
        <Localizacao />
        <Contato />
      </main>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
