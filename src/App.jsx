import Footer from './Components/Footer/footer';
import List from './Components/List/List';
import Navbar from './Components/Navbar/Navbar';
import React, { useState } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <div
        className={`h-svh w-full flex flex-col ${
          isLightMode ? 'bg-white text-black' : 'bg-[#060610] text-white'
        }`}
      >
        <div className={`px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%]`}>
          <Navbar toggleTheme={toggleTheme} isLightMode={isLightMode} />
        </div>
        
        <div
          className={`flex-1 overflow-y-scroll px-[10%] md:px-[15%] lg:px-[20%] xl:px-[30%]`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <List isLightMode={isLightMode} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
