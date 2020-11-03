import React from 'react'
import PropTypes from 'prop-types'

export const Header = (props) => {
    return (
        <>
            <h3 className="card-paragrah" onClick={props.getUser}>
                {props.title}
            </h3>
        </>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
