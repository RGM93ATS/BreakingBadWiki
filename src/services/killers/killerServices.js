import axios from 'axios'
import _ from 'lodash'

const API_KILLERS = 'https://www.breakingbadapi.com/api/deaths/'
const API_KILLERS_COUNT = 'https://www.breakingbadapi.com/api/death-count/'
const API_KILLER_RANDOM = 'https://www.breakingbadapi.com/api/random-death/'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export const getDeaths = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLERS)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}
export const getKillers = (deaths, order) => {
    let array = []
    const crossed = _.uniqBy(deaths, 'responsible')
    crossed.map((crossObj) =>
        getKillerCountByName(crossObj.responsible).then((result) => {
            array.push(result.data[0])
        })
    )
    return array
}

export const getKillerByName = (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLERS, {
                cancelToken: source.token,
            })
            .then((response) => {
                resolve(
                    _.filter(response.data, (v) => _.includes(v.death, name))
                )
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

export const getKillerCount = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLERS_COUNT)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getKillerCountByName = (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`${API_KILLERS_COUNT}?name=` + name)
            .then((response) => {
                resolve(response.data[0])
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getRandomKiller = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLER_RANDOM)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}
