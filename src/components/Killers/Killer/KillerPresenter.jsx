import React, { useState, useEffect, useRef } from 'react'
import { Card } from '../../Card/Card'
import Loader from 'react-loader-spinner'
import { KillerDetails } from './KillerDetails'
import { getEpisodeBySeasonAndEpisode } from '../../../services/seasons/seasonServices'
import { Title } from '../../Titles/Title/Title'

export const CardKiller = (props) => {
    const { killer, deaths } = props
    const [loading, setLoading] = useState(false)
    const mounted = useRef(null)

    useEffect(() => {
        mounted.current = true
        setLoading(true)
        if (killer) {
            if (mounted.current) {
                setLoading(false)
            }
        }
        return () => (mounted.current = false)
    }, [killer, setLoading, loading])

    return (
        <>
            {loading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={2000}
                />
            )}
            {!loading && killer && (
                <>
                    <Title title={`${killer.name}`}></Title>
                    <Title
                        title={`Number of Murders: ${killer.deathCount}`}
                        size="small"
                        isList={true}
                    ></Title>
                    {deaths &&
                        deaths.map((death, index) => {
                            getEpisodeBySeasonAndEpisode(
                                death.season,
                                death.episode
                            ).then((resp) => {
                                // setEpisode([...episode, resp])
                                // setLoading(false)
                            })
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
    const { theme } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <CardKiller {...props} />
        </header>
    )
}
