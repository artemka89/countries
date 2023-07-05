import { useEffect, useState } from "react";

interface ITheme {
    theme: "light" | "dark";
}

export const useTheme = () => {
    const savedTheme =  localStorage.getItem("theme")
    const initTheme = savedTheme ? savedTheme : "light"
    const [theme, setTheme] = useState<string>(initTheme);

    useEffect(() => {
        document.body.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme)
    }, [theme]);
    return { theme, setTheme };
};
