import { useState, useEffect } from 'react'
import { getDeaths } from '../../services/killers/killerServices'

const useGetDeaths = (order) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getDeaths().then((resp) => {
            setData(resp)
        })
    }, [data, order])

    return data
}

export default useGetDeaths
