import * as React from "react";
import { useTheme } from "next-themes";
import { BsSun, BsMoonStars } from "react-icons/bs";

export default function ToggleTheme() {
  const { setTheme } = useTheme();

  const [checkedValue, setCheckedValue] = React.useState(false);

  React.useEffect(() => {
    setTheme(checkedValue ? "dark" : "light");
  }, [checkedValue]);

  return (
    <button
      onClick={() => setCheckedValue((prevState) => !prevState)}
      className="flex items-center justify-center flex-row hover:bg-gray-700 hover:bg-opacity-20 p-2 rounded-md"
    >
      {checkedValue ? <BsMoonStars /> : <BsSun />}
    </button>
  );
}
