import axios from 'axios'
const API_QUOTES = 'https://www.breakingbadapi.com/api/quotes/'
const API_QUOTE = 'https://www.breakingbadapi.com/api/quote'
const API_QUOTE_RANDOM = 'https://www.breakingbadapi.com/api/quote/random/'

export const getQuotes = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_QUOTES)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getQuote = (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_QUOTES + id)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getQuotesByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_QUOTE + '?author=' + author)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getRandomQuote = () => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_QUOTE_RANDOM)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}

export const getRandomQuoteByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        axios
            .get(API_QUOTE_RANDOM + '?author=' + author)
            .then((response) => {
                resolve(response)
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}
