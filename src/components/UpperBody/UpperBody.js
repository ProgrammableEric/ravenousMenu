import React, { Component } from 'react';
import food1 from '../../assets/food-1.jpg';
import food2 from '../../assets/food-2.jpg';
import food3 from '../../assets/food-3.jpg';
import food4 from '../../assets/food-4.jpg';
import food5 from '../../assets/food-5.jpg';
import food6 from '../../assets/food-6.jpg';
import './UpperBody.css';



class UpperBody extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UpperBodyList: [
                {
                    title: "Office Gathering",
                    doubleWidth: false,
                    img: food1,
                    description: "Whether you’re hosting clients, planning a work event or feeding your team, check out our selection of platters created just for the office.", 
                    jump: "View Office Catering →",
                    id: 1,
                },
                {
                    title: "Comfort Food",
                    doubleWidth: true,
                    img: food5,
                    description: "Classic, comforting dishes that always hit the spot.", 
                    jump: "View Comfort food →",
                    id: 2
                }, 
                {
                    title: "Healthy",
                    doubleWidth: true,
                    img: food4,
                    description: "Ease your body, refresh your mind.", 
                    jump: "View Healthy food →",
                    id: 3,
                }, 
                {
                    title: "Local Gem",
                    doubleWidth: false,
                    img: food3,
                    description: "Discover a new local favourite with recommendations from our expert restaurant team.", 
                    jump: "View local gem →", 
                    id: 4
                }, 
                {
                    title: "Only on Ravenous",
                    doubleWidth: true,
                    img: food2,
                    description: "Whether high street faves or local haunts, you won't find these guys anywhere else.",
                    jump: "View Only on Ravenous→",
                    id: 5
                }
            ], 
        }
    }

    render() {

        const { UpperBodyList } = this.state;
        
        return(
            <div className="UpperBody">
                <div className="UpperBodyWrapper">
                    <div className="UpperBodyTitle">What's on the menu?</div>
                    <div className="flexContainer">
                        {
                            UpperBodyList.map( (item) => {
                                let background = {backgroundImage: `url(${item.img})`};
                                return (
                                    <div className={`ListItem ${item.doubleWidth ? 'Double' : 'Single'}`}>
                                        <a>
                                        <div className="ListItem-img" style={background}>
                                        <div className="grayCover">
                                            <span>{item.title}</span>
                                        </div>
                                        </div>
                                        </a>
                                        <p className="ListItem-desc">{item.description}</p>
                                        <a><p className="Jump">{item.jump}</p></a>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}



export default UpperBody;