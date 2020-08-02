import React from 'react';

const projects = ["Coming Soon"]

function Python (){
    return(
        <div className ="container-fluid">
            <div className="container-img">
                <div className ="row">
                    {projects.map((project, index) =>{
                        return(
                            <div className="card">
                                <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png" className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{project}</h5>
                                    <p className="card-text">Currently in development</p>
                                    {/*<a href="#" className="btn btn-primary">Go somewhere</a>/*}*/}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Python;
