import React from 'react';
import './PlayerBanner.sass'


const PlayerBanner = (props) => {
    return (
        <div className="pb-wrapper">
            <img src={props.avatar} alt="avatar missing" className="pb-avatar"/>
            <div className="pb-name">
                {props.name}
            </div>
        </div>
    );
};

export default PlayerBanner;