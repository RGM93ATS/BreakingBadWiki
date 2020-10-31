import React, { useEffect, useRef, useState } from 'react'
import { Card } from '../../Card/Card'
import Loader from 'react-loader-spinner'
import { CharacterDetails } from './CharacterDetails'
import { Episodes } from '../../Seasons/Episodes/Episodes'
import useGetEpisodes from '../../../hooks/seasons/useGetEpisodesByCharacter'
import useGetRandomQuoteByAuthor from '../../../hooks/quotes/useGetRandomQuotesByAuthor'
import { Quote } from '../../Quotes/Quote/Quote'
import useGetQuotesByAuthor from '../../../hooks/quotes/useGetQuotesByAuthor'
import { ButtonsQuote } from '../../Buttons/ButtonsQuote/ButtonsQuote'
import { Quotes } from '../../Quotes/Quotes'

export const CardCharacter = (props) => {
    const { character } = props
    const [loading, setLoading] = useState(false)
    const quote = useGetRandomQuoteByAuthor(character.name)
    const quotes = useGetQuotesByAuthor(character.name)
    const episodes = useGetEpisodes(character.appearance, character.name)
    const mounted = useRef(null)

    useEffect(() => {
        mounted.current = true
        setLoading(true)
        if (character && episodes && quote) {
            if (mounted.current) {
                setLoading(false)
            }
        }
        return () => (mounted.current = false)
    }, [quote, episodes, loading, character])

    useEffect(() => {
        if (quotes && quotes.data !== null) {
            mounted.current = true
            setLoading(true)
            if (quotes && quotes.data) {
                if (mounted.current) {
                    setLoading(false)
                }
            }
        }
        return () => (mounted.current = false)
    }, [quotes])
    return (
        <>
            {loading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={2000}
                />
            )}
            {!loading && character && (
                <>
                    {quote && quote.data && (
                        <div style={{ display: 'flex', width: '100%' }}>
                            <ButtonsQuote
                                size="medium"
                                refreshQuote={() =>
                                    quote.getRandomQuote(character.name)
                                }
                                getAllQuotes={() =>
                                    quotes.getQuotesByCharacter(character.name)
                                }
                            />
                            <Card name="Quote" key={character.id} size="small">
                                <Quote quote={quote.data} />
                            </Card>
                        </div>
                    )}
                    {quotes && quotes.data && (
                        <>
                            <Card
                                name="Quotes"
                                key={character.id}
                                isList={true}
                            >
                                <Quotes quotes={quotes} />
                            </Card>
                        </>
                    )}
                    <Card
                        name={`${character.name} (${character.nickname})`}
                        key={character.id}
                    >
                        <CharacterDetails {...props} />
                    </Card>
                    <Card name="Appereance" key={character.id}>
                        <Episodes eps={episodes} />
                    </Card>
                </>
            )}
        </>
    )
}

export const CharacterPresenter = (props) => {
    const { theme } = props
    return (
        <header className={theme.dark ? 'darkMode' : 'App-header'}>
            <CardCharacter {...props} />
        </header>
    )
}
