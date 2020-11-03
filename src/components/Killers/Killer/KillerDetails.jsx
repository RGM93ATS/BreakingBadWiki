import React from 'react'
import { Subtitle } from '../../Titles/Subtitle/Subtitle'

export const KillerDetails = (props) => {
    const { death } = props
    return (
        <>
            <div style={{ width: '100%', margin: '5%' }}>
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
