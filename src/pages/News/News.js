import React, { Component } from 'react';
import TwitterTimeline from './../../components/twitter/TwitterTimeline';

class News extends Component {
    render() {
        return (
            <div className="container-fluid"> 
                <div className="row">
                    <div className="col-md-1" />
                    <div className="col-md-8">
                        <div className="well">
                        <h1>Top News</h1>   
                            <h2>This site has officially launched!</h2>
                                <p>I'm very excited to announce this site is running as of June 30, 2017. 
                                </p>
                                <br />
                            <h2>Battle for the Net!</h2>
                            <h3>Federal Communications Commission and Title II</h3>
                                <p>As of writing, it is possible the FCC may overturn its Title II authority to 
                                    enforce net neutrality. They may implement a different set of rules or may 
                                    completely wipe out those rules and classify Internet as Title I again. 
                                    What this means for you and internet service 
                                    providers:
                                </p>
                                    <ul>
                                        <li><h3>Throttling</h3><p>Your ISP may instill mechanisms to limit your speeds when
                                            watching Netflix and downloading large amounts of data. It could also mean your 
                                            Hulu, Netflix, and Amazon Prime video services will increase in price due to those companies 
                                            having to pay for "fast lanes."</p></li>
                                        <li><h3>ISP Accountability</h3><p>The accountability of ISPs could diminish, meaning if they were to 
                                            mess up i.e. massive infrastructure failure due to gross negligence, the ISP will have less 
                                            recourse in the eyes of the FCC and federal courts under the revocation of Title II. </p></li>
                                        <li><h3>$$$$ and $</h3><p>Inevitably, this means you're at the mercy of your ISP. Hidden fees? Charging for 
                                            faster speeds? Charging for time on the Internet? Yep, they could do that, and your ability to dispute it 
                                            is more difficult since not much will stand up in court.</p></li>
                                        <li><h3>Small Business and Start-up Struggles</h3><p>An open Internet provides the opportunity for smaller, not 
                                            yet established companies to provide their services without having to worry about fast laning and big company 
                                            competition when it comes to Internet access. With the change to Title I for Internet, large companies can do 
                                            whatever they please for the most part, and smaller businesses could struggle to pay for services.</p></li>
                                    </ul>   

                                <h3>How You Can Help</h3>
                                <p>Here is a direct link to the FCC's proposition ironically named "Restoring Internet Freedom": <a 
                                    href="https://apps.fcc.gov/edocs_public/attachmatch/FCC-17-60A1.pdf"
                                    target="_blank" rel="noopener noreferrer">Docket No. 17-108</a>. Please comment on the FCC's website regarding 17-108, or use <a 
                                    href="https://www.battleforthenet.com/" target="_blank" rel="noopener noreferrer">Battle for the Net</a> to send your comments 
                                    to the FCC and Congress. 
                                </p>
                                <br />
                        <h1>Other News</h1>
                            <h2>Graduation</h2>
                                <p>In June 2017, I graduated with a Bachelor of Science in computer science 
                                    from Oregon State University. After many late nights coding, debugging, 
                                    testing, browsing StackOverflow, and crying, I finally finished three years
                                    later. Many thanks to my family, friends, co-workers, and dog for 
                                    their support!
                                </p><br />
                            <h2>Coding Interviews</h2>
                                <p>See above. Now, I am applying to jobs and preparing myself for coding interviews. 
                                    I have been using <a href="https://www.hackerrank.com/" target="_blank" rel="noopener noreferrer">HackerRank</a> for 
                                    coding problems and <a href="http://www.crackingthecodinginterview.com/" target="_blank" rel="noopener noreferrer">
                                    Cracking the Coding Interview</a> by Gayle Laakmann McDowell. The whole process is exciting,
                                    terrifying, and challenging! 
                                </p><br />
                                <p><a href="http://www.crackingthecodinginterview.com/" target="_blank" rel="noopener noreferrer">
                                    Cracking the Coding Interview</a> is a great reference book to review Big-O, data structures, 
                                    string manipulation, and algorithms. I highly recommend it. My last courses geared towards this 
                                    material were about 2-3 years ago, so I am definitely rusty. 
                                    Since <a href="http://www.crackingthecodinginterview.com/" target="_blank" rel="noopener noreferrer">
                                    Cracking the Coding Interview</a> is geared towards Java, I am going to post solutions 
                                    to problems in C++, step-by-step, as I solve them. I plan to include brute force solutions, C++ 
                                    STL structures, optimization, alternative solutions (if I find them), and Big-O breakdown. Coming soon!  
                                </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <TwitterTimeline user="TheSushiQ" limit="4" />
                    </div>
                </div>
            </div>
        );
    }
}

export default News;
