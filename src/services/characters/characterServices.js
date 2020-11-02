import axios from 'axios'
const API_CHARACTERS = 'https://www.breakingbadapi.com/api/characters/'
const API_CHARACTERS_RANDOM =
    'https://www.breakingbadapi.com/api/characters?category='

const CancelToken = axios.CancelToken
const source = CancelToken.source()

export const getCharacters = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS, {
                cancelToken: source.token,
            })
            .then((response) => {
                resolve(response)
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

export const getCharacterById = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS + id)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getCharacterByName = (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS + '?name=' + name, {
                cancelToken: source.token,
            })
            .then((response) => {
                resolve(response)
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

export const getRandomCharacter = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS_RANDOM)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}
