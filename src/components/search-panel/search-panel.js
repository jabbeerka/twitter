import React from 'react';
import './search-panel.css';


export default class SearchPanel extends React.Component {

    state = {
        searchInput: ""
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({
            searchInput: value
        });
        this.props.onUpdateSearch(value);
    }
    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записи"
                value={this.state.searchInput}
                onChange={this.onChange}
            />
        )
    }
}