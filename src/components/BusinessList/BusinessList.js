import React from 'react'
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const { backToMain } = this.props;
        return (        
            <div className="BusinessList">
                { this.props.businesses.map((business) => {
                    return <Business business={business} key={business.id}/>
                }
                )}
                <a className="button" onClick={backToMain}>Back to homepage</a>
            </div>
        )
    }
}

export default BusinessList; 