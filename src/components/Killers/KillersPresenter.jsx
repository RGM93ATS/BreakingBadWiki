import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'
import { Title } from '../Titles/Title/Title'
import { Switch } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // marginTop: '2%',
        color: 'green',
        marginRight: '13%',
        marginLeft: '35%',
        marginTop: '1%',
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
    const { theme, killersOrdered, handleOrder } = props
    const [orderChecked, setOrderChecked] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage] = useState(4)
    const indexOfLastcharacter = currentPage * charactersPerPage
    const indexOfFirstcharacter = indexOfLastcharacter - charactersPerPage
    const currentPosts = killersOrdered.slice(
        indexOfFirstcharacter,
        indexOfLastcharacter
    )
    const indexPages = parseInt(killersOrdered.length / charactersPerPage) + 1

    const onChangePage = (e, newPage) => {
        setCurrentPage(newPage)
    }
    const switchOrder = () => {
        setOrderChecked(!orderChecked)
        handleOrder(orderChecked ? 'desc' : 'asc')
    }

    const classes = useStyles()
    return (
        <>
            {currentPosts && (
                <>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: '2%',
                            width: '100%',
                            justifyContent: 'center',
                        }}
                    >
                        <Pagination
                            className={
                                !theme.dark ? classes.dark : classes.root
                            }
                            page={currentPage}
                            count={indexPages}
                            onChange={onChangePage}
                        />
                        <div
                            style={{
                                display: 'flex',
                                marginRight: '15%',
                                marginTop: '0.5%',
                            }}
                        >
                            <Title
                                title={!orderChecked ? 'DESC' : 'ASC'}
                                size="small"
                            />
                            <div style={{ margin: '7.5%' }}>
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
                    </div>

                    {currentPosts.map((killersOrdered) => {
                        return (
                            <List
                                name={`${killersOrdered.name}`}
                                description={`(${killersOrdered.count})`}
                                key={killersOrdered.name}
                                id={killersOrdered.name}
                                type="/killer/"
                                isList={true}
                            ></List>
                        )
                    })}
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
