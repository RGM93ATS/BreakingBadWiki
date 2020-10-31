import React from 'react'
import { withRouter } from 'react-router'
import { withTheme } from '../../theme/theme'

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

export const SeasonConnected = connect(mapStateToProps)(withTheme(Season))
export const SeasonRoute = withRouter(SeasonConnected)
