import React from 'react'
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
import { NavBar } from '../NavBar/NavBar'
import { Home } from '../../../pages/Home'
import { QuoteRoute } from '../../../pages/Quote/Quote'
import { ThemeContext } from '../../../contexts/theme-context'
import { useStyles } from '../styles'

export const SideBar = (props) => {
    const { dark } = React.useContext(ThemeContext)
    const classes = useStyles()
    return (
        <>
            <SideNav
                className={dark ? classes.darkSide : classes.styleSide}
                onSelect={(selected) => {
                    const to = selected
                    if (props.location.pathname !== to) {
                        props.history.push(to)
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav
                    defaultSelected="/"
                    style={{
                        margin: '25% 0px',
                    }}
                >
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
            <NavBar {...props} />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/seasons" component={SeasonsWithTheme} />
                <Route path="/episode/:id" component={EpisodeRoute} />
                <Route path="/characters" component={CharactersWithTheme} />
                <Route path="/character/:id" component={CharacterRoute} />
                <Route path="/character/" component={CharacterRoute} />
                <Route path="/quotes/:id" component={QuoteRoute} />
                <Route path="/killers" component={KillersWithTheme} />
                <Route path="/killer/:id" component={KillerRoute} />
                <Route path="/killer/" component={KillerRoute} />
                <Route component={ErrorPage} />
            </Switch>
        </>
    )
}

export default SideBar
