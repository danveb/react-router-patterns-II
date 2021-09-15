import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'

const ColorsForm = ({ addColor }) => {

    // initialize INITIAL_STATE
    const INITIAL_STATE = {
        colorName: '',
        color: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE) 
    const history = useHistory() 

    // handleChange() 
    const handleChange = (e) => {
        // e.target 
        const { name, value } = e.target 
        setFormData(data => ({
           ...data, 
           [name]: value  
        }))
    }

    // handleSubmit()
    const handleSubmit = (e) => {
        e.preventDefault() 
        // use props 
        addColor(formData) 
        // reset state
        setFormData(INITIAL_STATE) 
        // redirect to homepage
        history.push('/colors') 
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="colorName">Color Name</label>
            <input 
                id="colorName"
                type="text"
                name="colorName"
                placeholder="Color Name"
                value={formData.colorName} 
                onChange={handleChange} 
            /> 

            <label htmlFor="color">Color Value</label>
            <input 
                id="color"
                type="text"
                name="color"
                placeholder="color"
                value={formData.color} 
                onChange={handleChange} 
            /> 
            <button>Add this color</button>
        </form>
    )
}

export default ColorsForm 