import React, { Component } from 'react';

class About extends Component{
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
                        </div> { /* <-- END WELL --> */}
                    </div> {/* <-- END COL-MD-8 --> */}
                    <div className="col-md-2"/>
                </div> {/* <-- END ROW --> */}
            </div>
        )
    }
}

export default About;