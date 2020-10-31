import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { Episodes } from './Episodes/Episodes'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '10px',
        margin: '2%',
        background: '#369457',
        position: 'unset',
        color: 'white',
        width: '80%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightRegular,
    },
    details: {
        backgroundColor: 'white',
        color: 'black',
        padding: '2%',
    },
    dark: {
        marginTop: '10%',
        backgroundColor: 'white',
        padding: '20px 50px',
        borderRadius: '5rem',
        margin: '5% 5% 0% 5%',
    },
}))

export const CardSeason = (props) => {
    const { season } = props
    const classes = useStyles()
    return (
        <>
            {season && (
                <Accordion className={classes.root}>
                    <AccordionSummary
                        expandIcon={
                            <ExpandMoreIcon style={{ color: 'white' }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className={classes.heading}>
                            Season {season}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Episodes {...props} season={season} />
                    </AccordionDetails>
                </Accordion>
            )}
        </>
    )
}

export const SeasonPresenter = (props) => {
    return <CardSeason {...props} />
}
