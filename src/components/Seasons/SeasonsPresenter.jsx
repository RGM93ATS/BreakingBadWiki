import React from 'react'
import { Title } from '../Titles/Title/Title'
import { Season } from '../../pages/Seasons/Season'

import { ThemeContext } from '../../contexts/theme-context'

export const ListSeasons = (props) => {
    const { seasons } = props

    return (
        <>
            {seasons && seasons.index && (
                <>
                    {seasons.index.map((season, index) => (
                        <Season {...props} key={index} season={season} />
                    ))}
                </>
            )}
        </>
    )
}

export const SeasonsPresenter = (props) => {
    const { theme } = React.useContext(ThemeContext)
    return (
        <>
            <Title theme={theme} title="Seasons"></Title>
            <ListSeasons {...props} />
        </>
    )
}
