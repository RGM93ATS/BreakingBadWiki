import axios from 'axios'
import _ from 'lodash'
const API_SEASONS = 'https://www.breakingbadapi.com/api/episodes/'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export const getSeasons = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_SEASONS, {
                cancelToken: source.token,
            })
            .then((response) => {
                const resp = _.filter(response.data, (v) =>
                    _.includes('Breaking Bad', v.series)
                )
                resolve(resp)
            })
            .catch((error) => {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message)
                    source.cancel('Operation canceled by the user.')
                } else {
                    console.error(error)
                    reject(new Error('fail'))
                }
            })
    })
}

export const getEpisode = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_SEASONS + id)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getEpisodesByName = (name) => {
    return getSeasons().then((response) => {
        return _.filter(response.data, (v) => _.includes(name, v.title))
    })
}

export const getEpisodesByCharacter = (seasonsAppearance, character) => {
    return getSeasons().then((resp) => {
        const appearances = seasonsAppearance && seasonsAppearance.map(String)
        const seasons = _.filter(resp, (v) => _.includes(appearances, v.season))
        return _.filter(seasons, (v) => _.includes(v.characters, character))
    })
}

export const getEpisodeBySeasonAndEpisode = (season, episode) => {
    return getSeasons().then((resp) => {
        const ss = _.filter(resp, (v) => _.includes(String(season), v.season))
        const ep = _.find(ss, { episode: String(episode) })
        return ep
    })
}
