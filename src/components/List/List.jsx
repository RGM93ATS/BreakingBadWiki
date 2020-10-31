import React from 'react'
import './List.css'
import PropTypes from 'prop-types'
import { withRouter, useHistory, Link } from 'react-router-dom'
import { Header } from './Header/Header'

export const List = (props) => {
    const history = useHistory()
    const { id, name, description, type } = props
    console.log('type', type + id)
    const getDetails = () => type && history.push(type + id)
    return (
        <div className="list">
            <Link
                to={{
                    pathname: '/killer',
                    search: `?name=${name}`,
                    state: {
                        name: name,
                    },
                }}
                style={{
                    textDecoration: 'none',
                    textAlign: 'left',
                    width: '100%',
                    color: 'white',
                }}
            >
                <Header title={`${name} ${description}`} />
            </Link>
        </div>
    )
}

List.propTypes = {
    name: PropTypes.string.isRequired,
}

export default withRouter(List)
