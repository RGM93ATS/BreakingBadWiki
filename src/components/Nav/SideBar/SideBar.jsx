import React, { useEffect, useRef, useState } from 'react'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { Route, Switch } from 'react-router-dom'
import ErrorPage from '../../../pages/ErrorPage'
import { EpisodeRoute } from '../../../pages/Seasons/Episode'
import { SeasonsWithTheme } from '../../../pages/Seasons/Seasons'
import { CharacterRoute } from '../../../pages/Characters/Character'
import { CharactersWithTheme } from '../../../pages/Characters/Characters'
import { KillerRoute } from '../../../pages/Killers/Killer'
import { KillersWithTheme } from '../../../pages/Killers/Killers'
import { AiFillHome } from 'react-icons/ai'
import { MdLocalMovies } from 'react-icons/md'
import { GiPistolGun } from 'react-icons/gi'
import { FiUsers } from 'react-icons/fi'
import { ThemeProvider } from '../../../theme/theme'
import { NavBar } from '../NavBar/NavBar'
import { makeStyles } from '@material-ui/core/styles'
import { Home } from '../../../pages/Home'
import { QuoteRoute } from '../../../pages/Quote/Quote'
import { truncate } from 'lodash'
// import styled from 'styled-components'

const useStyles = makeStyles((theme) => ({
    style: {
        background: '#29773E',
        position: 'fixed',
    },
    darkStyle: {
        background: '#032202',
        position: 'fixed',
    },
}))

/*const Main = styled.main`
    position: relative;
    overflow: hidden;
    transition: all 0.15s;
    padding: 0 20px;
    margin-left: ${(props) => (props.expanded ? 240 : 64)}px;
`*/

export const SideBar = (props) => {
    // const [expanded, setExpanded] = useState(false)
    const expanded = useState(false)
    const [isDark, setDark] = useState(false)
    const [shouldRefresh] = useState(false)
    const mounted = useRef(null)
    useEffect(() => {
        mounted.current = truncate
        if (mounted.current) {
        }
        return () => (mounted.current = false)
    }, [expanded, shouldRefresh])

    const handleMode = (e) => setDark(e)

    const classes = useStyles()
    return (
        <>
            <ThemeProvider value={{ dark: !isDark, reload: shouldRefresh }}>
                <SideNav
                    className={isDark ? classes.darkStyle : classes.style}
                    onSelect={(selected) => {
                        const to = selected
                        if (props.location.pathname !== to) {
                            props.history.push(to)
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="/">
                        <NavItem eventKey="/">
                            <NavIcon>
                                <AiFillHome />
                            </NavIcon>
                            <NavText>Home</NavText>
                        </NavItem>
                        <NavItem eventKey="/seasons">
                            <NavIcon>
                                <MdLocalMovies />
                            </NavIcon>
                            <NavText>Seasons</NavText>
                        </NavItem>
                        <NavItem eventKey="/characters">
                            <NavIcon>
                                <FiUsers />
                            </NavIcon>
                            <NavText>Characters</NavText>
                        </NavItem>
                        <NavItem eventKey="/killers">
                            <NavIcon>
                                <GiPistolGun />
                            </NavIcon>
                            <NavText>Killers</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <NavBar {...props} setDark={(e) => handleMode(e)} />
                {/*<Main expanded={expanded}>*/}
                <Switch>
                    <Route exact path="/" component={() => <Home />} />
                    <Route
                        path="/seasons"
                        component={() => <SeasonsWithTheme />}
                    />
                    <Route
                        path="/episode/:id"
                        component={() => <EpisodeRoute />}
                    />
                    <Route
                        path="/characters"
                        component={() => <CharactersWithTheme />}
                    />
                    <Route
                        path="/character/:id"
                        component={() => <CharacterRoute />}
                    />
                    <Route
                        path="/character/"
                        component={() => <CharacterRoute />}
                    />
                    <Route
                        path="/quotes/:id"
                        component={() => <QuoteRoute />}
                    />
                    <Route
                        path="/killers"
                        component={() => <KillersWithTheme />}
                    />
                    <Route
                        path="/killer/:id"
                        component={() => <KillerRoute />}
                    />
                    <Route path="/killer/" component={() => <KillerRoute />} />
                    <Route component={() => <ErrorPage />} />
                </Switch>
                {/*</Main>*/}
            </ThemeProvider>
        </>
    )
}

export default SideBar
