import React from 'react'

export const Title = (props) => {
    const { children, title, size } = props
    return (
        <h2
            style={
                size === 'small'
                    ? { fontSize: '20px' }
                    : size === 'large'
                    ? { fontSize: '50px' }
                    : { marginTop: '3%' }
            }
        >
            {title}
            {children}
        </h2>
    )
}
