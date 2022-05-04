import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import ROUTES from "./routes/config"
import Login from "./pages/Login"

function App() {
    return (
        <ThemeProvider theme={getTheme("dark")}>
            <BrowserRouter>
                <Routes>
                    <Route path={'/login'} element={<Login />} />
                    {ROUTES.map((route, i) => (
                        <Route
                            path={route.path}
                            element={<Layout isLayoutHide={route.hideLayout}>{route.element}</Layout>}
                            key={"route" + route.id}
                        />
                    ))}
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
