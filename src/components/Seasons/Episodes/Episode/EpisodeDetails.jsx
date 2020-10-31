import React from 'react'
import { Link } from 'react-router-dom'

import { Subtitle } from '../../../Titles/Subtitle/Subtitle'
import { Title } from '../../../Titles/Title/Title'

export const EpisodeDetails = (props) => {
    const { episode } = props
    return (
        <>
            <div style={{ width: '50%' }}>
                <Title title="Air Date" isFlex={false}>
                    <h5>{episode.air_date}</h5>
                </Title>
            </div>
        </>
    )
}
