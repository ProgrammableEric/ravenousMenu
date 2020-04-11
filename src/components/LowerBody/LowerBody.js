import React, { Component } from 'react';
import './LowerBody.scss';
import career from '../../assets/career.jpg';
import delivery from '../../assets/delivery.jpg';
import restaurant from '../../assets/restaurant.jpg';


class LowerBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            LowerBodyList: [
                {
                    title: "Rider",
                    img: delivery,
                    description: "Become a rider and enjoy the freedom to fit work around your life. Plus great fees, perks and discounts.", 
                    jump: "Ride with us",
                    id: 1,
                    position: 'left',
                },
                {
                    title: "Restaurant",
                    img: restaurant,
                    description: "Partner with Ravenous and reach more customers than ever. We handle delivery, so you can focus on the food.", 
                    jump: "Partner with us",
                    id: 2,
                    position: 'middle',
                }, 
                {
                    title: "Career",
                    img: career,
                    description: "Our mission is to change the way people eat. It's ambitious, but so are we. And we need people like you.", 
                    jump: "Find out more",
                    id: 3,
                    position: 'right',
                }, 
            ], 
        }
    }

    render() {

        const { LowerBodyList } = this.state;


        return (
            <div className="LowerBody">
                <div className="LowerBodyWrapper">
                    {
                        LowerBodyList.map( (item) => {
                            let background = {backgroundImage: `url(${item.img})`};
                            return(
                                <div className={`LowerBodyListWrapper ${item.position}`}>
                                <div className='LowerBodyList'
                                     style={background}>
                                    <div className="LBListContent">
                                        <div className="LBListTitle">{item.title}</div>
                                        <div className="LBListDescription">{item.description}</div>
                                        <div className='ButtonWrapper'><button>{item.jump}</button></div>
                                    </div>
                                </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        ); 
    }



}


export default LowerBody;