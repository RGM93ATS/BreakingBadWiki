import React from 'react'
import { withRouter } from 'react-router'
import {
    getCharacterById,
    getCharacterByName,
} from '../../services/characters/characterServices'

import { connect } from 'react-redux'
import { CharacterPresenter } from '../../components/Characters/Character/CharacterPresenter'

export class Character extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            character: {},
            id: props.match.params.id || -1,
            name: this.props.location.state
                ? this.props.location.state.name
                : this.props.location.search
                ? this.props.location.search
                : '',
        }
    }

    componentDidMount() {
        this.getCharacter()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getCharacter()
        }
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                id: this.props.match.params.id || -1,
                name: this.props.location.state
                    ? this.props.location.state.name
                    : this.props.location.search
                    ? this.props.location.search
                    : '',
            })
        }
    }

    /*componentDidUpdate(prevProps, nextProps) {
        if (this.props.location.pathname !== nextProps.props.location.pathname){
         this.props.location.pathname
         
        }
       }*/

    getCharacter = () => {
        if (this.state.id !== -1) {
            getCharacterById(this.state.id).then((resp) => {
                this.setState({
                    character: resp.data[0],
                })
            })
        } else if (this.state.name !== '') {
            getCharacterByName(this.state.name).then((resp) => {
                this.setState({
                    character: resp.data[0],
                })
            })
        }
    }
    render() {
        const { character } = this.state
        return (
            <>
                {character && (
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

export const CharacterConnected = connect(mapStateToProps)(Character)
export const CharacterRoute = withRouter(CharacterConnected)
