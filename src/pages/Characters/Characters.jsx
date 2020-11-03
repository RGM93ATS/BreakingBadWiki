import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearch } from '../../actions/search/search'
import { CharactersPresenter } from '../../components/Characters/CharactersPresenter'
import Loader from 'react-loader-spinner'
import { getCharacters } from '../../services/characters/characterServices'

export class Characters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: null,
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        getCharacters().then((resp) => {
            this.setState({ characters: resp })
            this.setState({ loading: false })
        })
    }

    render() {
        const { characters, loading } = this.state
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
                    <CharactersPresenter
                        {...this.props}
                        characters={characters}
                    />
                )}
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        search: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setSearch,
        },
        dispatch
    )
}

export const CharactersConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters)
export const CharactersWithTheme = CharactersConnected
