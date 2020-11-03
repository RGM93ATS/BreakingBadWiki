import { makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        minHeight: 80,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        marginLeft: '2%',
        textAlign: 'left',
    },
    style: {
        background: '#1F6032',
        color: 'black',
    },
    darkStyle: {
        background: '#032202',
        color: 'white',
    },
    styleSide: {
        background: '#29773E',
        position: 'fixed',
    },
    darkSide: {
        background: '#032202',
        position: 'fixed',
    },
    customHoverFocus: {
        color: 'white',
        '&:hover, &.Mui-focusVisible': { backgroundColor: '#369457' },
    },
}))
