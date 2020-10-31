import React from 'react'
import { Home } from '../../pages/Home'
import { Seasons } from '../../pages/Seasons'
import { Season } from '../../pages/Season'
import { Characters } from '../../pages/Characters/Characters'
import { Character } from '../../pages/Characters/Character'
import { Killers } from '../../pages/Killers'
import { Killer } from '../../pages/Killer'

const routes = {
    '/': () => <Home />,
    '/seasons': () => <Seasons />,
    '/season': () => <Season />,
    '/characters': () => <Characters />,
    '/character': () => <Character />,
    '/killers': () => <Killers />,
    '/killer': () => <Killer />,
}
export default routes
