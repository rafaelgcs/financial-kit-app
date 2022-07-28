import { AppBar, Drawer, useTheme } from "@mui/material";
import { useState } from "react"
import { useSelector } from 'react-redux';
import { getTheme } from "../../../../store/app_store";

const DrawerNavigator = (props) => {
    // const [open, setOpen] = useState()
    const themeMode = useSelector(getTheme);
    const theme = useTheme();
    const { open, toggleDrawer, drawerWidth } = props;
    return (<>
        <Drawer

            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    borderRight: 'none',
                    // backgroundImage: theme.palette.mode == 'dark' ?
                    //     'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09))' : '#fff'
                },
            }}
            variant="persistent"
            anchor={"left"}
            open={open}
            onClose={() => toggleDrawer()}
        >
            <h2>
                Drawer container
            </h2>
            <h2>
                Drawer container
            </h2>
            <h2>
                Drawer container
            </h2>
        </Drawer>
    </>
    )
}

// DrawerNavigator.prototype({
//     open
// })

export default DrawerNavigator