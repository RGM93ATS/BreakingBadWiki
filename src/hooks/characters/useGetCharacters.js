import { useState, useEffect } from 'react'
import { getCharacters } from '../../services/characters/characterServices'

const useGetCharacters = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        getCharacters().then((resp) => {
            setData(resp)
        })
    }, [data])

    return data
}

export default useGetCharacters
