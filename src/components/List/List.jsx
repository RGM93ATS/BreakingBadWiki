import React from 'react'
import './List.css'
import PropTypes from 'prop-types'
import { withRouter, Link } from 'react-router-dom'
import { Header } from './Header/Header'

export const List = (props) => {
    const { id, name, description, type } = props
    return (
        <div className="list">
            <Link
                to={{
                    pathname: id ? type + id : type,
                    search: !id && name && name,
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
                <Header title={`${name} ${description || ''}`} />
            </Link>
        </div>
    )
}

List.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default withRouter(List)
