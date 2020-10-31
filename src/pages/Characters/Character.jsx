import React from 'react'
import { withRouter } from 'react-router'
import {
    getCharacterById,
    getCharacterByName,
} from '../../services/characters/characterServices'
import { withTheme } from '../../theme/theme'

import { connect } from 'react-redux'
import { CharacterPresenter } from '../../components/Characters/Character/CharacterPresenter'
import Loader from 'react-loader-spinner'

export class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {},
            id: props.match.params.id || -1,
            name: props.location.search || '',
            loading: false,
        }
    }

    componentDidMount() {
        this.getCharacter()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getCharacter()
        }
    }
    getCharacter = () => {
        this.setState({ loading: true })
        if (this.state.id !== -1) {
            getCharacterById(this.state.id).then((resp) => {
                console.log('characterResponse', resp)
                this.setState({ loading: false })
                this.setState({
                    character: resp.data[0],
                })
            })
        } else if (this.state.name !== '') {
            getCharacterByName(this.state.name).then((resp) => {
                console.log('characterResponse', resp)
                this.setState({ loading: false })
                this.setState({
                    character: resp.data[0],
                })
            })
        }
    }
    render() {
        const { character, loading } = this.state
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
                {!loading && character && (
                    <CharacterPresenter {...this.props} character={character} />
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

export const CharacterConnected = connect(mapStateToProps)(withTheme(Character))
export const CharacterRoute = withRouter(CharacterConnected)
