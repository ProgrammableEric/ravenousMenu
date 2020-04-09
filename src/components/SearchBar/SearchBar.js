import React from 'react'
import './SearchBar.css'
import pin from '../../assets/pin.png'
import GMap from '../../util/GoogleMap'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            predictions: [],
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating'  , 
            'Most Reviewed': 'review_count'
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    autoComplete(term) {
        GMap.autoComplete(term).then(
            (predictions) => {
                this.setState( {predictions: predictions} );
            }
        )
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) return 'active';
        else return '';
    }

    handleSearch(event) { 
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        event.preventDefault();
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption,
        })
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value});
    }
    
    handleLocationChange(event) {
        this.setState({ location: event.target.value});
        this.autoComplete(event.target.value);
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            // class: Active or ''
            // 注意 key 的作用： 
            return (<li key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
            </li>)
        });
    }
    

    render() {
        return (
            <div className="SearchBar" >
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields"> 
                    <input className="Bname" placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <div className="Where">
                        <img className="pin" src={pin} alt='pin icon'/>
                        <input placeholder="Where?" onChange={this.handleLocationChange}/>
                    </div>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
      )
    }
}

export default SearchBar