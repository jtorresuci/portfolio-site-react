import React from 'react';
import { Link, Route } from 'react-router-dom';
import Python from './lang/Python'
import ReactJS from './lang/ReactJS'
import Swift from './lang/Swift'
import './Projects.css'

function Projects (){
    const tabs = ["ReactJS", "Swift", "Python"]
    return(
        <div>

            <ul class ="nav justify-content-center">
                {tabs.map((tab, index) => {
                    return (
                        <li >
                            <Link to ={`/Projects/${tab}`} class="tabs-text">{tab}</Link>
                            <div class="link-border"></div>
                        </li>
                    )
                })}
            </ul>
            <Route path={'/Projects/ReactJS'} component={ReactJS}></Route>
            <Route path={'/Projects/Swift'} component={Swift}></Route>
            <Route path={'/Projects/Python'} component={Python}></Route>
        </div>

    )
}

export default Projects;
