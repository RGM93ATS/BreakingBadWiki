import { useState, useEffect } from 'react'
import { getKillers } from '../../services/killers/killerServices'

const useGetKillers = (order) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getKillers(order).then((resp) => {
            setData(resp)
        })
    }, [data, order])

    const setOrder = (order) =>
        getKillers(order).then((resp) => {
            setData(resp)
        })
    return { data, setOrder }
}

export default useGetKillers
