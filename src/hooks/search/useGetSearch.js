import { useState, useEffect, useRef } from 'react'
import { getCharacterByName } from '../../services/characters/characterServices'
import { getEpisodesByName } from '../../services/seasons/seasonServices'
import { getKillerByName } from '../../services/killers/killerServices'

const useGetSearch = () => {
    const [data, setData] = useState(null)
    const [filter, setFilter] = useState(null)
    const [episodes, setEpisodes] = useState(null)
    const [characters, setCharacters] = useState(null)
    const [killers, setKillers] = useState(null)
    // const mounted = useRef(null)
    const array = []

    useEffect(() => {
        let mounted = true
        if (filter) {
            getCharacterByName('?name=' + filter).then((resp) => {
                if (mounted) {
                    setCharacters(resp)
                }
            })
        }
        return function cleanup() {
            mounted = false
        }
    }, [filter, characters])

    return { data, setFilter }
}

export default useGetSearch
