import React from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { getQuote } from '../../services/quotes/quoteServices'
import { QuoteCharacter } from '../../components/Quotes/QuoteCharacter'

export class Quote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quote: {},
            id: props.match.params.id || -1,
            name: props.location.search || '',
            loading: false,
        }
    }

    componentDidMount() {
        this.getQuote()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getQuote()
        }
    }
    getQuote = () => {
        this.setState({ loading: true })
        if (this.state.id !== -1) {
            getQuote(this.state.id).then((resp) => {
                this.setState({ loading: false })
                this.setState({
                    quote: resp.data[0],
                })
            })
        }
    }
    render() {
        const { quote, loading } = this.state
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
                {!loading && <QuoteCharacter {...this.props} quote={quote} />}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export const QuoteConnected = connect(mapStateToProps)(Quote)
export const QuoteRoute = withRouter(QuoteConnected)
