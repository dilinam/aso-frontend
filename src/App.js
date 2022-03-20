import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"
import ROUTES from "./routes/config"

function App() {
    return (
        <ThemeProvider theme={getTheme("light")}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        {ROUTES.map((route, i) => (
                            <Route
                                path={route.path}
                                element={route.element}
                                key={"route" + route.id}
                            />
                        ))}
                    </Routes>
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
