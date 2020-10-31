import React, { useState, useEffect, useRef } from 'react'
import { Card } from '../../Card/Card'
import Body from '../../Card/Body/Body'
import Loader from 'react-loader-spinner'
import { KillerDetails } from './KillerDetails'

export const CardKiller = (props) => {
    const { killer } = props
    const [loading, setLoading] = useState(false)
    const mounted = useRef(null)

    useEffect(() => {
        mounted.current = true
        setLoading(true)
        if (killer) {
            if (mounted.current) {
                setLoading(false)
            }
        }
        return () => (mounted.current = false)
    }, [killer, setLoading, loading])

    return (
        <>
            {loading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={2000}
                />
            )}
            {!loading && killer && (
                <>
                    <Card name={`${killer.death}`}>
                        <KillerDetails {...props} />
                    </Card>
                </>
            )}
        </>
    )
}

export const KillerPresenter = (props) => {
    const { theme } = props
    return (
        <header className={theme?.dark ? 'darkMode' : 'App-header'}>
            <CardKiller {...props} />
        </header>
    )
}
