import React, { useState } from 'react'

import '../App.css';


function APContent(props) {
  
  const [selectedChap, setChap] = useState(1)

  const selectChapHandler = (chapNum) => {
    console.log(chapNum);
    setChap(prev => {
      if (prev !== chapNum){
        return chapNum
      }
    })
  }

  const colored = (event) => {
    console.log(event);
  }

  const chapters = [
      <div className="chapterR"> {/* chapter 1 */}
                <h1 className="chapter-title">Chapter 1</h1>
      </div>,
      <div className="chapterR"> {/* chapter 2 */}
                <h1 className="chapter-title">Chapter 2</h1>
      </div>,
      <div className="chapterR"> {/* chapter 2 */}
        <h1 className="chapter-title">Chapter 3</h1>
      </div>
  ]

  
    
  return (
    <div>
      <div className="chapters">  
            <h2>Chapters</h2>
            <hr className="space" />
            <button id="1" className="section" onClick={function(event) { colored(event); selectChapHandler(1);}}>Chapter 1</button> 
            <hr className="space" />
            <button id="2" className="section" onClick={() => selectChapHandler(2)}>Chapter 2</button>
            <hr className="space" />
            <button id="3" className="section" onClick={() => selectChapHandler(3)}>Chapter 3</button>
            <hr className="space" />
            <button id="4" className="section" onClick={() => selectChapHandler(4)}>Chapter 4</button>
            <hr className="space" />
            <button id="5" className="section" onClick={() => selectChapHandler(5)}>Chapter 5</button>
            <hr className="space" />
      </div>
            <div className="chapter-div">
                Ap
              {chapters[selectedChap-1]}
            </div> 
    </div>
  )
}

export default APContent;
