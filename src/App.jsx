import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';

import {
  About,
  Contact,
  Experience,
  Publications,
  Pricing,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* Ensure deep-linking to sections like #pricing scrolls correctly on reload */}
        {/*
          We place this effect here so it runs once when the app mounts,
          after the initial layout containers are present.
        */}
        {(() => {
          // Inline IIFE to keep hooks order intact in this component
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            const tryScroll = () => {
              const { hash } = window.location;
              if (!hash) return false;
              const id = hash.replace('#', '');
              const el = document.getElementById(id);
              if (el) {
                requestAnimationFrame(() => {
                  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                });
                return true;
              }
              return false;
            };
            // Attempt immediately
            let done = tryScroll();
            // Fallback: try a few more times in case layout/images aren't ready yet
            let attempts = 0;
            const interval = setInterval(() => {
              if (done || attempts > 10) {
                clearInterval(interval);
                return;
              }
              done = tryScroll();
              attempts += 1;
            }, 150);
            // Also try on full load event
            const onLoad = () => tryScroll();
            window.addEventListener('load', onLoad);
            const onHash = () => tryScroll();
            window.addEventListener('hashchange', onHash);
            return () => {
              clearInterval(interval);
              window.removeEventListener('load', onLoad);
              window.removeEventListener('hashchange', onHash);
            };
          }, []);
          return null;
        })()}
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        {/* <Publications /> */}
        <Pricing />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
