'use client'

import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";

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
      </div>
    </header>
  );
};

export default Header;