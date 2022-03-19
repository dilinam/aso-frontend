import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import Users from "./pages/Users"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"

function App() {
    return (
        <ThemeProvider theme={getTheme("light")}>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/users" element={<Users />} />
                    </Routes>
                </BrowserRouter>
            </Layout>
        </ThemeProvider>
    )
}

export default App
