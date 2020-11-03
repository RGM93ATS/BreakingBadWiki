import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearch } from '../../actions/search/search'
import { KillersPresenter } from '../../components/Killers/KillersPresenter'
import Loader from 'react-loader-spinner'
import {
    getDeaths,
    getKillerCountByName,
} from '../../services/killers/killerServices'
import _ from 'lodash'
export class Killers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            killers: [],
            deaths: null,
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        this.handleKillers()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.order !== this.state.order) {
            this.handleKillers()
        }
    }

    handleOrder = (order) => {
        this.setState({
            killers: _.orderBy(this.state.killers, ['count'], [order]),
        })
    }

    handleKillers = () => {
        getDeaths().then((resp) => {
            const killers = _.uniqBy(resp, 'responsible')
            killers.map((killer) => {
                getKillerCountByName(killer.responsible).then((result) => {
                    const obj = {
                        name: result.name,
                        count: result.deathCount,
                    }
                    const killers = [...this.state.killers, obj]
                    this.setState({
                        killers: _.orderBy(killers, ['count'], ['desc']),
                    })
                })
            })

            this.setState({ deaths: resp, loading: false })
        })
    }

    render() {
        const { killers, deaths, loading } = this.state
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
                {!loading && killers && deaths && (
                    <KillersPresenter
                        {...this.props}
                        deaths={deaths}
                        killersOrdered={killers}
                        handleOrder={(e) => this.handleOrder(e)}
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

export const KillersConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Killers)
export const KillersWithTheme = KillersConnected
