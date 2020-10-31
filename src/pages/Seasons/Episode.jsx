import React from 'react'
import { withRouter } from 'react-router'
import { getEpisode } from '../../services/seasons/seasonServices'
import { withTheme } from '../../theme/theme'

import { connect } from 'react-redux'
import { EpisodePresenter } from '../../components/Seasons/Episodes/Episode/EpisodePresenter'
import Loader from 'react-loader-spinner'

export class Episode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            episode: {},
            id: props.match.params.id || 0,
            loading: false,
        }
    }

    componentDidMount() {
        this.getEpisode()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getEpisode()
        }
    }
    getEpisode = () => {
        this.setState({ loading: true })
        getEpisode(this.state.id).then((resp) => {
            this.setState({ loading: false })
            this.setState({
                episode: resp.data[0],
            })
        })
    }
    render() {
        const { episode, loading } = this.state
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
                {!loading && episode && (
                    <EpisodePresenter {...this.props} episode={episode} />
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

export const EpisodeConnected = connect(mapStateToProps)(withTheme(Episode))
export const EpisodeRoute = withRouter(EpisodeConnected)
