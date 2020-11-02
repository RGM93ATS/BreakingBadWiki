import {
    getQuotesByAuthor,
    getRandomQuoteByAuthor,
} from '../services/quotes/quoteServices'
import { getEpisodesByCharacter } from '../services/seasons/seasonServices'

export const handleData = async (appearance, name) => {
    let episodes = []
    let quote = []
    let quotes = []
    return new Promise((resolve, reject) => {
        getRandomQuoteByAuthor(name)
            .then((resp) => {
                quote = resp.data[0]
            })
            .then(() => {
                getQuotesByAuthor(name)
                    .then((resp) => {
                        quotes = resp.data
                    })
                    .then(() => {
                        getEpisodesByCharacter(appearance, name)
                            .then((resp) => {
                                episodes = resp
                            })
                            .then(() => {
                                resolve({ episodes, quote, quotes })
                            })
                            .catch((error) => {
                                console.error(error)
                                reject(new Error('fail'))
                            })
                    })
                    .catch((error) => {
                        console.error(error)
                        reject(new Error('fail'))
                    })
            })
            .catch((error) => {
                console.error(error)
                reject(new Error('fail'))
            })
    })
}
