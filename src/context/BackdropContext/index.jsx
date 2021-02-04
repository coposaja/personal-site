import React, { createContext, useState } from 'react'

const BackdropContext = createContext();

const BackdropProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BackdropContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </BackdropContext.Provider>
  )
}

export { BackdropContext, BackdropProvider };
