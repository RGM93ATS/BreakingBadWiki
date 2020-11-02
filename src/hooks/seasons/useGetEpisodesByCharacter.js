import { useState, useEffect } from 'react'
import { getEpisodesByCharacter } from '../../services/seasons/seasonServices'

const useGetEpisodesByCharacter = (appearance, name) => {
    const [data, setData] = useState([])
    useEffect(() => {
        getEpisodesByCharacter(appearance, name).then((resp) => {
            setData(resp)
        })
    }, [appearance, name])

    return data
}

export default useGetEpisodesByCharacter
