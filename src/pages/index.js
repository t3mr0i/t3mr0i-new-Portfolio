import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'
import '../layouts/index.css'
import Card from '../components/card';

const IndexPage = () => (
  <div>
    <div className="Hero" >
      <div className="HeroGroup" >
        <h1 > <b> Hi, I 'm Kai</b> <br />
          I 'm a UX/UI designer + programmer  <br /> living in <b> Bremen </b></h1 >
          <p > I 'm passionate about creating fluid digital experiences and I want to use technology to help make people'
  s lives more fulfilling.You can find me on Linkedin and Dribbble, download my resume, or shoot me an email. </p>
  
  
  <div className="Logos">
  <img width="100" src={require('../images/temroiNew.png')} />   
         <img src='logo-figma.png' width="100" />
          <img src='images/logo-framer.png' width="50" />
          <img src='images/logo-react.png' width="50" />
          <img src='images/logo-swift.png' width="50" />
        </div>
        </div>
      </div>
      
      
          

    <div className="Cards">
      <h2>Some of my works</h2>
      <div className="CardGroup">
        <Card 
          title="Design System"
          text="10 sections"
          image='../images/temroiNew.png' />
        <Card 
          title="React for Designers"
          text="12 sections"
          image='/images/wallpaper2.jpg' />
        <Card 
          title="Sound Design"
          text="5 sections"
          image='/images/wallpaper3.jpg' />
        <Card 
          title="ARKit 2"
          text="10 sections"
          image='/images/wallpaper4.jpg' />
      </div>
    </div> </div> 
   
    
   )
            
export default IndexPage