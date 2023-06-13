import './tooglebtn.scss';
import { useState } from 'react';

const ThemeButton = () => {
  const [currentTheme, setCurrentTheme] = useState('theme-purple');

  const handleClick = () => {
    let newTheme;
    if (currentTheme === 'theme-purple') {
      newTheme = 'theme-green';
    }

    if (currentTheme === 'theme-green') {
      newTheme = 'theme-blue';
    }

    if (currentTheme === 'theme-blue') {
      newTheme = 'theme-purple';
    }

    document.body.className = newTheme;
    setCurrentTheme(newTheme);
  };

  return (
    <button className="theme-button" onClick={handleClick}>
      <span className={`theme-button-indicator ${currentTheme}`} />
    </button>
  );
};

export default ThemeButton;
