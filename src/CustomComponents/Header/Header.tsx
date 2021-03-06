import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        menu: {
            flex: 1,
            //flexDirection: 'row',
            marginLeft: theme.spacing(1)
        }
    }),
);

type PropsType = {
    showDrawer: () => void
}

export const Header = (props: PropsType) => {
    const classes = useStyles();
    return <>
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Box onClick={()=> props.showDrawer()} className={classes.menu}>
                            {/*<MenuIcon />*/}
                            <Typography variant="h6" >
                                Menu
                            </Typography>
                        </Box>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Your Gallery
                    </Typography>
                    <Button color="inherit" variant="outlined">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    </>
}