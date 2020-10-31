import React from 'react'
import { Link } from 'react-router-dom'
import { Subtitle } from '../../Titles/Subtitle/Subtitle'

export const Episodes = (props) => {
    const { seasons, season, eps } = props
    let episodes =
        eps || (seasons && seasons.episodes[Number(season) - 1]) || []

    return (
        <div style={{ width: '100%' }}>
            {episodes &&
                episodes.map((ep, index) => {
                    const numberEpisode =
                        ep.episode.length === 1 ? '0' + ep.episode : ep.episode

                    return (
                        <Link
                            key={index}
                            to={`/episode/${ep.episode_id}`}
                            style={{
                                textDecoration: 'none',
                                textAlign: 'left',
                                width: '100%',
                            }}
                        >
                            <Subtitle
                                key={index}
                                isMargin={false}
                                title={`0${
                                    season ? season : ep.season
                                }x${numberEpisode} - ${ep.title}`}
                            />
                        </Link>
                    )
                })}
        </div>
    )
}
