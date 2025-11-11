import { useState } from 'react'
import './index.css'

function App() {

  return (
    <div id='VisualizationDiv'>
      <div id="mainDiv">
        <header id='header'>
            <img src="./public/siteIcon.jpeg" width={100} id='siteIcon'/>
            <h1>Example Title</h1>
        </header>
        <div id='contentDiv'>
          <div id='someDiv1'>
            <div id='mainInfoDiv'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Repudiandae in ratione voluptatem dolores enim laborum illum, 
            aspernatur tempora nostrum delectus provident ipsum ea harum cum est. 
            Aperiam similique doloribus laboriosam facere, 
            nemo dolorum id necessitatibus eum eligendi non. 
            Vitae dolorum architecto doloribus omnis laboriosam est eum nam? 
            Possimus, maxime blanditiis!
            </div>
          </div>
          <div id='contactAndPersonInfoDiv'>
              <div id="personInfo">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Id, numquam sed delectus asperiores at sequi laudantium atque in totam fuga.
                </p>
                <img src="./public/vite.svg"  />
              </div>
            <div id="contactInfo"></div>
          </div>
        </div>
      </div>
    </div>      
  )
}

export default App
