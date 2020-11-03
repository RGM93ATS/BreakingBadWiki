import React from 'react'
import { ImagesPresentation } from '../components/Image/ImagesPresentation'

import { ThemeContext } from '../contexts/theme-context'

export const Home = () => {
    const { dark, theme } = React.useContext(ThemeContext)
    return (
        <>
            <ImagesPresentation dark={dark} theme={theme} />
        </>
    )
}
