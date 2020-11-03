import React from 'react'
import { Title } from '../../../Titles/Title/Title'
export const WhoDie = (props) => {
    const { whoDie } = props
    return (
        <>
            <Title title={`${whoDie.death}`} size="small" />
        </>
    )
}
