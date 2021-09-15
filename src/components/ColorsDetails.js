import React from 'react' 
import { Redirect, Link, useParams } from 'react-router-dom' 

const ColorDetails = ({ colors }) => {

    const { color } = useParams(); 

    // initialize idx
    let idx;
    // initialize inColors as false 
    let inColors = false;
    // loop over length of dogs 
    for(let i = 0; i < colors.length; i++) {
        // if name of loop matches to params
        if(colors[i].colorName === color) {
            idx = i
            inColors = true 
            break; 
        }
    }

    if (!inColors) {
        return <Redirect to='/colors'/>
    }
    
    return (
        <div style={{backgroundColor: `${colors[idx].color}`}}>
            <h1>{colors[idx].colorName}</h1>
            <Link exact to="/colors">Go Back</Link>
        </div>
    )
}

export default ColorDetails