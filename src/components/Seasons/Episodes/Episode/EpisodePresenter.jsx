import React, { useState, useEffect } from 'react'
import { Card } from '../../../Card/Card'
import Loader from 'react-loader-spinner'
import { EpisodeDetails } from './EpisodeDetails'
import { Characters } from '../../../Characters/Characters'
import useGetDeaths from '../../../../hooks/killers/useGetDeaths'
import { getDeathsBySeasonAndEpisode } from '../../../../functions/seasons'
import { WhoDies } from '../../../Characters/WhoDies/WhoDies'
import { QuoteCharacter } from '../../../Quotes/QuoteCharacter'
import _ from 'lodash'
export const CardEpisode = (props) => {
    const { episode, quotes } = props
    const [whoDies, setWhoDies] = useState([])
    const [randomQuote, setRandomQuote] = useState(null)
    const deaths = useGetDeaths()

    useEffect(() => {
        const realQuotes = quotes.filter((q) => q !== undefined)
        setRandomQuote(_.sample(realQuotes))
        const interval = setInterval(() => {
            const realQuotes = quotes.filter((q) => q !== undefined)
            setRandomQuote(_.sample(realQuotes))
        }, 5000)

        return function cleanup() {
            clearInterval(interval)
        }
    }, [randomQuote, quotes])

    useEffect(() => {
        const interval = setInterval(() => {
            setWhoDies(
                getDeathsBySeasonAndEpisode(
                    deaths,
                    episode.season,
                    episode.episode
                )
            )
        }, 10)

        return function cleanup() {
            clearInterval(interval)
        }
    }, [deaths, whoDies, episode])

    const numberEpisode = (episode) =>
        episode && episode.length === 1 ? '0' + episode : episode

    return (
        <>
            {episode && (
                <>
                    <Card
                        name={`0${episode.season}x${numberEpisode(
                            episode.episode
                        )} - ${episode.title}`}
                        key={episode.episode}
                    >
                        <EpisodeDetails {...props} />
                    </Card>
                    {whoDies && (
                        <Card name="Who Dies" isList={true}>
                            <WhoDies whoDies={whoDies} />
                        </Card>
                    )}
                    {randomQuote && (
                        <QuoteCharacter
                            {...props}
                            quote={randomQuote}
                            quotes={null}
                        />
                    )}
                    <Card name="Ocupations" isList={true}>
                        <Characters characters={episode.characters} />
                    </Card>
                </>
            )}
        </>
    )
}

export const EpisodePresenter = (props) => {
    const { episode } = props
    return (
        <>
            {!episode && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={2000}
                />
            )}
            {episode && <CardEpisode {...props} />}
        </>
    )
}
