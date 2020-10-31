import React, { useEffect, useState } from 'react'
import useGetKillers from '../../hooks/killers/useGetKillers'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../../actions/counter/counter'
import { KillersPresenter } from '../../components/Killers/KillersPresenter'
import Loader from 'react-loader-spinner'

export const Killers = (props) => {
    const killers = useGetKillers('desc')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        console.log('killers', killers)
        killers ? setLoading(false) : setLoading(true)
    }, [killers])

    const handleOrder = (type) => {
        console.log('-------------------type', type)
        killers.setOrder(type)
    }
    // console.log('killers', killers)

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
            {!loading && killers && (
                <KillersPresenter
                    {...props}
                    killers={killers}
                    handleOrder={(e) => handleOrder(e)}
                />
            )}
        </>
    )
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

export const KillersConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Killers))
export const KillersWithTheme = withTheme(KillersConnected)
