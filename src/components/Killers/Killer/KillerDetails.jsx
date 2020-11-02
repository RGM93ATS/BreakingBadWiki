import React from 'react'
import { Subtitle } from '../../Titles/Subtitle/Subtitle'

export const KillerDetails = (props) => {
    const { death } = props

    /*const numberEpisode = (death) => {
        if (death) {
            return death && death.episode && death.episode.length === 1
                ? '0' + death.episode
                : death.episode
        }
    }*/

    return (
        <>
            <div
                style={{
                    width: '100%',
                    margin: '5%',
                }}
            >
                <Subtitle title="Cause" isMargin={true}>
                    <h3>{death.cause}</h3>
                </Subtitle>

                <Subtitle title="Last Words" isMargin={true}>
                    <h3>{`${death.last_words}`}</h3>
                </Subtitle>
            </div>
        </>
    )
}
