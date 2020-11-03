import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete, {
    createFilterOptions,
} from '@material-ui/lab/Autocomplete'
import CircularProgress from '@material-ui/core/CircularProgress'
import { handleData } from '../../functions/search'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setSearch } from '../../actions/search/search'
import { withRouter } from 'react-router-dom'

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

const filter = createFilterOptions()

export const BreakingSearch = (props) => {
    const { search, setSearch } = props
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(search.search)
    const [options, setOptions] = useState([])
    const [contentLoaded, setContentLoaded] = useState(false)
    const loading = open && options.length === 0

    console.log('search', search)
    useEffect(() => {
        let active = true
        if (!loading && contentLoaded && options.length !== 0) {
            return undefined
        } else if (!contentLoaded && options.length === 0) {
            ;(async () => {
                const results = handleData().then((results) => results)
                await sleep(5e3)
                if (active) {
                    results.then((r) => {
                        setOptions(Object.keys(r).map((key) => r[key]))
                        setContentLoaded(true)
                    })
                }
            })()
        }
        return () => {
            active = false
        }
    }, [loading, contentLoaded, options])

    const handleValue = (value) => {
        if (value) {
            setValue({ value })
            const params = {
                pathname: `/${value.search}${
                    value.id ? `/${value.id}` : `/${value.title}`
                }`,
                state: { name: value.title },
            }
            props.history.push(params.pathname, params.state)
            props.history.go(0)
        }
    }

    return (
        <Autocomplete
            id="breakinsearch"
            value={value}
            open={open}
            onOpen={() => {
                setOpen(true)
            }}
            onClose={() => {
                setOpen(false)
            }}
            onChange={(event, newValue) => {
                console.log('2', newValue)
                handleValue(newValue)
            }}
            getOptionSelected={(option, value) => option.title === value.name}
            getOptionLabel={(option) => option.title || ''}
            filterOptions={(options, params) => {
                const filtered = filter(options, params)
                if (params.inputValue !== '') {
                    filtered.push({
                        inputValue: params.inputValue,
                    })
                    // setSearch(params.inputValue) --- Inyección de nuevo valor de filtrado de búsqueda para la store
                }
                return filtered
            }}
            options={
                options && options.sort((a, b) => -b.type.localeCompare(a.type))
            }
            groupBy={(option) => option.type}
            loading={contentLoaded}
            renderOption={(option) => option.title}
            style={{
                width: '50%',
                backgroundColor: 'white',
                margin: '0% 20% 0% 10%',
                justifyContent: 'right',
                flexGrow: '1',
                display: 'inline-flex',
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            freeSolo
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Breaking Search"
                    variant="filled"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <React.Fragment>
                                {loading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                        style={{ marginBottom: '15px' }}
                                    />
                                ) : null}
                                {params.InputProps.endAdornment}
                            </React.Fragment>
                        ),
                    }}
                />
            )}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        search: state,
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            setSearch,
        },
        dispatch
    )
}

export const BreakingConnected = connect(
    mapStateToProps,
    mapDispatchToProps
)(BreakingSearch)
export default withRouter(BreakingConnected)
