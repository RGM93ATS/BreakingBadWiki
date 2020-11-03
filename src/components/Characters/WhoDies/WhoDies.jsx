import React from 'react'
import { WhoDie } from './WhoDie/WhoDie'

export const WhoDies = (props) => {
    const { whoDies } = props
    return (
        <>
            {whoDies &&
                whoDies.map((whoDie, index) => {
                    return <WhoDie key={index} whoDie={whoDie} />
                })}
        </>
    )
}
