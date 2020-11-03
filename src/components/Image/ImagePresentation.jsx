import React from 'react'
import { animations } from 'react-animation'
import { useHistory } from 'react-router-dom'

export const ImagePresentation = (props) => {
    const { card, theme } = props
    const history = useHistory()
    const handleRoute = (link) => history.push(link)
    return (
        <div
            style={{ display: 'block', margin: '2%' }}
            onClick={() => handleRoute(card.link)}
        >
            <img
                style={{ animation: animations.popIn }}
                src={card.image}
                width={350}
                height={250}
                alt="characters"
            />
            <h3 style={{ color: theme.color }}>{card.title}</h3>
        </div>
    )
}
