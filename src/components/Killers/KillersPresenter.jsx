import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'
import { Title } from '../Titles/Title/Title'
import { Switch } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2%',
        color: 'green',
    },
    dark: {
        marginTop: '2%',
        backgroundColor: 'white',
        padding: '20px 50px',
        borderRadius: '5rem',
        margin: '5% 5% 0% 5%',
    },
}))

export const ListKillers = (props) => {
    const { theme, killers, handleOrder } = props
    console.log('ñeñe', killers)
    const [orderChecked, setOrderChecked] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage] = useState(4)
    const indexOfLastcharacter = currentPage * charactersPerPage
    const indexOfFirstcharacter = indexOfLastcharacter - charactersPerPage
    const currentPosts = killers.data.slice(
        indexOfFirstcharacter,
        indexOfLastcharacter
    )
    const indexPages = parseInt(killers.data.length / charactersPerPage) + 1

    const onChangePage = (e, newPage) => {
        setCurrentPage(newPage)
    }
    const switchOrder = () => {
        setOrderChecked(!orderChecked)
        console.log('fffffffffffffffffff', orderChecked)
        handleOrder(orderChecked ? 'desc' : 'asc')
    }
    const classes = useStyles()
    return (
        <>
            {currentPosts && (
                <>
                    <Pagination
                        className={!theme.dark ? classes.dark : classes.root}
                        page={currentPage}
                        count={indexPages}
                        onChange={onChangePage}
                    />
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '5%',
                            width: '50%',
                            justifyContent: 'center',
                        }}
                    >
                        <Title
                            title={
                                !orderChecked
                                    ? 'Dec killers order'
                                    : 'Asc killers order'
                            }
                        />
                        <div style={{ margin: '2.6%' }}>
                            <Switch
                                checked={!orderChecked}
                                onChange={() => switchOrder()}
                                color="primary"
                                name="checkedB"
                                inputProps={{
                                    'aria-label': 'primary checkbox',
                                }}
                            />
                        </div>
                    </div>

                    {currentPosts.map((killers) => (
                        <List
                            name={`${killers.death}`}
                            description={`(${killers.number_of_deaths})`}
                            key={killers.death_id}
                            id={killers.death}
                            type="/killer/"
                            isList={true}
                        ></List>
                    ))}
                </>
            )}
        </>
    )
}

export const KillersPresenter = (props) => {
    const { theme } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <Title title="Killers"></Title>
            <ListKillers {...props} />
        </header>
    )
}
