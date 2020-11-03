import { useState, useEffect } from 'react'
import { getCharacterByName } from '../../services/characters/characterServices'

const useGetCharactersByName = (name) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getCharacterByName(name).then((resp) => {
            setData(resp.data[0])
        })
    }, [name])

    return data
}

export default useGetCharactersByName
