import React, { useState, useRef } from 'react'
import { Subtitle } from '../../Titles/Subtitle/Subtitle'
import { useEffect } from 'react'
import { getEpisodeBySeasonAndEpisode } from '../../../services/seasons/seasonServices'
import { Link } from 'react-router-dom'
import { Title } from '../../Titles/Title/Title'

export const KillerDetails = (props) => {
    const { killer } = props
    const [episode, setEpisode] = useState(null)
    const [loading, setLoading] = useState(false)
    const mounted = useRef(null)

    let numberEpisode
    if (killer) {
        numberEpisode =
            killer && killer.episode && killer.episode.length === 1
                ? '0' + killer.episode
                : killer.episode
    }

    useEffect(() => {
        mounted.current = true
        setLoading(true)
        if (episode === null) {
            getEpisodeBySeasonAndEpisode(killer.season, killer.episode).then(
                (resp) => {
                    setLoading(false)
                    setEpisode(resp)
                }
            )
        }
        return () => (mounted.current = false)
    }, [episode, loading, killer])
    console.log('episode', killer)
    return (
        <>
            <div style={{ width: '50%' }}>
                <Subtitle title="Numer of deaths" isFlex={true}>
                    <h3>{killer.number_of_deaths}</h3>
                </Subtitle>
                <Subtitle title="Cause" isFlex={true}>
                    <h3>{killer.cause}</h3>
                </Subtitle>
                <Subtitle title="Responsible" isFlex={true}>
                    <h3>{`${killer.responsible}`}</h3>
                </Subtitle>

                <Subtitle title="Last Words">
                    <h3>{`${killer.last_words}`}</h3>
                </Subtitle>
                {episode && (
                    <Subtitle title="Episode">
                        <Link
                            to={`/episode/${episode.episode_id}`}
                            style={{
                                textDecoration: 'none',
                                textAlign: 'left',
                                width: '100%',
                            }}
                        >
                            <h3
                                style={{
                                    textDecoration: 'none',
                                    color: 'white',
                                }}
                            >
                                {`0${killer.season}x${numberEpisode} - ${episode.title}`}
                            </h3>
                        </Link>
                    </Subtitle>
                )}
            </div>
        </>
    )
}
