import { NotificationsActive } from "@mui/icons-material"
import {
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material"
import { useState } from "react"
import InfoIcon from '@mui/icons-material/Info';

function NotificationDrawer(props) {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <IconButton color="inherit" edge="end" onClick={handleClick}>
                <NotificationsActive color="primary" />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <MenuItem onClick={handleClose}><InfoIcon color="error" />&nbsp;tttttttttttttttttttttttttt</MenuItem>
                <MenuItem onClick={handleClose}><InfoIcon color="warning" />&nbsp;Profile</MenuItem>
                <MenuItem onClick={handleClose}><InfoIcon color="error" />&nbsp;Profile</MenuItem>
            </Menu>
        </>
    )
}

export default NotificationDrawer
