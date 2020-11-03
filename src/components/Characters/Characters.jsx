import React from 'react'
import { Character } from './Character/Character'

export const Characters = (props) => {
    const { characters } = props
    return (
        <>
            {characters &&
                characters.map((character, index) => {
                    return <Character key={index} character={character} />
                })}
        </>
    )
}
