import { createTheme } from '@mui/material/styles'

function getTheme(mode){
    return createTheme({
        palette: {
            mode: mode? mode: 'light',
        },
    })
}

export default getTheme;
