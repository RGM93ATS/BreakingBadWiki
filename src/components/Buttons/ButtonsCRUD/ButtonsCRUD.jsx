import React from 'react'

import { AiFillDelete } from 'react-icons/ai'
import { FaSyncAlt } from 'react-icons/fa'
import { Button } from '../../Buttons/Button/Button'

export const ButtonsCRUD = (props) => {
    const { handleUser, isList } = props
    console.log('isListPre', isList)
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
                        : {
                              display: 'flex',
                              justifyContent: 'center',
                              padding: '10%',
                          }
                }
            >
                <Button action="update" updateUser={(e) => handleUser(e)}>
                    <FaSyncAlt />
                </Button>
                <Button action="delete" deleteUser={(e) => handleUser(e)}>
                    <AiFillDelete />
                </Button>
            </div>
        </>
    )
}
