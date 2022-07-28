import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@mui/system';
import { createTheme, styled, useTheme } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import { getTheme, toggleThemeMode } from '../../store/app_store';
import { getSelectedTheme } from '../../../../themes';
import TopNavigator from './components/navigation/top_navigator';
import { Box, Container, CssBaseline, Card } from '@mui/material';
import DrawerNavigator from './components/navigation/drawer_navigator';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(2),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderRadius: 15,
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Layout_Dashboard = () => {
    const [openDrawer, setOpenDrawer] = useState(true)
    const mode = useSelector(getTheme);
    // const [localMode, setLocalMode] = useState(mode);
    const dispatch = useDispatch();
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                dispatch(toggleThemeMode())
            },
        }),
        [mode],
    );

    const theme = React.useMemo(
        () =>
            createTheme(getSelectedTheme(mode)),
        [mode],
    );

    // useEffect(()=> {

    // }, [mode])

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <TopNavigator toggleDrawer={() => setOpenDrawer(!openDrawer)} />
                <Box sx={{ display: 'flex' }}>
                    <DrawerNavigator
                        drawerWidth={drawerWidth}
                        open={openDrawer}
                        toggleDrawer={() => setOpenDrawer(!openDrawer)}
                    />

                    <Main open={openDrawer}>
                        <Box sx={{
                            margin: 0,
                            padding: 0,
                            borderTopLeftRadius: 14,
                            borderTopRightRadius: 14,
                            background: theme.palette.mode == 'dark' ? 'transparent' : '#e3f2fd',
                            backgroundImage: theme.palette.mode == 'dark' ? 'linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));' : 'transparent',
                        }}>
                            <Outlet />
                        </Box>
                    </Main>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default Layout_Dashboard;