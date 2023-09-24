import React from 'react'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
        <header className="topbar">
            <nav className="navigation">
                <Link to = "/"><h2 className="title header-title">Study Studio</h2></Link>
                <Link to = "/game">Live Quiz</Link>
                <Link to = "/learn">Start Learning</Link>
                <button className="darkmode"><img src="/images/crecent.png"/></button>
            </nav>
        </header>
        <hr/>
    </>
  )
}

export default Header