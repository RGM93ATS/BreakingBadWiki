import React, { useState } from 'react'
import { Quote } from './Quote/Quote'

import { Quotes } from './Quotes'
import { ButtonsQuote } from '../Buttons/ButtonsQuote/ButtonsQuote'
import { Card } from '../Card/Card'

export const QuoteCharacter = (props) => {
    const { quote, quotes, refreshQuote } = props
    const [showQuotes, setShowQuotes] = useState(false)
    const handleShowQuotes = () => {
        setShowQuotes(!showQuotes)
    }
    return (
        <>
            {quote && (
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                    }}
                >
                    <>
                        {quotes && (
                            <ButtonsQuote
                                {...props}
                                size="medium"
                                refreshQuote={() => refreshQuote()}
                                getAllQuotes={() => handleShowQuotes()}
                            />
                        )}
                        <Card
                            name="Quote"
                            size={quotes ? 'small' : 'smallCard'}
                        >
                            <Quote {...props} quote={quote} />
                        </Card>
                    </>
                </div>
            )}
            {showQuotes && quotes && (
                <>
                    <Card name="Quotes" key={quotes.author} isList={true}>
                        <Quotes {...props} quotes={quotes} />
                    </Card>
                </>
            )}
        </>
    )
}
