import { useState, useEffect } from 'react'
import { getRandomQuoteByAuthor } from '../../services/quotes/quoteServices'
import _ from 'lodash'

const useGetRandomQuoteByAuthor = (name) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getRandomQuoteByAuthor(name).then((resp) => {
            setData(resp.data[0])
        })
    }, [name])

    const getRandomQuote = (name) => {
        getRandomQuoteByAuthor(name).then((resp) => {
            setData(resp.data[0])
        })
    }

    return {
        data,
        getRandomQuote,
    }
}

export default useGetRandomQuoteByAuthor
