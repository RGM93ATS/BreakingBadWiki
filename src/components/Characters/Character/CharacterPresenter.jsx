import React from 'react'
import { Card } from '../../Card/Card'
import { CharacterDetails } from './CharacterDetails'
import { Episodes } from '../../Seasons/Episodes/Episodes'
import useGetEpisodes from '../../../hooks/seasons/useGetEpisodesByCharacter'

import { QuoteCharacter } from '../../Quotes/QuoteCharacter'
import useGetRandomQuoteByAuthor from '../../../hooks/quotes/useGetRandomQuotesByAuthor'
import useGetQuotesByAuthor from '../../../hooks/quotes/useGetQuotesByAuthor'
import useGetKillerCountByName from '../../../hooks/killers/useGetKillerCount'

export const CardCharacter = (props) => {
    const { character } = props
    const episodes = useGetEpisodes(character.appearance, character.name)
    const quote = useGetRandomQuoteByAuthor(character.name)
    const quotes = useGetQuotesByAuthor(character.name)
    const killer = useGetKillerCountByName(character.name)

    const refreshQuote = () => {
        quote.refresh(character.name)
    }
    return (
        <>
            {character && episodes && (
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
    const { theme } = props

    return (
        <header className={theme.dark ? 'darkMode' : 'App-header'}>
            <CardCharacter {...props} />
        </header>
    )
}
