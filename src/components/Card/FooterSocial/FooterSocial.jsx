import React from 'react'
import './FooterSocial.css'
import {
    ButtonSocial,
    FACEBOOK,
    LINKEDIN,
    BEHANCE,
    TWITTER,
} from '../../Buttons/ButtonSocial/ButtonSocial'

export const FooterSocial = () => {
    const lista = [FACEBOOK, LINKEDIN, BEHANCE, TWITTER]
    return (
        <div className="card-footer socialIcon">
            {lista.map((network) => (
                <ButtonSocial icon={network} key={network}></ButtonSocial>
            ))}
        </div>
    )
}

FooterSocial.propTypes = {}
