import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Chip, Popover, PopoverTrigger, PopoverContent, Progress } from "@nextui-org/react";
import { Laptop, Code, Server, Database, Cloud, GitBranch, Wifi, Globe, Palette, Terminal } from "lucide-react";

const skills = [
  { name: "JavaScript", icon: Code, description: "Modern ES6+ JavaScript for dynamic web applications", proficiency: 20 },
  { name: "React", icon: Laptop, description: "Building interactive UIs with React and its ecosystem", proficiency: 85 },
  { name: "Node.js", icon: Server, description: "Server-side JavaScript for scalable applications", proficiency: 80 },
  { name: "MongoDB", icon: Database, description: "NoSQL database for flexible data storage", proficiency: 75 },
  { name: "AWS", icon: Cloud, description: "Cloud computing services and deployment", proficiency: 70 },
  { name: "Git", icon: GitBranch, description: "Version control and collaborative development", proficiency: 85 },
  { name: "REST API", icon: Wifi, description: "Designing and implementing RESTful APIs", proficiency: 80 },
  { name: "Next.js", icon: Globe, description: "React framework for production-grade applications", proficiency: 75 },
  { name: "HTML", icon: Code, description: "Structuring web content with semantic HTML5", proficiency: 95 },
  { name: "CSS", icon: Palette, description: "Styling and layout with modern CSS techniques", proficiency: 85 },
  { name: "TypeScript", icon: Code, description: "Typed superset of JavaScript for larger applications", proficiency: 80 },
  { name: "Tailwind CSS", icon: Palette, description: "Utility-first CSS framework for rapid UI development", proficiency: 90 },
];

const SkillTag = ({ skill, Icon, description, proficiency }: { skill: string; Icon: React.ElementType; description: string; proficiency: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover placement="top" isOpen={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <Chip
            startContent={<Icon size={14} />}
            variant="flat"
            color="default"
            className="transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:bg-gradient-to-r from-primary/90 to-primary hover:text-primary-foreground group"
          >
            <span className="transition-all duration-300 group-hover:translate-x-0.5">
              {skill}
            </span>
          </Chip>
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">{skill}</div>
          <div className="text-tiny mb-2">{description}</div>
          <Progress
            size="sm"
            radius="sm"
            classNames={{
              base: "max-w-md",
              track: "drop-shadow-md border border-default",
              indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
              label: "tracking-wider font-medium text-default-600",
              value: "text-foreground/60",
            }}
            label="Proficiency"
            value={proficiency}
            showValueLabel={true}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default function SkillsCard() {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-col items-start gap-3">
        <h4 className="text-xl font-semibold">Skills</h4>
      </CardHeader>
      <CardBody>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <SkillTag 
              key={index} 
              skill={skill.name} 
              Icon={skill.icon} 
              description={skill.description}
              proficiency={skill.proficiency}
            />
          ))}
        </div>
      </CardBody>
    </Card>
  );
}