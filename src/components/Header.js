import React from 'react'

function Header(){
    return (
            <React.Fragment>
                <div class="wrapper">
                    <img src="imgs/Chem expo logo.png" alt="logo" class="logo" />
                </div>
                <header id="header1">
                    <div class="container1">

                        <nav>
                            <ul>
                            <li><a class="others" href="/">Blog</a></li>
                            <li id="courses"><a id="current" href="/courses">Courses</a></li>
                            <li><a class="others" href="/resources">Resources</a></li>
                            <li><a class="others" href="/about">About</a></li>
                            </ul>
                            
                        </nav>

                    </div>

                    </header>
        </React.Fragment>
    )
}

export default Header