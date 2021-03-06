import React from 'react'
import './SearchBar.css'
import GMap from '../../util/GoogleMap'
import pin from '../../assets/pin.png'
import gps from '../../assets/gps.png'
import aim from '../../assets/aim.png'


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match',
            limit: 15,
            predictions: [], 
            show: false,
            placeBoxAlert: false, 
            businessesBoxAlert: false 
        };
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating'  , 
            'Most Reviewed': 'review_count' 
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.searchGMap = this.searchGMap.bind(this);
        this.handlePredictionSearch = this.handlePredictionSearch.bind(this);
    }

    searchGMap(term) {
        GMap.autoComplete(term).then(
            (predictions) => {
                this.setState( {predictions: predictions} );
            }
        );
    }

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) return 'active';
        else return '';
    }

    handleSearch(event) { 
        // todo: check both input boxes before submitting search request. 
        let termCheck  = document.getElementById('termInput').value === '';   // true if empty
        let placeCheck = document.getElementById('placeInput').value === '';  // true if empty
        
        if (termCheck) this.setState( {businessesBoxAlert: true} );
        if (placeCheck) this.setState( {placeBoxAlert: true} );
        
        if (!termCheck && !placeCheck) {
            this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy, this.state.limit);
            event.preventDefault();
        }
    }

    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption,
        })
    }

    handleTermChange(event) {
        this.setState({ term: event.target.value, 
                        businessesBoxAlert: false });
    }
    
    handleLocationChange(event) {
        this.setState({ location: event.target.value, 
                        placeBoxAlert: false });
        this.searchGMap( event.target.value );
        this.state.show = true;
        if (!event.target.value) this.state.show = false;
    }

    handlePredictionSearch(description) {
        this.setState({ location: description});
        this.setState({ show: false});
    }

    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            console.log("rednering sortby");
            let sortByOptionValue = this.sortByOptions[sortByOption];
            // class: Active or ''
            return (<li key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)}
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
            {sortByOption}
            </li>)
        });
    }

    renderAutoComplete() {
        const predictions = this.state.predictions;
        return (predictions.map( (prediction) => {
            const id = prediction.id;
            const description = prediction.description;
            return (
                <li key={id}>
                    <button className="Prediction-submit" onClick={() => this.handlePredictionSearch(description)}>
                        <div className="buttonFill">
                            <img src={aim} alt='little' className="aimIcon"/>
                            <div className="text">{description}</div>
                        </div>
                    </button>
                </li>
            )
        })
        ); 
    }
    
    render() {

        const {placeBoxAlert, businessesBoxAlert} = this.state;
        return (
            <div className="searchBarWrapper" id="top">
            <div className="SearchBar" >
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul> 
                </div>
                <div className="SearchBar-fields"> 
                    <input className={`Term ${businessesBoxAlert ? 'inputAlert' : ''}`} id="termInput" placeholder="Search Businesses" onChange={this.handleTermChange} />
                    <div className={`LocationWrapper ${placeBoxAlert ? 'inputAlert' : ''}`} id={`${placeBoxAlert ? 'inputAlert' : ''}`}>
                        <div className="LocationInputWrapper">
                            <img src={pin} alt="pin icon" className="pin"/>
                            <input placeholder="Where" id="placeInput" onChange={this.handleLocationChange} value={this.state.location}/>
                        </div>
                        {/* 注意update 的方法 */}
                        {   this.state.show ? (
                        <div className="autoCompleteWrapper">
                            <ul className="autoCompleteList">
                                {this.renderAutoComplete()}
                            </ul>
                            <div className="poweredBy">
                                <span>Powered by</span>
                                <img className="poweredByIcon" src={gps} alt="google logo"/>
                            </div> 
                        </div>   
                    ) : null}
                    </div>
                </div>
                <div className="SearchBar-submit">
                    <a onClick={this.handleSearch}>Let's Go</a>
                </div>
            </div>
            </div>
      )
    }
}

export default SearchBar


