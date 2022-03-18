import { useRef } from 'react';

import {
  Affix,
  BackgroundImage,
  Button,
  NormalizeCSS,
  Transition,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { AiOutlineArrowUp } from 'react-icons/ai';

import About from '../About';
import ContactUs from '../Contact';
import Home from '../Home';
import Partners from '../Partners';
import Services from '../Services';

import Footer from '../shared/components/footer';
import Navbar from '../shared/components/Navbar';
import background from '../shared/static/images/liquid-cheese.svg';

const App = () => {
  const $contactRef = useRef();
  const $homeRef = useRef();
  const $servicesRef = useRef();
  const $aboutRef = useRef();

  const [scroll, scrollTo] = useWindowScroll();

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <NormalizeCSS />
      <BackgroundImage src={background}>
        <Navbar
          ref={$homeRef}
          onLinkClick={handleScroll}
          refs={{
            contact: $contactRef,
            home: $homeRef,
            services: $servicesRef,
            about: $aboutRef,
          }}
        />
        <Home />
      </BackgroundImage>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 500}>
          {(transitionStyles) => (
            <Button
              style={transitionStyles}
              color="teal"
              onClick={() => scrollTo({ y: 0 })}
              radius="xl"
            >
              <AiOutlineArrowUp />
            </Button>
          )}
        </Transition>
      </Affix>
      <Services ref={$servicesRef} />
      {/* <Partners /> */}
      <About ref={$aboutRef} />
      <ContactUs ref={$contactRef} />
      <Footer
        onLinkClick={handleScroll}
        refs={{
          contact: $contactRef,
          home: $homeRef,
          services: $servicesRef,
          about: $aboutRef,
        }}
      />
    </>
  );
};

export default App;
