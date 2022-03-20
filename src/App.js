import { ThemeProvider } from "@mui/material/styles"
import getTheme from "./theme"
import Users from "./pages/Users"
import Courses from "./pages/Courses"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Layout from "./components/Layout"

function App() {
    return (
        <ThemeProvider theme={getTheme("dark")}>
            <Layout>
                <BrowserRouter>
                    <Routes>
                        <Route path="/users" element={<Users />} />
                        <Route path= "/courses" element={<Courses />}/>
                    </Routes>
                </BrowserRouter>
            </Layout>
        </ThemeProvider>
    )
}

export default App
