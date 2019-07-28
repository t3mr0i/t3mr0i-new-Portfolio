import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/index.css'
import Card from '../components/card';



class About extends React.Component {

  
  render() {
    return (
      <div className={this.state.hasScrolleded ? 'backgrounder  backgrounderScrolled ' : 'backgrounder '}>

  <div className="Test">
    <div className="Hero" >
      <div className="HeroGroup" >
        <h1 > <b> Hi, I 'm Kai</b> <br />
          I 'm a UX/UI designer + programmer  <br /> living in <b> Bremen </b></h1 >
          <p > I 'm passionate about everything digital. <br/>Especially creating unique user experiences. I am looking for a place to cooperate with like minded people to create something awesome.<br/>You can find me on Linkedin or shoot me an email. </p>
  
  
  
        </div>
      </div>
      
      </div>
     
   
    
   
  <footer class="footer">
    <p>Some footer nonsense!</p>
  </footer>
  </div> 
   
    
   )
    }
  }
  
            
export default About