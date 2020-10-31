import React from 'react'
import { Title } from '../Titles/Title/Title'
import { Season } from '../../pages/Seasons/Season'

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
    const { theme } = props
    return (
        <header className={theme.dark ? 'darkMode' : 'App-header'}>
            <Title title="Seasons"></Title>
            <ListSeasons {...props} />
        </header>
    )
}
