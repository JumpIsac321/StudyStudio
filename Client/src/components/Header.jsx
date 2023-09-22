import React from 'react'

function Header() {
  return (
    <>
        <header class="topbar">
            <nav class="navigation">
                <a href="/"><h2 class="title header-title">Study Studio</h2></a>
                <a href="/quiz">Live Quiz</a>
                <a href="/">Start Learning</a>
                <button class="darkmode"><img src="/images/crecent.png"/></button>
            </nav>
        </header>
        <hr/>
    </>
  )
}

export default Header