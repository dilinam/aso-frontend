import { createTheme } from '@mui/material/styles'

function getTheme(mode){
    return createTheme({
        palette: {
            mode: mode? mode: 'dark',
            secondary: {
                main: '#E6E6E6'
            }
        },
    })
}

export default getTheme;
