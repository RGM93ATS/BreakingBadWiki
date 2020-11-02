import React from 'react'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../../actions/counter/counter'
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
