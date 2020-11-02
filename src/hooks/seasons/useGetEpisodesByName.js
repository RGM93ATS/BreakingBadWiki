import { useState, useEffect } from 'react'
import { getEpisodesByName } from '../../services/seasons/seasonServices'

const useGetEpisodesByName = (name) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getEpisodesByName(name).then((resp) => {
            setData(resp)
        })
    }, [data, name])

    const setEpisodes = (name) => {
        getEpisodesByName(name).then((resp) => {
            setData(resp)
        })
    }

    return { data, setEpisodes }
}

export default useGetEpisodesByName
