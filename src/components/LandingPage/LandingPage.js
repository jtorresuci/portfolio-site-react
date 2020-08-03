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
                                <p>HTML/CSS | C++ | Python | JavaScript | React | NodeJS | JS Express</p>
                                <p></p>
                            </h1>
                        </div>

                    </div>
            </div>


        </div>
</div>

    )
}

export default LandingPage;
