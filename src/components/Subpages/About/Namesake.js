import React, { Component } from 'react';

class Namesake extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1"/>
                    <div className="col-md-10">
                        <div className="well">
                            <h1>Why Sujak Stack</h1>
                                <p>Developers throw the word "stack" around. There are actually 
                                    different kinds of references to stack in the tech world! Generally speaking,
                                    a stack refers to layers. 
                                </p><br/>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media-left">
                                        <img className="image-responsive" src="http://i.imgur.com/TwKNpGUm.png" alt="sujak_stack"/>
                                    </div>
                                </div> { /* <!-- end col-sm-4 --> */}
                                <div className="col-sm-8">
                                    <h3 className="image-responsive">Last-In, First-Out Data Structure</h3>
                                        <p>
                                            This structure holds data like a cart line at a grocery store. A leaving shopper 
                                            puts the cart in the line, and another person comes along and takes 
                                            that same cart because it's the top-most. The very first cart of the 
                                            line will not see a shopper until all the other carts before it are taken. 
                                        </p>
                                </div> { /* <!-- end col-sm-7 --> */}
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media-left">
                                        <img className="image-responsive" src="http://i.imgur.com/58TCUpHm.png" alt="net_prot"/>
                                    </div>
                                </div> { /* <!-- end col-sm-6 --> */}
                                <div className="col-sm-8">
                                    <h3 className="media-heading">Network Protocol Stack</h3>
                                        <p>The network protocol stack describes the way in which data can travel through a network.
                                            Together, each layer serves a purpose to package the data and send it on its way to the receiver. 
                                        </p>
                                </div> { /* <!-- end col-sm-6 --> */}
                            </div> {/* <!-- end row --> */}
                            <hr/>
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="media-left">
                                        <img src="http://i.imgur.com/vpWQxWhm.png" className="img-responsive" alt="dev_stack"/>
                                    </div>
                                </div> { /* <!-- end col-sm-6 --> */}
                                <div className="col-sm-8">
                                    <h3 className="media-heading">Web Developer Stack</h3>
                                        <p>Web and application developers often refer to different types of developers by 
                                            front-end, back-end or full stack.
                                        </p>
                                        <ul>
                                            <li>
                                                <h4>Front End</h4><p>This usually involves what an end-user might see, such as 
                                                HTML, CSS styling, and scripts when you click something.</p>
                                            </li>
                                            <li>
                                                <h4>Back End</h4><p>Back end developers usually focus on the inner workings of 
                                                    an application, such as the server, network requests, performance, and communication
                                                    with the databases.
                                                </p>
                                            </li>
                                            <li>
                                                <h4>Full Stack</h4><p>
                                                    Full stack devs encompass all of these things into one. They see an application 
                                                    in its entirety and can wear many different hats. 
                                                </p>
                                            </li>
                                        </ul>
                                </div> { /* <!-- end col-sm-6 --> */}
                            </div> {/* <!-- end row --> */}
                            <hr/>
                            <div className="container-fluid">
                                <h3>Sujak</h3><p>
                                    For this site name, Sujak is a combination of my initials. It all started when I had a make-believe 
                                    cookie business in elementary school and my company name was Sujak (thanks parents for your business insight!). 
                                    I also use Sujak as my gamer tag and character names.  
                                    </p><br/>
                                <h3>Stack</h3><p>  
                                    A stack is made up of layers to make one. I consider this analogous to myself. Developer, coder, gamer, 
                                    nurse, dachshund lover, writer, cook, traveler, ... many different facets.    
                                    </p><br/>
                                <h3>This Actual Stack</h3>
                                    <p>For this website I used <a href="https://facebook.github.io/react/" target="_blank">React</a> for most of the 
                                    front end work, along with <a href="http://getbootstrap.com/" target="_blank">Bootstrap v3.3.7</a> for styling.
                                    All of this is bundled up with <a href="https://webpack.github.io/" target="_blank">Webpack</a> and hosted with 
                                    <a href="https://www.heroku.com" target="_blank"> Heroku.</a> I have been
                                    an AWS user for almost a year, but my free tier is expiring, so I switched to Heroku for this application. 
                                    I'm still a fan of AWS since it's nice to have my own infrastructures in the cloud, like a Linux box to play around 
                                    with.  
                                </p><br/>
                            </div> { /* <!-- end container-fluid --> */}
                        </div> { /* <!-- end well --> */ }
                    </div> { /* <!-- end col-md-10--> */}
                    <div className="col-md-1"/>
                </div> { /* <!-- end row --> */ }
            </div>
        );
    }
}

export default Namesake;

