import React from 'react'
import { FaSyncAlt, FaListAlt } from 'react-icons/fa'
import { Button } from '../Button/Button'

export const ButtonsQuote = (props) => {
    const { isList, size } = props
    return (
        <>
            <div
                style={
                    isList
                        ? {
                              display: 'flex',
                              justifyContent: 'center',
                              padding: '14% 0% 10% 70%',
                          }
                        : size === 'medium'
                        ? {
                              display: 'block',
                              justifyContent: 'center',
                              padding: '10% 0',
                              fontSize: 'xx-large',
                              margin: '0% 0% 0px 5%',
                          }
                        : {
                              display: 'flex',
                              justifyContent: 'center',
                              padding: '10%',
                          }
                }
            >
                <Button
                    size="medium"
                    action="refresh"
                    handleButton={() => props.refreshQuote()}
                >
                    <FaSyncAlt />
                </Button>
                <Button
                    size="medium"
                    action="retrieve"
                    handleButton={() => props.getAllQuotes()}
                >
                    <FaListAlt />
                </Button>
            </div>
        </>
    )
}
