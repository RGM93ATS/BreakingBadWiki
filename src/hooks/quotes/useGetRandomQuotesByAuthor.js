import { useState, useEffect } from 'react'
import { getRandomQuoteByAuthor } from '../../services/quotes/quoteServices'

const useGetRandomQuoteByAuthor = (name) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        getRandomQuoteByAuthor(name).then((resp) => {
            setData(resp.data[0])
        })
    }, [name])

    const refresh = (name) => {
        getRandomQuoteByAuthor(name).then((resp) => {
            setData(resp.data[0])
        })
    }

    return { data, setData, refresh }
}

export default useGetRandomQuoteByAuthor
