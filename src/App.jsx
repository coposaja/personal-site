import React from 'react';

import { About, Contact, Navbar, Hero, Project, Technology, WhoAmI } from './components/';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhoAmI />
      <Project />
      <Technology />
      <Contact />
    </>
  )
}

export default App;
