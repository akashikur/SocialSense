"use client"
import ProfilePreview from '@/components/ProfilePreview';
import ThemeSelector from '@/components/ThemeSelector';
import React, { useState } from 'react';


const HomePage: React.FC = () => {
    const [theme, setTheme] = useState<{ backgroundColor: string; textColor: string }>({
        backgroundColor: 'bg-white',
        textColor: '#000000',
      });
    
      const handleThemeChange = (theme: { backgroundColor: string; textColor: string }, isGradient: boolean) => {
        if (isGradient) {
          setTheme({ ...theme, textColor: '#000000' }); // Example default text color for gradients
        } else {
            if(theme.backgroundColor.startsWith("#")){
                let newTheme={
                    backgroundColor: `bg-[${theme.backgroundColor}]`,
                    textColor: theme.textColor,
                }
                setTheme(newTheme)
            }else{
                setTheme(theme);
            }
          
        }
      };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/4 p-4 bg-gray-100">
        <ThemeSelector onThemeChange={handleThemeChange} />
      </div>
      <div className="w-3/4 p-4">
        <ProfilePreview theme={theme} />
      </div>
    </div>
  );
};

export default HomePage;
