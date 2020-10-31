import React from 'react'
import './Body.css'
import PropTypes from 'prop-types'

import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const handleModal = (id, history) => {
    const result = window.confirm('¿Quiere acceder al usuario?')
    result === true && history.push('/user/' + id)
}

const Body = (props) => {
    const history = useHistory()
    return (
        <>
            {props.texts.map((text, index) => (
                <div
                    className="card-paragrah"
                    key={index}
                    onClick={() => handleModal(props.id, history)}
                >
                    {text}
                </div>
            ))}
        </>
    )
}

Body.propTypes = {
    texts: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default withRouter(Body)
