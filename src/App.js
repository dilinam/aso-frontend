import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import ROUTES from "./routes/config"

function App() {
    return (
        <ThemeProvider theme={getTheme("dark")}>
            <BrowserRouter>
                <Routes>
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
