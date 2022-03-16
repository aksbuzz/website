import { BackgroundImage, NormalizeCSS } from '@mantine/core';
import About from '../About';
import ContactUs from '../Contact';
import Home from '../Home';
import Services from '../Services';
import Footer from '../shared/components/footer';
import Navbar from '../shared/components/Navbar';
import background from '../shared/static/images/liquid-cheese.svg';

const App = () => {
  return (
    <>
      <NormalizeCSS />
      <BackgroundImage src={background}>
        <Navbar />
        <Home />
      </BackgroundImage>
      <Services />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
