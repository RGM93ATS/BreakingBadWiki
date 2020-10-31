import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Title } from '../Titles/Title/Title'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'

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

export const ListCharacters = (props) => {
    const { theme, characters } = props

    const [currentPage, setCurrentPage] = useState(1)
    const [charactersPerPage] = useState(4)
    const indexOfLastcharacter = currentPage * charactersPerPage
    const indexOfFirstcharacter = indexOfLastcharacter - charactersPerPage
    const currentPosts = characters.data.slice(
        indexOfFirstcharacter,
        indexOfLastcharacter
    )
    const indexPages = parseInt(characters.data.length / charactersPerPage) + 1

    const onChangePage = (e, newPage) => {
        setCurrentPage(newPage)
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
                    {currentPosts.map((characters) => (
                        <List
                            name={`${characters.name} (${characters.nickname})`}
                            key={characters.char_id}
                            id={characters.char_id}
                            type="/character/"
                            isList={true}
                        ></List>
                    ))}
                </>
            )}
        </>
    )
}

export const CharactersPresenter = (props) => {
    const { theme } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <Title title="Characters"></Title>
            <ListCharacters {...props} />
        </header>
    )
}
