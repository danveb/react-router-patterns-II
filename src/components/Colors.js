import React from 'react' 
import { Link } from 'react-router-dom'

const Colors = ({colors}) => {

    return (
        <div>
            <h4>Please select a color:</h4>
            <ul>
                {colors.map(c => (
                    <li><Link to={`/colors/${c.colorName}`}>{c.colorName}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Colors 