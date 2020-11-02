import React from 'react'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../../actions/counter/counter'
import { SeasonsPresenter } from '../../components/Seasons/SeasonsPresenter'
import Loader from 'react-loader-spinner'
import { getSeasons } from '../../services/seasons/seasonServices'

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
            let index = this.fixSeasonArray(resp)
            let episodes = this.fixEpisodesArray(resp, index)
            this.setState({ seasons: { index, episodes } })
            this.setState({ loading: false })
        })
    }

    componentDidUpdate(prevProps, nextProps) {
        if (prevProps.theme !== this.props.theme) {
            return
        }
    }

    fixSeasonArray = (array) => {
        const seasons = [...new Set(array.map((a) => a.season))]
        const errorData = seasons.splice(1, 1)
        return seasons.filter((s) => s !== errorData)
    }

    fixEpisodesArray = (array, index) => {
        let episodesBySeasons = []
        index &&
            index.map((season) =>
                episodesBySeasons.push(array.filter((a) => a.season === season))
            )
        return episodesBySeasons
    }

    render() {
        const { seasons, loading } = this.state
        const { theme } = this.props
        return (
            <>
                <header className={theme.dark ? 'darkMode' : 'App-header'}>
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
                </header>
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

export const SeasonsConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Seasons))
export const SeasonsWithTheme = withTheme(SeasonsConnected)
