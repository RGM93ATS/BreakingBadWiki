import React from 'react'

export const Subtitle = (props) => {
    const { children, title, isFlex, isMargin } = props
    return (
        <div
            style={{
                display: 'block',
                margin: isMargin ? '5% 0% 0% 0%' : 'unset',
                width: '100%',
            }}
        >
            <h2
                style={{
                    marginTop: '0%',
                    backgroundColor: 'white',
                    color: '#369457',
                    borderRadius: '1rem',
                    padding: !isMargin ? '2% 3% 0% 3%' : isFlex ? '10%' : '3%',
                    width: 'fit-content',
                    fontSize: !isMargin ? '20px' : '',
                }}
            >
                {title}
            </h2>
            <div style={{ display: 'block' }}>{children}</div>
        </div>
    )
}
