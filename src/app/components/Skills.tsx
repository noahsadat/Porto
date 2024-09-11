import React from 'react';
import { Card } from "@nextui-org/react";

import { SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiSwift, SiGithub, SiBootstrap, SiNotion, SiMicrosoftexcel } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "Excel", icon: SiMicrosoftexcel, color: "#217346" },
  { name: "NextUI", icon: TbBrandNextjs, color: "#0070F3" },
  { name: "Swift", icon: SiSwift, color: "#FA7343" },
];

const Skills = () => {
  return (
    <Card className="bg-light/40 backdrop-blur-sm border border-darkest/10 p-4 shadow-lg px-8">
      <h2 className="font-semibold text-darkest mb-4">Skills | Hobbies</h2>
      <div className="w-full overflow-x-hidden">
        <div className="inline-flex flex-nowrap">
          <div className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {skills.concat(skills).concat(skills).map((skill, index) => (
              <div key={index} className="flex flex-col items-center mx-6">
                <skill.icon className="w-6 h-6 mb-2" style={{ color: skill.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Skills;