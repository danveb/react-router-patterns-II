import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Colors from './Colors'
import ColorsForm from './ColorsForm' 
import ColorsDetails from './ColorsDetails' 

const Routes = ({ colors, addColor }) => {

    return (
        <Switch>

            <Route exact path="/colors">
                <Colors colors={colors} /> 
            </Route>
            <Route path="/colors/new">
                <ColorsForm addColor={addColor} /> 
            </Route>
            <Route exact path="/colors/:color">
                <ColorsDetails colors={colors} /> 
            </Route>
            <Redirect to="/"/>

        </Switch>
    )
}

export default Routes 