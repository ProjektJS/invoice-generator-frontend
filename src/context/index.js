import React, { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const DeviceContext = createContext({});

export const useDeviceScreenContext = () => {
  return useContext(DeviceContext);
};

const DeviceScreen = ({ children }) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth >= 1024);
  const [isTablet, setTablet] = useState(window.innerWidth >= 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth >= 1024);
    setTablet(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return (
    <DeviceContext.Provider value={{ isDesktop, isTablet }}>{children}</DeviceContext.Provider>
  );
};

DeviceScreen.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DeviceScreen;
