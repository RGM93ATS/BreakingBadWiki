import React from 'react'
import { Subtitle } from '../../Titles/Subtitle/Subtitle'

export const CharacterDetails = (props) => {
    const { character, killer } = props
    return (
        <>
            <div style={{ width: '50%', display: 'flex' }}>
                <img src={character.img} width={350} height={500} alt="img" />
            </div>

            <div style={{ width: '50%' }}>
                <div style={{ display: 'flex' }}>
                    <Subtitle title="Status" isFlex={true}>
                        <h3>{character.status}</h3>
                    </Subtitle>
                    <Subtitle title="Murders" isFlex={true}>
                        <h3>{killer.deathCount || 0}</h3>
                    </Subtitle>
                </div>
                <Subtitle title="Birthday" isFlex={true}>
                    <h3>{`${character.birthday}`}</h3>
                </Subtitle>
                <Subtitle title="Occupations">
                    {character.occupation &&
                        character.occupation.map((occupation, index) => {
                            return <h3 key={index}>{`${occupation}`}</h3>
                        })}
                </Subtitle>
                <Subtitle title="Portrayed">
                    <h3>{`${character.portrayed}`}</h3>
                </Subtitle>
            </div>
        </>
    )
}
