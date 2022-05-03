import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import axios from "axios"
import { BASE_URL } from "../../utils/constants"
import { Alert } from "@mui/material"
import TenantListModal from "../../components/TenantListModal"

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="http://localhost:3000">
                ASO Exam Platform
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}

export default function Login() {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [error, setError] = React.useState(false)
    const [accessToken, setAccessToken] = React.useState(null)
    const [tenants, setTenants] = React.useState([])
    const [tenantModalOpen, setTenantModalOpen] = React.useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .post(`${BASE_URL}/api/auth/login`, { username, password })
            .then((response) => {
                if (response?.data?.accessToken) {
                    setAccessToken(response.data.accessToken)
                    setTenantModalOpen(true);
                }
            })
            .catch((error) => {
                setError(true)
            })
    }

    const getTenants = () => {
        if (accessToken) {
            axios
                .get(`${BASE_URL}/api/auth/getTenants`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                .then((response) => {
                    if (response?.data) {
                        setTenants(response.data)
                    }
                })
                .catch((error) => {
                    setError(true)
                })
        }
    }

    React.useEffect(getTenants, [accessToken])

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {error && (
                    <Alert severity="error">
                        Invalid Username or Password!
                    </Alert>
                )}
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        id="username"
                        label="Username"
                        name="username"
                        // autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        // autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
            <TenantListModal open={tenantModalOpen} setOpen={setTenantModalOpen} tenantList={tenants} />
        </Container>
    )
}
