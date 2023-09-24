import React, { useEffect, useState } from 'react'

import { io } from 'socket.io-client'

function Questions() {

  const [isWinner, setIsWinner] = useState(false)
  
  socket.on('someone-won', () => {
    setIsWinner(true)
  })
  
  if (isWinner){
    return (
      <div>you lost</div>
    )
  }

  return (
    <main className="area">
        <div className="inputbox">
            <p>Whats the answer</p>
            <button type="submit" onClick={ (e) => socket.emit('win')}>answer</button>
            <button>this is a test</button>
        </div>
    </main>
  )
}

export default Questions