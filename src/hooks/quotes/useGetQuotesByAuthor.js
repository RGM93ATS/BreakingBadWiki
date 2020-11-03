import { useState, useEffect } from 'react'
import { getQuotesByAuthor } from '../../services/quotes/quoteServices'

const useGetQuotesByAuthor = (name) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const interval = setInterval(() => {
            getQuotesByAuthor(name).then((resp) => {
                setData(resp.data)
            })
        }, 2000)
        return () => {
            clearInterval(interval)
        }
    }, [name])

    return data
}

export default useGetQuotesByAuthor
