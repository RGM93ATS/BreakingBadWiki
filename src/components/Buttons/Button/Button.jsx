import React from 'react'
import './Button.css'

export const Button = (props) => {
    return (
        <div
            style={{
                color:
                    props.theme && props.theme.color ? props.theme.color : '',
            }}
            className={props.size === 'medium' ? 'mediumButton' : 'button'}
        >
            <div onClick={() => props.handleButton(props.action)}>
                {props.children}
            </div>
        </div>
    )
}
