import React, { useEffect, useState } from 'react'
import useGetCharacters from '../../hooks/characters/useGetCharacters'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../../actions/counter/counter'
import { CharactersPresenter } from '../../components/Characters/CharactersPresenter'
import Loader from 'react-loader-spinner'

export const Characters = (props) => {
    const characters = useGetCharacters()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        characters.data ? setLoading(false) : setLoading(true)
    }, [characters.data])

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
            {!loading && characters && characters.data && (
                <CharactersPresenter {...props} characters={characters} />
            )}
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            increment,
            decrement,
            setCount,
        },
        dispatch
    )
}

export const CharactersConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Characters))
export const CharactersWithTheme = withTheme(CharactersConnected)
