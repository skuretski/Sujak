import React, { Component } from 'react';

class Games extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"/>
                    <div className="col-md-8">
                        <div className="well">
                            <h1>Games</h1>
                            <p>Coming soon!</p>
                        </div> {/* <!-- END WELL --> */}
                    </div> { /* <!-- END COL-MD-8 --> */}
                    <div className="col-md-2"/>
                </div> { /* <!-- END ROW --> */}
            </div>
        )
    }
}

export default Games;