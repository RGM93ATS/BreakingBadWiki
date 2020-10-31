import React from 'react'
import { Title } from '../../Titles/Title/Title'

export const Quote = (props) => {
    const { quote } = props
    return <>{quote && <Title title={quote.quote} />}</>
}
