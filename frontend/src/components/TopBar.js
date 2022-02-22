import { LogoutRounded, MenuRounded, QuestionMarkRounded, SettingsRounded } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography, Divider, Tooltip, Avatar } from '@mui/material';
import React, { useState } from 'react';
import sidebarItems from '../consts/sidebarItems'
import { Link } from "react-router-dom";
import userConsts from '../consts/userConsts'

const TopBar = (props) => {
    const { darkModeButton } = props

    const [drawerOpen, setDrawerOpen] = useState(false)
    const [profileMenuOpen, setProfileMenuOpen] = useState(false)

    const drawer = (
            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} anchor='left' variant='temporary' sx={{
            width: '240px',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: '240px',
                boxSizing: 'border-box',
            },
            }}>
                <List>
                    {sidebarItems.map((item) => (
                        <>
                            <ListItem button component={Link} to={item.route} key={item.id}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text}/>
                            </ListItem>
                            <Divider variant='middle' sx={{mb: '5px', mt: '5px'}}/>
                        </>
                    ))}
                </List>
            </Drawer>
    )

    const profileMenu = [
        {
            icon: <SettingsRounded/>,
            text: 'Settings',
            route: '#'
        },
        {
            icon: <QuestionMarkRounded/>,
            text: 'Documentation',
            route: '#'
        },
        {
            icon: <LogoutRounded/>,
            text: 'Log Out',
            route: '#'
        },
    ]

    function ProfileTooltip() {
        return <>
            <List>
                {profileMenu.map((item, index) => (
                    <ListItem button component={Link} to={item.route} key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItem>
                ))}             
            </List>
        </>
    }

    return <>
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar color='transparent' position='fixed' sx={{backdropFilter: 'blur(20px)'}}>
                <Toolbar>
                    {drawer}
                    {userConsts.isLoggedIn &&
                        <Tooltip title='Menu' arrow placement='bottom'>
                            <IconButton edge='start' onClick={() => setDrawerOpen(!drawerOpen)}>
                                <MenuRounded/>
                            </IconButton>
                        </Tooltip>
                    }
                    <Typography variant='h6' noWrap component='div' sx={{ flexGrow: 1, ml: '10px' }}>Code 404</Typography>
                    {darkModeButton}
                    {userConsts.isLoggedIn &&
                        <Tooltip arrow title={<ProfileTooltip/>} open={profileMenuOpen}>
                            <IconButton onClick={() => setProfileMenuOpen(!profileMenuOpen)}>
                                <Avatar src='#'/>
                            </IconButton>
                        </Tooltip>
                    }
                    {!userConsts.isLoggedIn && <Button component={Link} to='/sign-up' color='inherit'>Sign Up</Button>}
                    {!userConsts.isLoggedIn && <Button component={Link} to='/log-in' color='inherit'>Log In</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    </>;
};

export default TopBar;