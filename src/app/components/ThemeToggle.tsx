'use client'

import React, { useEffect, useState } from 'react';
import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setMounted(true);
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const newTheme = darkModeMediaQuery.matches ? 'dark' : 'light';
      setTheme(newTheme);
      setIsChecked(newTheme === 'dark');
    };
    
    // Set initial theme based on system preference
    handleChange();

    // Add listener for theme changes
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => {
      darkModeMediaQuery.removeEventListener('change', handleChange);
    };
  }, [setTheme]);

  useEffect(() => {
    setIsChecked(theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsChecked(newTheme === 'dark');
  };

  if (!mounted) return null;

  return (
    <Switch
      isSelected={isChecked}
      size="sm"
      color="default"
      startContent={<Sun size={20} />}
      endContent={<Moon size={20} />}
      onValueChange={toggleTheme}
    />
  );
};

export default ThemeToggle;