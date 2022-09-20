import React from 'react';


function List(props) {
    return (
    <ul>
        {props.images.map((image, index) => <li key={index}> {image} </li>)}
    </ul>
    )
    
}

export default List;