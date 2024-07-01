import React from 'react';

interface ThemeSelectorProps {
  onThemeChange: (theme: { backgroundColor: string; textColor: string }, isGradient: boolean) => void;
}

const themes = {
  solids: [
    { backgroundColor: '#000000', textColor: '#52525b' },
    { backgroundColor: '#808080', textColor: '#000000' },
    { backgroundColor: '#F8F8F8', textColor: '#000000' },
    { backgroundColor: '#FFFF00', textColor: '#000000' },
    { backgroundColor: '#FF00FF', textColor: '#000000' },
    { backgroundColor: '#00FFFF', textColor: '#000000' },
  ],
  gradients: [
    { backgroundColor: 'bg-gradient-to-r from-green-400 to-blue-500', textColor: '#000000' },
    { backgroundColor: 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500', textColor: '#FFFFFF' },
    { backgroundColor: 'bg-gradient-to-r from-yellow-200 via-green-200 to-green-500', textColor: '#000000' },
  ],
};

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onThemeChange }) => {
  const handleThemeChange = (theme: { backgroundColor: string; textColor: string }, isGradient: boolean) => {
    onThemeChange(theme, isGradient);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Themes</h2>
      <div className="grid grid-cols-5 gap-2">
        {themes.solids.map((theme, index) => (
          <div
            key={index}
            className="w-8 h-8 cursor-pointer"
            style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
            onClick={() => handleThemeChange(theme, false)}
          />
        ))}
      </div>
      <h2 className="text-lg font-semibold mb-4 mt-4">Gradients</h2>
      <div className="grid grid-cols-5 gap-2">
        {themes.gradients.map((theme, index) => (
          <div
            key={index}
            className={`w-8 h-8 cursor-pointer ${theme.backgroundColor}`}
            onClick={() => handleThemeChange(theme, true)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
