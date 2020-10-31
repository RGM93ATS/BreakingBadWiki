import { useState, useEffect } from 'react'
import { getQuotesByAuthor } from '../../services/quotes/quoteServices'
import _ from 'lodash'

const useGetQuotesByAuthor = (name) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        /*getQuotesByAuthor(name).then((resp) => {
            setData(resp.data)
        })*/
    }, [name])

    const getQuotesByCharacter = (name) => {
        getQuotesByAuthor(name).then((resp) => {
            setData(resp.data)
        })
    }

    return { data, getQuotesByCharacter }
}

export default useGetQuotesByAuthor
