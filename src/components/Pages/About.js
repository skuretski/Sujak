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
                            <h1>About</h1>
                            <h3>Computer Science-er</h3>
                                <p>Growing up, computer science was never on my radar. It was always biological sciences. 
                                    However, in college, I developed a great fascination for computers, video games, and 
                                    software. At that time, I considered it a hobby.
                                </p>
                                <p>After contemplating nurse practitioner or nurse anesthetist, I decided those career paths 
                                    were not for me. As my mind began to grow idle, I filled it with Stanford online 
                                    open courses in computer science. I was hooked. It was like a color blind person seeing colors 
                                    for the first time. I began thinking about things I never encountered in any academic setting. 
                                    The more I learned, the more I realized how much I don't know about the computing world.     
                                </p>
                                <p>Once figuring out I wanted a computer science degree, I enrolled at Oregon State University for their
                                    post-baccalaureate E-campus computer science program. Throughout the program, I learned quite a bit 
                                    from very different areas of computer science, like databases, assembly language, object-oriented languages, 
                                    web and mobile development, testing, and software engineering practices. I got shingles twice due to stress, but 
                                    I wouldn't trade my learning for life without shingle tingle.  
                                </p>
                                <p>Today, I am enthusiastic and overwhelmed with what I want to learn. As a frequent Udemy user, I have enrolled in 
                                    multiple classes like Python and R, Introduction to Data Science, and Video Game Development with Unreal Engine. 
                                    I feel like the world is my oyster, and ain't nobody got time for idle minds. 
                                </p><hr/>
                            <h3>Nurse</h3><p>I am currently a surgical nurse and had worked in critical care for six years. I currently enjoy my job 
                                as a PACU nurse, and I love my co-workers. Nurses have a great sense of comraderie. In my years in critical care, I learned 
                                a lot, saw a lot, and cried a lot. My adrenal glands wore thin. I had high blood pressure in my early 20's. It was a stressful 
                                job, and I give mad props to all critical care nurses out there. 
                            </p>
                            <p>I mostly did cardiovascular surgical ICU with heart bypass and valve replacement patients. Occassionally, throw on the 
                                charge nurse phone and pager, and an orientee, and an admit, and a transfer, and a stroke alert, and a... code brown. 
                            </p><hr/>
                            <h3>Gamer</h3>
                                <p>When I was a child, I was not allowed to play video games. My mom's answer was to go outside or read a book, 
                                which was a very good thing. I loved sports, and I read recreationally. As an adult, I am grateful for this. However, I also 
                                missed the birth of amazing video games like Zelda, Doom, and Final Fantasy. Once I went off to college, I discovered video games 
                                due to the floor below me. They had a LAN party set up every. single. day. Every type of game in the 2000's was played, whether 
                                it was console or PC. 
                                </p>
                                <p>In 2005, I started playing World of Warcraft because my sister thought I would like it. Well, I definitely did like it. 
                                    I spent so many hours leveling up characters and alts, farming gold, playing the auction house, doing arenas 
                                    and battlegrounds, and running dungeons. It became my immediate social circle as well. I had friends all over the U.S. 
                                    and Canada. To this day, I still talk to some of them and have met a handful in real life. 
                                </p>
                                <p>After realizing WoW consumed my life, I switched to other Blizzard games and Final Fantasy on PS3. I have been a great fan 
                                    of Blizzard games and have attended BlizzCon for five years consecutively with my team. Now, I'm playing Overwatch and have 
                                    a long list of games to finish on Steam and my PS4. 
                                </p>
                        </div> { /* <-- END WELL --> */}
                    </div> {/* <-- END COL-MD-8 --> */}
                    <div className="col-md-2"/>
                </div> {/* <-- END ROW --> */}
            </div>
        )
    }
}

export default About;