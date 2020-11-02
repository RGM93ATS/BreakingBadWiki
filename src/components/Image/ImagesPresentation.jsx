import React from 'react'
import { ImagePresentation } from './ImagePresentation'

export const ImagesPresentation = () => {
    const cards = [
        {
            image:
                'https://vader.news/__export/1592538255681/sites/gadgets/img/2020/06/19/cabecera-breaking-bad.jpg_1889316708.jpg',
            title: 'Temporadas',
            link: '/seasons',
        },
        {
            image: 'https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg',
            title: 'Personajes',
            link: '/characters',
        },
        {
            image:
                'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/07/gus-fring-breaking-bad-1995127.jpeg',
            title: 'Asesinos',
            link: 'killers',
        },
    ]

    return (
        <>
            <div
                style={{
                    backgroundColor: '#032202',
                    margin: '4% 6% 0% 10%',
                    borderRadius: '1rem',
                }}
            >
                <img
                    src={process.env.PUBLIC_URL + '/logo.png'}
                    style={{
                        display: 'inline-flex',
                        justifyContent: 'center',
                        marginTop: '10px',
                    }}
                    width={250}
                    height={150}
                    alt="logo"
                />
            </div>
            <div
                style={{
                    margin: '5% 10% 10% 5%',
                    display: 'inline-flex',
                }}
            >
                {cards &&
                    cards.map((card, index) => {
                        return <ImagePresentation card={card} key={index} />
                    })}
            </div>
        </>
    )
}
