import React, { useEffect, useState } from 'react'
import useGetSeasons from '../../hooks/seasons/useGetSeasons'
import { withTheme } from '../../theme/theme'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { decrement, increment, setCount } from '../../actions/counter/counter'
import { SeasonsPresenter } from '../../components/Seasons/SeasonsPresenter'
import Loader from 'react-loader-spinner'

export const Seasons = (props) => {
    const seasons = useGetSeasons()
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        seasons && seasons.episodes ? setLoading(false) : setLoading(true)
    }, [seasons])

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
            {!loading && seasons && seasons.episodes && (
                <SeasonsPresenter {...props} seasons={seasons} />
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

export const SeasonsConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(withTheme(Seasons))
export const SeasonsWithTheme = withTheme(SeasonsConnected)
