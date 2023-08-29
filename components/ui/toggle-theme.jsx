import * as React from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoonStars } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ToggleTheme() {
  const { setTheme } = useTheme();

  const [checkedValue, setCheckedValue] = React.useState(false);

  React.useEffect(() => {
    setTheme(checkedValue ? "dark" : "light");
  }, [checkedValue]);

  return (
    <TooltipProvider delayDuration={0} skipDelayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => setCheckedValue((prevState) => !prevState)}
            className="flex items-center justify-center flex-row hover:bg-gray-700 hover:bg-opacity-20 p-2 rounded-md"
          >
            {checkedValue ? <BsMoonStars /> : <BsSun />}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Change Theme</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
