import React from 'react'
import { Switch } from '@material-ui/core'
import { Title } from '../Titles/Title/Title'

export const OrderSwitch = (props) => {
    const { checked, dark, theme, handleSwitch } = props
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    marginRight: '15%',
                    marginTop: dark ? '5%' : '4%',
                }}
            >
                <Title
                    theme={theme}
                    title={!checked ? 'DESC' : 'ASC'}
                    size="small"
                />
                <div style={{ margin: '7.5%' }}>
                    <Switch
                        checked={!checked}
                        onChange={handleSwitch}
                        color="primary"
                        name="checkedB"
                        inputProps={{
                            'aria-label': 'primary checkbox',
                        }}
                    />
                </div>
            </div>
        </>
    )
}
