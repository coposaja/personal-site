import React, { useState } from 'react';

import { About, Contact, Navbar, Hero, Project, Technology, WhoAmI, Sidebar, Footer } from './components/';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <Navbar toggleHandler={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} toggleHandler={toggleSidebar} />
      <Hero />
      <About />
      <WhoAmI />
      <Project />
      <Technology />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
