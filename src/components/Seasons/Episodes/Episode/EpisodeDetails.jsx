import React from 'react'
import { Title } from '../../../Titles/Title/Title'
import { Subtitle } from '../../../Titles/Subtitle/Subtitle'

export const EpisodeDetails = (props) => {
    const { episode } = props
    return (
        <>
            <div style={{ width: '50%' }}>
                <Title title="Air Date" isFlex={false}>
                    <Subtitle title={episode.air_date} isMargin={true} />
                </Title>
            </div>
        </>
    )
}
