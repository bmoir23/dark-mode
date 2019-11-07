import React, { useState } from 'react';

import useDarkMode from '../hooks/useDarkMode'

import Chart from "./Chart"


const Navbar = ({ toggleMode, darkMode}) => {
 
  return (
    <div>
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
    </div>
  );
};

export default Navbar;






// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };
//   return (
//     <nav className="navbar">
//       <h1>Crypto Tracker</h1>
//       <div className="dark-mode__toggle">
//         <div
//           onClick={toggleMode}
//           className={darkMode ? 'toggle toggled' : 'toggle'}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
