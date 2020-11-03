import React from 'react'
import { Title } from '../../Titles/Title/Title'
import { Link } from 'react-router-dom'
import useGetCharactersByName from '../../../hooks/characters/useGetCharactersByName'

export const Character = (props) => {
    const { character } = props
    const characterState = useGetCharactersByName(character)
    const status =
        characterState && characterState.status
            ? `(${characterState.status})`
            : ''
    return (
        <>
            {character && (
                <Link
                    key={character.char_id}
                    to={{
                        pathname: '/character',
                        search: character,
                        state: {
                            name: character,
                        },
                    }}
                    style={{
                        textDecoration: 'none',
                        textAlign: 'left',
                        width: '100%',
                        color: 'white',
                    }}
                >
                    <Title title={`${character} ${status}`} size="small" />
                </Link>
            )}
        </>
    )
}
