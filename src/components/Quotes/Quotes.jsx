import React from 'react'
import { Quote } from './Quote/Quote'

export const Quotes = (props) => {
    const { quotes } = props
    return (
        <>
            {quotes &&
                quotes.map((quote, index) => {
                    return <Quote {...props} key={index} quote={quote} />
                })}
        </>
    )
}
