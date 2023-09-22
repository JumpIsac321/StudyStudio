import React from 'react'

import '/public/stylesheets/styles.css'
import '/public/stylesheets/inputboxstyle.css'

function JoinGame() {
  return (
    <main className="area">
        <div className="inputbox">
            <h2>join game</h2>
            <form>
                <div>
                    <label for="name">name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <button type="submit">Join Game</button>
            </form>
        </div>
    </main>
  )
}

export default JoinGame