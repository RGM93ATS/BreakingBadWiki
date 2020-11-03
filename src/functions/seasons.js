import _ from 'lodash'

export const getDeathsBySeasonAndEpisode = (deaths, season, episode) => {
    return _.filter(
        deaths,
        (v) => _.includes(season, v.season) && _.includes(episode, v.episode)
    )
}

export const fixSeasonArray = (array) => {
    const seasons = [...new Set(array.map((a) => a.season))]
    const errorData = seasons.splice(1, 1)
    return seasons.filter((s) => s !== errorData)
}

export const fixEpisodesArray = (array, index) => {
    let episodesBySeasons = []
    index &&
        index.map((season) =>
            episodesBySeasons.push(array.filter((a) => a.season === season))
        )
    return episodesBySeasons
}
