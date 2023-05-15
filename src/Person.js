import React from 'react'
import './App.css'
import img1 from './karimmmmmm.jpg'
import Timer from './Timer'
function Person() {
    let fullname="Karim Marwani"
    let bio="21 yo student in go my code  "
    let profession="fullstack web developer"
  return (
    <div>
        <img src={img1} />
        <h3>{fullname}</h3>
        <h4>{bio}</h4>
    <h4>{profession}</h4>
    <Timer/>

      
    </div>
  )
}

export default Person
