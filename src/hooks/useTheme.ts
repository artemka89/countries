import { useEffect, useState } from "react"

interface ITheme {
    theme: 'light' | 'dark'
}

export const useTheme = () => {

    const [theme, setTheme] = useState<string>('light')   

    useEffect(() => {
       document.body.setAttribute('data-theme', theme) 
    }, [theme])
    return { theme, setTheme }
}