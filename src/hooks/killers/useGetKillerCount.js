import { useState, useEffect } from 'react'
import { getKillerCountByName } from '../../services/killers/killerServices'

const useGetKillerCountByName = (name) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getKillerCountByName(name).then((resp) => {
            setData(resp)
        })
    }, [data, name])

    return data
}

export default useGetKillerCountByName
