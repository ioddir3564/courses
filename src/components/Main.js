import React, { useState } from 'react'

import '../App.css';
import RContent from './RContent'
import APContent from './APContent'

function Main() {
    const [course, setCourse] = useState('regents')

    const courseHandler = (courseType) => {
        setCourse(prev => {
            if (prev !== courseType){
                return courseType
            }
        })
    }

    let displayedContent = <RContent />
    if (course === 'ap'){
      displayedContent = <APContent />
    }

  return (
    <React.Fragment>
      
      <div style={{width: '100%', textAlign: 'center'}}>
          <button id="reg-btn" class="section" onClick={() => courseHandler('regents')}>Regents Chemistry</button>
          <button id="ap-btn" class="section" onClick={() => courseHandler('ap')}>AP Chemistry</button>
      </div>
      {displayedContent}
    </React.Fragment>
  );
}

export default Main;
