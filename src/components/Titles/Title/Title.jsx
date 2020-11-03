import React from 'react'

export const Title = (props) => {
    const { children, title, size, theme } = props

    return (
        <h2
            style={
                size === 'small'
                    ? {
                          fontSize: '20px',
                          color: (theme && theme.color) || 'white',
                      }
                    : size === 'large'
                    ? {
                          fontSize: '50px',
                          color: (theme && theme.color) || 'white',
                      }
                    : {
                          marginTop: '3%',
                          color: (theme && theme.color) || 'white',
                      }
            }
        >
            {title}
            {children}
        </h2>
    )
}
