import React from 'react'
import { withRouter } from 'react-router'
import { getEpisode } from '../../services/seasons/seasonServices'

import { connect } from 'react-redux'
import { EpisodePresenter } from '../../components/Seasons/Episodes/Episode/EpisodePresenter'
import Loader from 'react-loader-spinner'
import { getRandomQuoteByAuthor } from '../../services/quotes/quoteServices'

export class Episode extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            episode: {},
            quotes: [],
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
        getEpisode(this.state.id)
            .then((resp) => {
                this.setState({ loading: false })
                this.setState({
                    episode: resp.data[0],
                })
                return resp
            })
            .then((resp) => {
                resp.data[0].characters.map((character) => {
                    getRandomQuoteByAuthor(character).then((resp) => {
                        const newResult = resp.data[0]
                        this.setState({
                            quotes: [...this.state.quotes, newResult],
                        })
                    })
                    return true
                })
            })
    }
    render() {
        const { episode, quotes, loading } = this.state
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
                    <EpisodePresenter
                        {...this.props}
                        episode={episode}
                        quotes={quotes}
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

export const EpisodeConnected = connect(mapStateToProps)(Episode)
export const EpisodeRoute = withRouter(EpisodeConnected)
