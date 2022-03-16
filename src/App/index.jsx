import { BackgroundImage, NormalizeCSS } from '@mantine/core';
import { useRef } from 'react';
import About from '../About';
import ContactUs from '../Contact';
import Home from '../Home';
import Services from '../Services';
import Footer from '../shared/components/footer';
import Navbar from '../shared/components/Navbar';
import background from '../shared/static/images/liquid-cheese.svg';

const App = () => {
  const $contactRef = useRef();
  const $homeRef = useRef();
  const $servicesRef = useRef();
  const $aboutRef = useRef();

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NormalizeCSS />
      <BackgroundImage src={background}>
        <Navbar
          onLinkClick={handleScroll}
          refs={{
            contact: $contactRef,
            home: $homeRef,
            services: $servicesRef,
            about: $aboutRef,
          }}
        />
        <Home ref={$homeRef} />
      </BackgroundImage>
      <Services ref={$servicesRef} />
      <About ref={$aboutRef} />
      <ContactUs ref={$contactRef} />
      <Footer />
    </>
  );
};

export default App;
