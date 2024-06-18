import React from 'react'

function HeadPage({title}) {
  return (
    <div className='head-simple-pages'>
     <div className='simple-header'>        
        <div className="logo" ><a href="/"><img src="woodxel-resources/images/woodxel-white.png" alt=""/></a></div>       
        <h1>{title}</h1>
    </div>
    </div>
  )
}


export default HeadPage
