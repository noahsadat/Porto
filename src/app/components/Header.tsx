'use client'

import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="fixed top-5 w-full z-50 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center">
        <div className="col-start-1"></div>
        <nav className="col-start-2 justify-self-center">
          <Tabs
            radius="full"
            aria-label="Navigation tabs"
            color="default"
            variant="solid"
            classNames={{
              base: "bg-medium p-0.5 rounded-full",
              tabList: "gap-5 bg-lightest",
              tab: "data-[hover=true]:bg-lightest",
              tabContent: "group-data-[selected=true]:text-lightest",
              cursor: "bg-darkest",
            }}
          >
            <Tab key="home" title="Home" />
            <Tab key="projects" title="Projects" />
            <Tab key="contact" title="Contact" />
          </Tabs>
        </nav>
        <div className="col-start-3 justify-self-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

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

export default Header;