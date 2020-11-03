import React from 'react'
import { ImagePresentation } from './ImagePresentation'
import { cards } from '../../variables/images'
import { LogoBreaking } from './LogoBreaking'

export const ImagesPresentation = (props) => {
    return (
        <>
            <LogoBreaking {...props} />
            <div
                style={{
                    margin: '5% 10% 10% 5%',
                    display: 'inline-flex',
                }}
            >
                {cards &&
                    cards.map((card, index) => {
                        return (
                            <ImagePresentation
                                {...props}
                                card={card}
                                key={index}
                            />
                        )
                    })}
            </div>
        </>
    )
}
