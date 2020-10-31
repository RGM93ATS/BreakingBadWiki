import React from 'react'
import { Title } from '../../Titles/Title/Title'
import { Link } from 'react-router-dom'

export const Character = (props) => {
    const { character } = props
    return (
        <>
            <Link
                key={character.char_id}
                to={{
                    pathname: '/character',
                    search: `?name=${character}`,
                }}
                style={{
                    textDecoration: 'none',
                    textAlign: 'left',
                    width: '100%',
                    color: 'white',
                }}
            >
                <Title title={character} size="small" />
            </Link>
        </>
    )
}
