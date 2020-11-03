import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from '../Nav/SideBar/SideBar'
import { Provider } from 'react-redux'
import { createStore } from '../../store/store'
import { ThemeContext } from '../../contexts/theme-context'

const PageRouter = () => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <Router>
            <Route
                render={({ location, history }) => (
                    <div
                        className="App"
                        style={{ backgroundColor: theme.backgroundColor }}
                    >
                        <SideBar location={location} history={history} />
                    </div>
                )}
            />
        </Router>
    )
}

const App = () => {
    return (
        <Provider store={createStore()}>
            <PageRouter />
        </Provider>
    )
}

export default App
