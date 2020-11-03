import React from 'react'

export const LogoBreaking = (props) => {
    const { theme, dark } = props
    const logo = !dark ? '/logo_dark.png' : '/logo.png'
    return (
        <div
            style={{
                backgroundColor: theme.backgroundColor,
                margin: '4% 6% 0% 10%',
                borderRadius: '1rem',
            }}
        >
            <img
                src={process.env.PUBLIC_URL + logo}
                style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    marginTop: '10px',
                }}
                width={300}
                height={150}
                alt="logo"
            />
        </div>
    )
}
