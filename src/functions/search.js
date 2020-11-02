import _ from 'lodash'

import {
    getEpisodesByName,
    getSeasons,
} from '../services/seasons/seasonServices'
import {
    getCharacterByName,
    getCharacters,
} from '../services/characters/characterServices'
import { getKillerByName, getDeaths } from '../services/killers/killerServices'
import { getQuotesByAuthor, getQuotes } from '../services/quotes/quoteServices'

export const handleData = async (value) => {
    const filter = value || ''
    let episodes = []
    let characters = []
    let deaths = []
    let killers = []
    let quotes = []
    if (filter !== '') {
        return new Promise((resolve, reject) => {
            getEpisodesByName(filter)
                .then((resp) => {
                    episodes = resp
                })
                .then(() => {
                    getCharacterByName(filter)
                        .then((resp) => {
                            characters = resp.data
                        })
                        .then(() => {
                            getQuotesByAuthor(filter)
                                .then((resp) => {
                                    quotes = resp.data
                                })
                                .then(() => {
                                    getKillerByName(filter)
                                        .then((resp) => {
                                            killers = resp
                                        })
                                        .then(() => {
                                            resolve(
                                                setResults(
                                                    episodes,
                                                    characters,
                                                    killers,
                                                    deaths,
                                                    quotes
                                                )
                                            )
                                        })
                                        .catch((error) => {
                                            console.error(error)
                                            reject(new Error('fail'))
                                        })
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
    } else {
        return new Promise((resolve, reject) => {
            getSeasons()
                .then((resp) => {
                    episodes = resp
                })
                .then(() => {
                    getCharacters()
                        .then((resp) => {
                            characters = resp.data
                        })
                        .then(() => {
                            getQuotes()
                                .then((resp) => {
                                    quotes = resp.data
                                })
                                .then(() => {
                                    getDeaths().then((resp) => {
                                        deaths = _.uniqBy(resp, 'responsible')

                                        killers = deaths.map((d) => ({
                                            name: d.responsible,
                                        }))
                                        resolve(
                                            setResults(
                                                episodes,
                                                characters,
                                                killers,
                                                quotes
                                            )
                                        )
                                    })
                                })
                        })
                })
        })
    }
}

const setResults = (episodes, characters, killers, quotes) => {
    const results = [
        {
            title: 'Characters',
            content: characters,
        },
        {
            title: 'Episodes',
            content: episodes,
        },
        {
            title: 'Killers',
            content: killers,
        },
        {
            title: 'Quotes',
            content: quotes,
        },
    ]
    let newResults = []
    let [id, val, type, search] = ''

    results &&
        results.map((res) => {
            switch (res.title) {
                case 'Characters':
                    id = 'char_id'
                    val = 'name'
                    type = 'Characters'
                    search = 'character'
                    break
                case 'Episodes':
                    id = 'episode_id'
                    val = 'title'
                    type = 'Episodes'
                    search = 'episode'
                    break
                case 'Killers':
                    val = 'name'
                    type = 'Killers'
                    search = 'killer'
                    break
                case 'Quotes':
                    id = 'quote_id'
                    val = 'quote'
                    type = 'Quotes'
                    search = 'quotes'
                    break
                default:
                    break
            }
            res.content.map((c) => {
                newResults.push({ id: c[id], title: c[val], type, search })
            })
        })
    return newResults
}
