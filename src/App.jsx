import React, { useState } from 'react';

import {
  About,
  Contact,
  Navbar,
  Hero,
  Project,
  Technology,
  Sidebar,
  Footer,
  Backdrop
} from './components/';
import { BackdropProvider, ModalProvider, ThemeProvider } from './context';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <ThemeProvider>
        <BackdropProvider>
          <ModalProvider>
            <Backdrop />
            <Navbar toggleHandler={toggleSidebar} />
            <Sidebar isOpen={sidebarOpen} toggleHandler={toggleSidebar} />
            <Hero />
            <About />
            <Project />
            <Technology />
            <Contact />
            <Footer />
          </ModalProvider>
        </BackdropProvider>
      </ThemeProvider>
    </>
  )
}

export default App;
