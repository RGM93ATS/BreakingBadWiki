import React from 'react'

/**
 *
 */
export const themeContext = React.createContext({
    dark: false,
    reload: false,
})
export const ThemeProvider = themeContext.Provider
export const ThemeConsumer = themeContext.Consumer

export const withTheme = (Component) => {
    return (props) => (
        <ThemeConsumer>
            {(value, value2) => (
                <Component
                    {...props}
                    theme={value}
                    refresh={value2}
                ></Component>
            )}
        </ThemeConsumer>
    )
    /*
        return React.forwardRef((props, ref) => {
            <ThemeConsumer>
            {
                {(value) => <Component ref={ref} {...props} theme={value}></Component>}
            }
            </ThemeConsumer>
        })
    */
}
