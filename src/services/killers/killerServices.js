import axios from 'axios'
import _ from 'lodash'

const API_KILLERS = 'https://www.breakingbadapi.com/api/deaths/'
const API_KILLERS_COUNT = 'https://www.breakingbadapi.com/api/death-count/'
const API_KILLER_RANDOM = 'https://www.breakingbadapi.com/api/random-death/'

export const getKillers = (order) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLERS)
            .then((response) => {
                resolve(_.orderBy(response.data, ['number_of_deaths'], [order]))
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getKillerByName = (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_KILLERS)
            .then((response) => {
                resolve(
                    _.filter(response.data, (v) => _.includes(v.death, name))
                )
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
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
            .get(API_KILLERS + name)
            .then((response) => {
                resolve(response)
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
