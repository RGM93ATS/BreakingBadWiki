import React from 'react'
import './Card.css'
import { withRouter } from 'react-router-dom'
import { Header } from './Header/Header'

export const Card = (props) => {
    return (
        <div className={props.size === 'small' ? 'smallCard' : 'card'}>
            <Header title={props.name} />
            <div
                style={
                    props.isList
                        ? { display: 'inline-block' }
                        : { display: 'flex' }
                }
            >
                {props.children}
            </div>
        </div>
    )
}

export default withRouter(Card)
