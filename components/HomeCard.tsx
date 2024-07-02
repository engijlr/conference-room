"use client";

import Image from "next/image";

interface HomeCardProps {
  title: string;
  description: string;
  variant: string;
  icon: string;
  handleClick: () => void;
}

const HomeCard = ({
  title,
  description,
  variant,
  icon,
  handleClick,
}: HomeCardProps) => {
  return (
    <div
      className={`${variant} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={handleClick}
      key={title}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={icon} alt="meeting" width={27} height={27} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
