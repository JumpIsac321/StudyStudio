import React, { useState } from 'react'



function JoinGame() {

  const [item,setItem] = useState("")

  return (
    <main className="area">
        <div className="inputbox">
            <h2>join game</h2>
            <form>
                <div>
                    <label htmlFor="name">name</label>
                    <input value={item} onChange={e => setItem(e.target.value)} type="text" id="name" name="name"/>
                </div>
                <button type="submit">Join Game</button>
            </form>
        </div>
    </main>
  )
}

export default JoinGame