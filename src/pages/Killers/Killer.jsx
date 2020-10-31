import React from 'react'
import { withRouter } from 'react-router'
import { getKillerByName } from '../../services/killers/killerServices'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { KillerPresenter } from '../../components/Killers/Killer/KillerPresenter'
import Loader from 'react-loader-spinner'

export class Killer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            killer: {},
            name: props.location.state.name || '',
            loading: false,
        }
    }

    componentDidMount() {
        console.log('props', this.props)
        this.getKiller()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.id !== this.state.id) {
            this.getKiller()
        }
    }
    getKiller = () => {
        this.setState({ loading: true })
        if (this.state.name !== '') {
            getKillerByName(this.state.name).then((resp) => {
                this.setState({ loading: false })
                this.setState({
                    killer: resp[0],
                })
            })
        }
    }
    render() {
        const { killer, loading } = this.state
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
                {!loading && killer && (
                    <KillerPresenter {...this.props} killer={killer} />
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

export const KillerConnected = connect(mapStateToProps)(withTheme(Killer))
export const KillerRoute = withRouter(KillerConnected)
