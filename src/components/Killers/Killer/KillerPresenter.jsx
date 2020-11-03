import React from 'react'
import { Card } from '../../Card/Card'
import { KillerDetails } from './KillerDetails'
import { getEpisodeBySeasonAndEpisode } from '../../../services/seasons/seasonServices'
import { Title } from '../../Titles/Title/Title'
import { ThemeContext } from '../../../contexts/theme-context'

export const CardKiller = (props) => {
    const { killer, deaths, theme } = props

    return (
        <>
            {killer && (
                <>
                    <Title theme={theme} title={`${killer.name}`}></Title>
                    <Title
                        theme={theme}
                        title={`Number of Murders: ${killer.deathCount}`}
                        size="small"
                        isList={true}
                    ></Title>
                    {deaths &&
                        deaths.map((death, index) => {
                            getEpisodeBySeasonAndEpisode(
                                death.season,
                                death.episode
                            )
                            return (
                                <Card
                                    key={index}
                                    name={`${death.death}`}
                                    isList={true}
                                >
                                    <KillerDetails {...props} death={death} />
                                </Card>
                            )
                        })}
                </>
            )}
        </>
    )
}

export const KillerPresenter = (props) => {
    const { dark, theme } = React.useContext(ThemeContext)
    return <CardKiller {...props} theme={theme} dark={dark} />
}
