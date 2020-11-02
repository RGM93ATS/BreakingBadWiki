import { useState, useEffect } from 'react'
import { getKillerByName } from '../../services/killers/killerServices'

const useGetKillersByName = (name) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getKillerByName(name).then((resp) => {
            setData(resp)
        })
    }, [data, name])

    const setKillers = (name) => {
        getKillerByName(name).then((resp) => {
            setData(resp)
        })
    }

    return { data, setKillers }
}

export default useGetKillersByName
