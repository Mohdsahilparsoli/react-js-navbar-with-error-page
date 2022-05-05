import React from 'react'

const Home = (props) => {
  return (
    <>
    
        <div className="main">
         <div className="content">
        <p>{props.pera}</p>
        <h1> nice to meet you sir ! {props.headline}</h1>
        </div>
        </div>
        
    </>
  )
}

export default Home