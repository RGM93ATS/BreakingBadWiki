import React from 'react'
import { withRouter } from 'react-router'
import {
    getDeaths,
    getKillerCountByName,
} from '../../services/killers/killerServices'
import { connect } from 'react-redux'
import { KillerPresenter } from '../../components/Killers/Killer/KillerPresenter'
import Loader from 'react-loader-spinner'
import _ from 'lodash'

export class Killer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deaths: [],
            killer: [],
            name: props.location.state.name || '',
            loading: false,
        }
    }

    componentDidMount() {
        this.getKiller()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getKiller()
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
    getKiller = () => {
        this.setState({ loading: true })
        if (this.state.name !== '') {
            getDeaths().then((resp) => {
                const deaths = _.filter(resp, (v) =>
                    _.includes(this.state.name, v.responsible)
                )
                getKillerCountByName(this.state.name).then((result) => {
                    this.setState({
                        killer: result,
                        deaths,
                        loading: false,
                    })
                })
            })
        }
    }

    render() {
        const { killer, deaths, loading } = this.state
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
                {!loading && killer && deaths && (
                    <KillerPresenter
                        {...this.props}
                        killer={killer}
                        deaths={deaths}
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

export const KillerConnected = connect(mapStateToProps)(Killer)
export const KillerRoute = withRouter(KillerConnected)
