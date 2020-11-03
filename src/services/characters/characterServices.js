import axios from 'axios'
const API_CHARACTERS = 'https://www.breakingbadapi.com/api/characters/'
const API_CHARACTERS_NAME = 'https://www.breakingbadapi.com/api/characters'
const API_CHARACTERS_RANDOM =
    'https://www.breakingbadapi.com/api/characters?category='

export const getCharacters = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
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
    name = name.toString().replace(' ', '+')
    return new Promise((resolve, reject) => {
        axios
            .get(API_CHARACTERS_NAME + '?name=' + name)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
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
