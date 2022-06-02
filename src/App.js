import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import ROUTES from "./routes/config"
import Login from "./pages/Login"
import { useEffect, useState } from "react"

function App() {

    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const localTheme = localStorage.getItem("THEME");
        if(localTheme === 'dark'){
            setTheme('dark');
        }
    });

    return (
        <ThemeProvider theme={getTheme(theme)}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    {ROUTES.map((route, i) => (
                        <Route
                            path={route.path}
                            element={<Layout theme={theme} setTheme={setTheme} isLayoutHide={route.hideLayout}>{route.element}</Layout>}
                            key={"route" + route.id}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
