import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative size-12 md:size-16 aspect-square">
      <Image fill src="/icon.png" alt="logo" className="object-contain" />
    </div>
  );
};

export default Logo;
