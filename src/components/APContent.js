import React, { useState } from 'react'

import '../App.css';
import './APContent.css'


function APContent(props) {
  
  const [selectedChap, setChap] = useState(1)

  const selectChapHandler = (chapNum) => {
    console.log(chapNum);
    setChap(chapNum)
  }

  const colored = (event) => {
    document.querySelectorAll('.section').forEach((elem, index) => {
      console.log('elem.id', elem.id);
      console.log('event' , event.target.id);
      
      
      if (elem.id === event.target.id){
        document.getElementById(event.target.id).classList.add('selected')
      }
      else{
        document.getElementById(event.target.id).classList.remove('selected')
      }
    })

  }

  const chapters = [
      <div className="chapterR"> {/* chapter 1*/}
                <h1 className="chapter-title">Chapter 1</h1>
                <br></br>
                <br></br>
                <br></br>
                <h1 style={{textAlign: "center"}}>Welcome to AP Chemistry!</h1>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h2 style={{textAlign: "center"}}>Chapters 1 and 2 will be a review before we start on the AP content. If you think you're ready then skip over to chapter 3!</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h3 style={{textAlign: "center", textDecorationLine: "underline"}}>Part 1: Significant Figures, Accuracy/Precision, Reading Instruments</h3>
                <br></br>
                <p style={{fontSize: 25, textDecorationLine:"underline"}}>Rules for deciding the amount of significant figures are:</p> 
                <p style={{fontSize: 25}}>1.Non-zero digits are significant</p> 
                <p style={{fontSize: 25}}>2.The zeros between two non-zero digits are significant</p> 
                <p style={{fontSize: 25}}>3.The zeros before the first non-zero digit are considered significant</p>
                <p style={{fontSize: 25}}>4.The zeros after the decimal point and after the first non-zero digit are considered significant</p>
                <p style={{fontSize: 25}}>5.In order to make zeros after a non-zero number significant, you have to add a decimal point at the end of the last zero</p>
                <br></br>
                <br></br>
                <p style={{fontSize: 25, textDecorationLine:"underline"}}>Examples of all the rules</p> 
                <p style={{fontSize: 20}}>Rule 1: 23456 has all non-zero digits, so there are 5 significant figures. If you listen to post-malone you will know where I got that from :)</p>
                <p style={{fontSize: 20}}>Rule 2: 1001 has zeros between 2 non-zero numbers, so there are 4 significant figures.</p>
                <p style={{fontSize: 20}}>Rule 3: 0.0005 has 3 zeroes before a non-zero number so they won't be considered significant figures, so there is 1 significant figure.</p>
                <p style={{fontSize: 20}}>Rule 4: 0.23456000 has 3 zeroes after the decimal point and after a non-zero numner, so there are 8 significant figures.</p>
                <p style={{fontSize: 20}}>Rule 5: 100 has only 1 significant figure but adding a decimal point at the end (100.) makes it 3 significant figures because of the decimal point.</p>
                <br></br>
                <br></br>
                <p style={{fontSize: 25, textDecorationLine:"underline"}}>Operation rules for significant figures</p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>Addition/subtraction: First add or subtract how you regularly would. Then round your answer to the same number of decimal places as the number with the least number of decimal places in the question.</p>
                <br></br>
                <p style={{fontSize: 20}}>Example: If you did 0.23456-0.10 on your calculator, you would get 0.13456. However, in the expression we see that 0.50 is the number with less decimal places and it has 2 so our answer should also have 2 decimal places. Therefore, our answer should be rounded to 0.13.</p>
                <br></br>
                <br></br>
                <p style={{fontSize: 20, fontWeight: "bold"}}>Multiplication/Division: First multiply or divide how you regularly would. Your final answer should have the same amount of significant answers as the number with the least amount of significant figures in the question.</p>
                <br></br>
                <p style={{fontSize: 20}}>Example: If you did 0.5*0.65 on your calculator, you would get 0.325. However, in the expression we see that 0.5 is the number with less significant figures and there is 1, so our answer should also have 1 significant figure. Therefore, our answer should be rounded to 0.3.</p> 
                <br></br>
                <br></br>
                <p style={{fontSize: 20, fontWeight: "bold", textDecorationLine:"underline"}}>Example with multiple operations</p> 
                <p style={{fontSize: 20}}> Let's say we have the expression: (1.0034+0.40)/(1.054-0.434)</p> 
                <p style={{fontSize: 20}}>Step 1: For now let's forget about our sig fig rules. Let's just do it how we regularly would do it using order of operations.</p> 
                <p style={{fontSize: 20}}>Step 2: So if we do 1.0034+0.40 with or without a calculator, we get 1.4034. Now if we do 1.054-0.434, we get 0.62.</p> 
                <p style={{fontSize: 20}}> Step 3: Now we have simplified the expression to (1.4034/0.62). This is where we worry about the sig figs because it is our LAST STEP.</p> 
                <p style={{fontSize: 20}}>Step 4: We apply our multiplication/division rule: 1.4034/0.62=2.263548387 but our answer must have the same amount of sig figs as the number with the least amount of sig figs in the expression. So our focus is on 0.62, 0.62 has 2 sig figs so our answer has 2 sig figs. Therefore, our final answer is 2.3</p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>So from this we have learned that when it comes to complex calculations we only focus on sig figs during the LAST STEP.</p>
                <br></br>
                <br></br>
                <p style={{fontSize: 25, fontWeight: "bold", textDecorationLine:"underline", textAlign: "center"}}>Okay so now how can we apply sig fig rules when we're doing questions where using constansts or formulas are required?</p>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>The question below is asking us to calculate the frequency given the wavelength. Don't worry about the formula being used. I want you to only pay attention to the sig fig rules being applied, we will learn more about frequency and wavelength in chapter 6 :) </p>
                <br></br>
                <img style={{marginLeft: '15%', marginRight: 'auto'}} src="imgs/Frequency problem.jpg"/>
                <br></br>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>So for this question we're going to use the speed of light constant (2.998*10^8) and the formula: frequency = speed of light divided by wavelength</p>
                <br></br>
                <img style={{marginLeft: '15%', marginRight: 'auto'}} src="imgs/Frequency work.jpg"/>
                <p style={{fontSize: 20, textAlign: "center"}}>Notice how in the question, the speed of light has less significant figures compared to the wavelength. According to the multiplication/division rule, our answer must have the same amount of significant figures as the number with the least amount of significant figures in the question. However the speed of light is a constant so we completely ignore how many sig figs it has. So we look at how many sig figs the wavelength has because it is a MEASURED VALUE given in the question. Wavelength has 5 sig figs so our answer (frequency) must also have 5 sig figs.</p>
                <br></br>
                <p style={{fontSize: 25, fontWeight: "bold", textDecorationLine:"underline", textAlign: "center"}}>Measured value VS Exact Value</p>
                <ul>
                  <li style={{fontSize: 20}}>Measured Value: A number that is determined in the labratory using a measuring tool (ruler, thermometer, graduated, cylinder)</li>
                  <br></br>
                  <li style={{fontSize: 20}}>Exact Value: A number that is not obtained through experimentation-a number whose value is accepted with absolute certianty (a constant or numbers in a formula)</li>
                </ul>
                <p style={{fontSize: 25, textDecorationLine:"underline"}}>Examples of exact numbers</p>
                <li style={{fontSize: 20}}>The "1/2" in Area of trapezoid = 1/2h(base1+base2)</li>
                <li style={{fontSize: 20}}>The "5,280" in the conversion 1 mile=5,280 feet</li>
                <li style={{fontSize: 20}}>Plank's constant (6.626*10^-34)J*s</li>
                <li style={{fontSize: 20}}>The "1/2" in Area of a triangle = 1/2(base)(height)</li>
                <li style={{fontSize: 20}}>The equilibrium constant for water at 25 degrees celcius (1.01*10^-14)</li>
                <br></br>
                <p style={{fontSize: 25, fontWeight: "bold", textDecorationLine:"underline", textAlign: "center"}}>Accuracy VS Precision</p>
                <li style={{fontSize: 20}}>Accuracy: How closely individual measurements agree with an accepted value </li>
                <br></br>
                <li style={{fontSize: 20}}>Precision: How closely individual measurements agree with each other</li>
                <img style={{marginLeft: '5%', marginRight: 'auto'}} src="imgs/Precision.jpg"/>
                <br></br>
                <br></br>
                <p style={{fontSize: 25, fontWeight: "bold", textDecorationLine:"underline", textAlign: "center"}}>Reading Instruments</p>
                <br></br>
                <p style={{fontSize: 20}}>When reading a buret, you must always record the amount that the bottom of the meniscus reaches up to. The bottom of the menisus basically looks like the vertex of a parabola.</p>
                <img style={{marginLeft: '15%', marginRight: 'auto'}} src="https://chem.libretexts.org/@api/deki/files/50403/strekfar.jpg?revision=1&size=bestfit&width=326&height=250"/>
                <br></br>
                <br></br>
                <p style={{fontSize: 20}}>Take a look at the buret above. The bottom of the meniscus (vertex of the parabola) seems like it's a bit above 40 but a bit below 40.1 (in a buret the numbers increase as you go down. But how do we make sure we record the measurement as accurate as possible?</p>
                <p style={{fontSize: 20}}>To do that we determine the smallest division on the buret and we see the buret is increasing by 0.1 mL in each line. So when recording the measurement we must estimate to 1 place of uncertainty which is 0.01 mL. So we would record the amount of liquid present in the buret as 40.05 mL. </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>When recording a measurement you always have to estimate 1 place past the smallest division. This same rule appies to other instruments as well!</p>
                <br></br>
                <br></br>
                <h3 style={{textAlign: "center", textDecorationLine: "underline"}}>Part 2: Dimensional Analysis</h3>
                <br></br>
                <p style={{fontSize: 20}}>Dimensional Analysis (also known as factor label method) is a method where we can make sure we're using the right units. Keeping track of the units is what helps us end up with the right answer.</p>
                <br></br>
                <p style={{fontSize: 20}}>Let's start with an easy example. Say we want to use dimensional analysis to convert 14 feet into inches.</p>
                <img style={{marginLeft: '25%', marginRight: 'auto'}} src="imgs/Ft.jpg"/>
                <p style={{fontSize: 20}}>From here we can see that I used the conversion: 1 feet=12 inches and I put feet in the denominator and inches in the numerator. This is because we want to make sure we cancel out the feet but we want our answer to end up in inches so because the numerator doesn't cancel out with anything, our answer ends up being in inches which is what we want. </p>
                <p style={{fontSize: 20, fontWeight: "bold"}}>In dimensional analysis we write the given measured value from the question first all the way on the left, and we make sure to set it up in a way where we can cancel out certain units to get to the units our answer needs to be in.</p>
                <p style={{fontSize: 20}}>Now you might be wondering, why would I have to use dimensional anlysis for such a simple calculation? I could've just multiplied 14 ft by 12 in right away. Although dimensional analysis seems pretty uneccessary here, it will become your best friend in much more complex calculations :)</p>
                <br></br>
                <p style={{fontSize: 20, textDecorationLine: "underline"}}>Take a look at the problem below:</p>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>Irfaz is so strong that he can pick up 5.0 tons of stuff in an hour. Irfaz's wage for picking up the stuff is $25 per hour. How much would Irfaz earn for picking up 90. kg of stuff? (1 kg=2.2 lb, 1 ton=2000 lb)</p>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>Now this problem doesn't look too pretty to solve in your head 😂. But we can break it down with dimensional analysis to make our lives easier. In the question we're given that Irfaz picks up 90. kg (notice that there's a decimal point at the end so that makes it 2 sig figs), so we must start with kg in our calculation. But we want to know how much Irfaz will earn, so our answer must end in dollars. We're going to use the given conversion factors to get to our answer. </p>
                <br></br>
                <img style={{marginLeft: '1%', marginRight: 'auto'}} src="imgs/50 cent.jpg"/>
                <br></br>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>So as you can see above, we have started with kg and made a successful set up to end up with our answer having dollars at the end. Again, the trick to dimensional analysis is starting with the given units and having a set up to make sure we end with the units we want. That's pretty much all there is to it!</p>
                <br></br>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center", fontWeight:"bold"}}>Okay now I just want you show you one more example where units might be cubed/have an exponent. That's right, we're going to use dimensional analysis to convert volume into different units!</p>
                <br></br>
                <p style={{fontSize: 20, textAlign: "center"}}>Say we want to convert 1540 ft^3 into liters, how do we use dimensional analysis to do that? (You might want to scroll to the right to see the rest of the set up and answer, it's a very long 😅)</p>
                <img style={{marginLeft: '1%', marginRight: 'auto'}} src="imgs/Ft to L.jpg"/>
                <p style={{fontSize: 20, textAlign: "center"}}>As you can see we wrote converison factors over and over until it reached the same amount as the exponent (ft*ft*ft=ft^3 so we had to write ft three times in order for it to cancel out with ft^3. The same goes for the cm^3 at the end as well. </p>
                <h3 style={{textAlign: "center", textDecorationLine: "underline"}}>Congratulations you have reached the end of Chapter 1! 😇 If you want more practice with sig figs and dimensional analysis questions check out the hyperlinks below:</h3>
                <a href="https://pthsapchem.weebly.com/uploads/4/5/3/2/4532731/dimensional_analysis_sample_problems_a__key.pdf" target="_blank">Dimensional Analysis Practice</a>
                <br></br>
                <a href="http://faculty.ccbcmd.edu/~cyau/DrillOnSig.Fig.Sp2005.htm" target="_blank">Significant figures Practice</a>

               

                



      
                


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
            <button id="0" className="section" onClick={function(event) { colored(event); selectChapHandler(1);}}>Chapter 1-Introductory Topics</button> 
            <hr className="space" />
            <button id="1" className="section" onClick={function(event) { colored(event); selectChapHandler(2);}}>Chapter 2</button>
            <hr className="space" />
            <button id="2" className="section" onClick={function(event) { colored(event); selectChapHandler(3);}}>Chapter 3</button>
            <hr className="space" />
            <button id="3" className="section" onClick={function(event) { colored(event); selectChapHandler(4);}}>Chapter 4</button>
            <hr className="space" />
            <button id="4" className="section" onClick={function(event) { colored(event); selectChapHandler(5);}}>Chapter 5</button>
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
