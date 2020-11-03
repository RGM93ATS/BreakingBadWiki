import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearch } from '../../actions/search/search'
import { SeasonsPresenter } from '../../components/Seasons/SeasonsPresenter'
import Loader from 'react-loader-spinner'
import { getSeasons } from '../../services/seasons/seasonServices'
import { fixSeasonArray, fixEpisodesArray } from '../../functions/seasons'

export class Seasons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            seasons: null,
            loading: false,
        }
    }

    componentDidMount() {
        this.setState({ loading: true })
        getSeasons().then((resp) => {
            let index = fixSeasonArray(resp)
            let episodes = fixEpisodesArray(resp, index)
            this.setState({ seasons: { index, episodes } })
            this.setState({ loading: false })
        })
    }

    render() {
        const { seasons, loading } = this.state
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
                {!loading && (
                    <SeasonsPresenter {...this.props} seasons={seasons} />
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

export const SeasonsConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(Seasons)
export const SeasonsWithTheme = SeasonsConnected
