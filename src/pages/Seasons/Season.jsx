import React from 'react'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { SeasonPresenter } from '../../components/Seasons/SeasonPresenter'

export const Season = (props) => {
    return <SeasonPresenter {...props} />
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    }
}

export const SeasonConnected = connect(mapStateToProps)(Season)
export const SeasonRoute = withRouter(SeasonConnected)
