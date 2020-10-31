import React from 'react'
import { Card } from '../../../Card/Card'
import Loader from 'react-loader-spinner'
import { EpisodeDetails } from './EpisodeDetails'
import { Characters } from '../../../Characters/Characters'

export const CardEpisode = (props) => {
    const { episode } = props
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
                    <Card name="Ocupations" isList={true}>
                        <Characters characters={episode.characters} />
                    </Card>
                </>
            )}
        </>
    )
}

export const EpisodePresenter = (props) => {
    const { episode, theme } = props
    return (
        <header className={theme.dark ? 'darkMode' : 'App-header'}>
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
        </header>
    )
}
