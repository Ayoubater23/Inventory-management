import React from 'react'
import img5 from './../images/Icon-box.png';
import img1 from './../images/Icon-list.png';


const DashBoard = (props) => {


    return (
        <div className="dashboard-container">
            <img className="dashboard" src={img5} alt="DashBoard"/>
            <div className="dashboard-icons">
                <img className="list-btn" src={img1} alt="DashBoard-icon1" onClick={props.toggleListVisibilty}/>
            </div>

        </div>
    )
}

export default DashBoard
