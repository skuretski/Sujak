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
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <div className="well">
                            <h1>Top News</h1>
                                <h3>This site has officially launched!</h3>
                                <p> After graduation in June 2017, I got to work on this site to 
                                    compile everything into one.
                                </p><br/>
                            <h1>This Stack</h1>
                                <p>Developers throw the word "stack" around. There are actually 
                                    different kinds of references to stack in the tech world!
                                </p>
                                    <ul>
                                        <li>Last-In, First-Out Data Structure
                                            <img src="http://i.imgur.com/0jAmSgum.png" 
                                                alt="ds_stack" 
                                                className="rounded float-left"/>
                                        </li>
                                        <li>Network Protocol Stack</li>
                                        <li>Layers of Technology to Build an Application</li>
                                    </ul> 
                                <p>
                                    For this site name, I refer to stack in the latter form: the layers of technologies used to build something.
                                    This could be a back-end server which communicates with a database and serves users web pages to view, commonly
                                    known as client-server architecture.  
                                    I have used <a href="https://facebook.github.io/react/" target="_blank">React</a> for most of the 
                                    front-end work, along with <a href="http://getbootstrap.com/" target="_blank">Bootstrap v3.3.7</a> for styling.
                                    All of this is "bundled" up with <a href="https://webpack.github.io/" target="_blank">Webpack</a> and hosted with 
                                    <a href="https://www.heroku.com" target="_blank"> Heroku.</a> I have been
                                    an AWS user for almost a year, but my free tier is expiring, so I switched to Heroku for this application. 
                                    I'm still a fan of AWS since it's nice to have my own infrastructures in the cloud, like a Linux box.  
                                </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <TwitterTimeline/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News;