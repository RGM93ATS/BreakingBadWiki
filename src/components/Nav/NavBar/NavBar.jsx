import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import BreakingSearch from '../../Search/BreakingSearch'
import { ThemeContext } from '../../../contexts/theme-context'
import '../styles.js'
import Brightness4 from '@material-ui/icons/Brightness4'
import Brightness7 from '@material-ui/icons/Brightness7'
import { useStyles } from '../styles'

export const NavBar = () => {
    const classes = useStyles()
    const { dark, toggle } = React.useContext(ThemeContext)
    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={dark ? classes.darkStyle : classes.style}
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        <img
                            src={process.env.PUBLIC_URL + '/logo.png'}
                            style={{
                                display: 'inline-flex',
                                justifyContent: 'center',
                                marginTop: '10px',
                            }}
                            width={120}
                            height={60}
                            alt="logo"
                        />
                    </Typography>
                    <BreakingSearch />
                    <IconButton
                        className={classes.customHoverFocus}
                        edge="end"
                        aria-label="alternar tema claro/oscuro"
                        aria-haspopup="true"
                        color="inherit"
                        onClick={toggle}
                    >
                        {dark ? <Brightness4 /> : <Brightness7 />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}
