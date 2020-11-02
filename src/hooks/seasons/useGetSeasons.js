import { useState, useEffect, useRef } from 'react'
import { getSeasons } from '../../services/seasons/seasonServices'

const useGetSeasons = () => {
    const [data, setData] = useState([])
    let index = []
    let episodes = []
    useEffect(() => {
        /*getSeasons().then((resp) => {
            index = fixSeasonArray(resp)
            episodes = fixEpisodesArray(resp, index)
            setData({ index, episodes })
        })*/
    }, [data])

    return data
}

export default useGetSeasons

/*const fixSeasonArray = (array) => {
    const seasons = [...new Set(array.map((a) => a.season))]
    const errorData = seasons.splice(1, 1)
    return seasons.filter((s) => s !== errorData)
}

const fixEpisodesArray = (array, index) => {
    let episodesBySeasons = []
    index &&
        index.map((season) => {
            episodesBySeasons.push(array.filter((a) => a.season === season))
        })
    return episodesBySeasons
}*/
