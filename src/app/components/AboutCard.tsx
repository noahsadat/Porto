import { Avatar, Divider } from "@nextui-org/react";

export default function AboutCard() {
  return (
    <div className="p-2">
      <div className="flex items-center space-x-6 mb-2">
        <Avatar isBordered
          src="/images/avatars/IMG_3918.PNG"
          size="md"
          className="bordered"
          color="primary"
          radius="full"
        />
        <div>
          <h2 className="text-2xl font-semibold text-darkest">Noah Sadat</h2>
          <p className="text-sm text-dark">Frontend Devloper | Content & PIM manager</p>
        </div>
      </div>
      <Divider/>
      <p className="mt-4 text-dark">
      My life's journey is an ongoing discovery, shaped by diverse cultural experiences, a commitment to disciplined growth, and a strong spiritual foundation, all of which have profoundly influenced my professional and personal endeavors.
      </p>
    </div>
  );
}