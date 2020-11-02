import { useState, useEffect } from 'react'
import { getCharacterByName } from '../../services/characters/characterServices'

const useGetCharactersByName = (name) => {
    const [data, setData] = useState([])

    useEffect(() => {
        getCharacterByName('?name=' + name).then((resp) => {
            setData(resp)
        })
    }, [name])

    const setCharacters = (name) => {
        getCharacterByName('?name=' + name).then((resp) => {
            setData(resp)
        })
    }

    return { data, setCharacters }
}

export default useGetCharactersByName
