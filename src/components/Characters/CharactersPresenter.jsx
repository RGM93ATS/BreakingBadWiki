import React, { useState } from 'react'
import { Title } from '../Titles/Title/Title'
import { List } from '../List/List'
import { Pagination } from '@material-ui/lab'
import './CharactersPresenter.css'
import { ThemeContext } from '../../contexts/theme-context'

export const ListCharacters = (props) => {
    const { characters, dark } = props
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
    return (
        <>
            {currentPosts && (
                <>
                    <Pagination
                        className={dark ? 'dark' : 'root'}
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
    const { dark, theme } = React.useContext(ThemeContext)
    return (
        <>
            <Title theme={theme} title="Characters"></Title>
            <ListCharacters {...props} dark={dark} />
        </>
    )
}
