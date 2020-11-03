import React, { useState } from 'react'
import './KillersPresenter.css'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'
import { Title } from '../Titles/Title/Title'
import { OrderSwitch } from '../Switch/OrderSwitch'
import { ThemeContext } from '../../contexts/theme-context'

export const ListKillers = (props) => {
    const { killersOrdered, handleOrder, dark } = props
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

    return (
        <>
            {currentPosts &&
                currentPage &&
                indexPages &&
                killersOrdered.length !== 0 && (
                    <>
                        <div className="pagination">
                            <Pagination
                                className={dark ? 'dark' : 'root'}
                                page={currentPage}
                                count={indexPages}
                                onChange={onChangePage}
                            />
                            <OrderSwitch
                                {...props}
                                checked={orderChecked}
                                handleSwitch={() => switchOrder()}
                            />
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
    const { dark, theme } = React.useContext(ThemeContext)
    return (
        <>
            <Title theme={theme} title="Killers"></Title>
            <ListKillers {...props} theme={theme} dark={dark} />
        </>
    )
}
