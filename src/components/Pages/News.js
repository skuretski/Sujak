import React, { Component } from 'react';
import TwitterTimeline from '../Twitter/TwitterTimeline';

class News extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-8">
                        <div className="well">
                        <h1>Top News</h1>   
                            <h3>This site has officially launched!</h3>
                                <p>I'm very excited to announce this site is running as of June 30, 2017. 
                                </p>
                                <br/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <TwitterTimeline user="TheSushiQ" limit="4"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;