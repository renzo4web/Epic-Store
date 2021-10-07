import { Dispatch, useEffect, useState } from "react";

export type themeOptions = "dark" | "light";

type IToggleTheme = [colorTheme: themeOptions, setTheme: Dispatch<any>];

function useToggleTheme(): IToggleTheme {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const storageTheme = localStorage.getItem("theme");
      return storageTheme ? storageTheme : "light";
    }
  });

  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return [colorTheme, setTheme];
}

export default useToggleTheme;
