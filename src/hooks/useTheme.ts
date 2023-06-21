import { useEffect, useState } from "react"

interface ITheme {
    theme: 'light' | 'dark'
}

export const useTheme = () => {

    const [theme, setTheme] = useState<string>('light')

    const handleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')     

    useEffect(() => {
       document.body.setAttribute('data-theme', theme) 
    }, [theme])
    return {theme, handleTheme}
}