import React from 'react';

import avatar from './93.png';

import './LandingPage.css'

function LandingPage (){
    return(

        <div>
            <div class = "d-flex align-items-center justify-content-center mt-5">
                <img src={avatar} width="400" height="400"/>
            </div>
            <div class="d-flex p-2" >
            </div>
            <div class={"container"}>
                <div className={"row"}>
                    <div className="col-sm">
                        <div className={"banner-text"}>

                            <h1>
                                Full Stack Developer
                                <hr/>
                                <p class={"mt-4"}>| HTML | CSS | JavaScript | React | Bootstrap |</p>
                                <p>| C++ | Python | Java | MySQL|</p>
                                <p class={"pb-4"}>| Swift | Flutter |</p>
                            </h1>
                        </div>

                    </div>
            </div>


        </div>
</div>

    )
}

export default LandingPage;
