import React, { useState, useEffect } from 'react'
import { Card } from '../../Card/Card'
import { CharacterDetails } from './CharacterDetails'
import { Episodes } from '../../Seasons/Episodes/Episodes'
import useGetEpisodes from '../../../hooks/seasons/useGetEpisodesByCharacter'

import { QuoteCharacter } from '../../Quotes/QuoteCharacter'
import useGetRandomQuoteByAuthor from '../../../hooks/quotes/useGetRandomQuotesByAuthor'
import useGetQuotesByAuthor from '../../../hooks/quotes/useGetQuotesByAuthor'
import useGetKillerCountByName from '../../../hooks/killers/useGetKillerCount'
import { ThemeContext } from '../../../contexts/theme-context'
import Loader from 'react-loader-spinner'

export const CardCharacter = (props) => {
    const { character } = props
    const [loading, setLoading] = useState(false)
    const episodes = useGetEpisodes(character.appearance, character.name)
    const quote = useGetRandomQuoteByAuthor(character.name)
    const quotes = useGetQuotesByAuthor(character.name)
    const killer = useGetKillerCountByName(character.name)
    const refreshQuote = () => quote.refresh(character.name)

    useEffect(() => {
        setLoading(true)
        const interval = setInterval(() => {
            setLoading(false)
        }, 3000)
        return function cleanup() {
            clearInterval(interval)
        }
    }, [])

    return (
        <>
            {loading && (
                <Loader
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                    type="Puff"
                    color="#369457"
                    height={100}
                    width={100}
                />
            )}
            {!loading && character && episodes && quote && quotes && (
                <>
                    <QuoteCharacter
                        {...props}
                        quote={quote.data}
                        quotes={quotes}
                        refreshQuote={refreshQuote}
                    />
                    <Card
                        name={`${character.name} (${character.nickname})`}
                        key={character.id}
                    >
                        <CharacterDetails {...props} killer={killer} />
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
    const { dark, theme } = React.useContext(ThemeContext)
    return <CardCharacter {...props} dark={dark} theme={theme} />
}
