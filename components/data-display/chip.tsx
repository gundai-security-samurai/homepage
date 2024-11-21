import { cn } from "@/libs/utils";
import { type VariantProps, cva } from "class-variance-authority";

const chipVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors",
  {
    variants: {
      color: {
        default: "bg-zinc-400 hover:bg-gray-200/90 text-white",
        gray: "bg-gray-400 hover:bg-gray-400/90 text-white",
        brown: "bg-yellow-600 hover:bg-yellow-600/90 text-white",
        orange: "bg-orange-300 hover:bg-orange-300/90 text-white",
        yellow: "bg-yellow-300 hover:bg-yellow-300/90 text-white",
        green: "bg-green-300 hover:bg-green-300/90 text-white",
        blue: "bg-blue-300 hover:bg-blue-300/90 text-white",
        purple: "bg-purple-300 hover:bg-purple-300/90 text-white",
        pink: "bg-pink-300 hover:bg-pink-300/90 text-white",
        red: "bg-red-300 hover:bg-red-300/90 text-white",
      },
      size: {
        default:
          "md:h-10 mdd:min-w-14 shrink-0 px-3 md:px-4 py-2 :h-6  min-w-8",
        sm: "h-6 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      color: "default",
      size: "default",
    },
  },
);

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof chipVariants> {}

const Chip = ({ className, color, size, ...props }: ChipProps) => {
  return (
    <div className={cn(chipVariants({ color, size, className }))} {...props} />
  );
};

Chip.Margin = ({ size }: Pick<ChipProps, "size">) => {
  return <div className={cn(chipVariants({ size }), "invisible")} />;
};

export default Chip;
