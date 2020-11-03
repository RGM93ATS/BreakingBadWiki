import React from 'react'
import { FaSyncAlt, FaListAlt } from 'react-icons/fa'
import { Button } from '../Button/Button'
import './ButtonsQuote.css'

export const ButtonsQuote = (props) => {
    const { isList, size } = props
    return (
        <div
            className={
                'content' + isList
                    ? 'padding'
                    : size === 'medium'
                    ? 'medium'
                    : 'minusPadding'
            }
        >
            <Button
                {...props}
                size="medium"
                action="refresh"
                handleButton={() => props.refreshQuote()}
            >
                <FaSyncAlt />
            </Button>
            <Button
                {...props}
                size="medium"
                action="retrieve"
                handleButton={() => props.getAllQuotes()}
            >
                <FaListAlt />
            </Button>
        </div>
    )
}
