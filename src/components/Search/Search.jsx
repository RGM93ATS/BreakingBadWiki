import React from 'react'
import TextField from '@material-ui/core/TextField'
import Autocomplete, {
    createFilterOptions,
} from '@material-ui/lab/Autocomplete'
import { handleData } from '../../functions/search'
import { withRouter } from 'react-router-dom'
import { CircularProgress } from '@material-ui/core'

const filter = createFilterOptions()

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            results: null,
            episodes: null,
            characters: null,
            killers: null,
            quotes: null,
            loading: false,
            loadingFiltering: false,
            filter: '',
            value: '',
            toggle: false,
        }
    }

    options = []

    componentDidMount() {}

    componentDidUpdate(prevProps, newState) {
        if (prevProps.results !== this.state.results) {
            this.loadData()
        }
    }

    loadData = () => {
        handleData().then((results) => {
            this.options = results
            this.setState({
                results,
                loading: false,
            })
        })
    }

    handleValue = (value) => {
        if (value) {
            this.setState({ value })
            const params = {
                pathname: `/${value.search}${value.id && value.id}`,
                state: { name: value.title },
            }
            this.props.history.replace(params)
        }
    }
    handleToggle = (toggle) => {
        this.setState({ toggle })
    }

    render() {
        const { value, loading } = this.state
        return (
            <React.Fragment>
                <Autocomplete
                    disabled={loading}
                    value={value}
                    loading={loading}
                    onChange={(event, newValue) => {
                        if (typeof newValue === 'string') {
                            setTimeout(() => {
                                this.handleToggle(true)
                            })
                        } else if (newValue && newValue.inputValue) {
                            this.handleToggle(true)
                        } else {
                            this.handleValue(newValue)
                        }
                    }}
                    filterOptions={(results, params) => {
                        const filtered = filter(results, params)
                        if (params.inputValue !== '') {
                            filtered.push({
                                inputValue: params.inputValue,
                            })
                        } else {
                            this.loadData()
                        }

                        return filtered
                    }}
                    id="searchBreaking"
                    options={
                        this.options &&
                        this.options.sort(
                            (a, b) => -b.type.localeCompare(a.type)
                        )
                    }
                    groupBy={(option) => option.type}
                    getOptionLabel={(option) => {
                        if (typeof option === 'string') {
                            return option
                        }
                        if (option.inputValue) {
                            return option.inputValue
                        }
                        return option.title
                    }}
                    selectOnFocus
                    clearOnBlur
                    handleHomeEndKeys
                    renderOption={(option) => option.title}
                    style={{
                        width: '50%',
                        backgroundColor: 'white',
                        margin: '0% 20% 0% 10%',
                        justifyContent: 'right',
                        flexGrow: '1',
                        display: 'inline-flex',
                    }}
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
                                                color="#032202"
                                                size={20}
                                                style={{ marginBottom: '5px' }}
                                            />
                                        ) : null}
                                        {params.InputProps.endAdornment}
                                    </React.Fragment>
                                ),
                            }}
                        />
                    )}
                />
            </React.Fragment>
        )
    }
}

export default withRouter(Search)
