import React from 'react';

function Car(props) {
    console.log(props);

    return (
        <div className="Car">
            <div className="cardiv glow">
                {props.name}
            </div>
        </div>
    )
}

export default Car;