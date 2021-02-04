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
import { BackdropProvider } from './context';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <BackdropProvider>
        <Backdrop />
        <Navbar toggleHandler={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleHandler={toggleSidebar} />
        <Hero />
        <About />
        <Project />
        <Technology />
        <Contact />
        <Footer />
      </BackdropProvider>
    </>
  )
}

export default App;
