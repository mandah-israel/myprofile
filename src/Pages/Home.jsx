import Header from "../Component/Header"
import css from "../../src/Images/css.png"
import izzy from "../../src/Images/izzy.jpg"
import react from "../../src/Images/react.png"
import java from "../../src/Images/java.png"
import tail from "../../src/Images/tail.png"
import html from "../../src/Images/html.png"
import github from "../../src/Images/github.png"
import Footer from "../Component/Footer"
import { Link } from "react-router-dom"
import {XLogo,Envelope,GithubLogo,LinkedinLogo} from "@phosphor-icons/react"
import { useState } from "react"
const Home=()=>{
     const[click,setClick]=useState(false);
     const[hit, setHit]=useState(false);
     const[scroll,setScroll]=useState(false);
     const[press, setPress]=useState(false);
     const[torch,setTorch]=useState(false);
     const[point,setPointer]=useState(false);
     function Touch(){
         const pill=document.querySelector(".mega")
         if(pill){
         pill.scrollIntoView({behavior:"smooth"});
         }
         show()
      }
      function kick(){
        const pin=document.querySelector(".sky")
        if(pin){
        pin.scrollIntoView({behaviour:"smooth"});
        }
        show()
     }
      function Press(){
        const pila=document.querySelector(".skill")
        if(pila){
        pila.scrollIntoView({behaviour:"smooth"});
        }
        show()
     }
     function dive(){
        const vin=document.querySelector(".fin")
        if(vin){
        vin.scrollIntoView({behaviour:"smooth"});
        }
        show()
     }
     function handleClick(){
        setClick(true);
        window.location.href="mailto:someone@example.com?subject=Subject&body=Body";
     }
     function handlePress(){
        setHit(true);
        window.location.href="mailto:someone@example.com?subject=Subject&body=Body";
     }
    return(
<div className="vite">
    <Header/>
    <div className="vice ma-g">
        <img src={izzy}/>  
        <div className="vix">
            <h4>Hi, my name is</h4>
            <h2>Mandah Israel</h2>
            <h3>I'm a Frontend Developer.</h3>
            <p>I'm a Frontend Developer specializing in creating responsive and dynamic user interface. My work focuses on ensuring seamles user experience across various devices and platforms. I am passionate about staying updated with latest trends and technologies in frontend development and continuously improving my skills to deliver high-quality, user-centric websites.</p>
        </div>
    </div>
    <div className={scroll?"":"mega"}>
    <div className="about ma-g pa-d">
        <h2>About</h2>
        <h3>Hi there! My name is <span>Israel</span> and I am a frontend developer.</h3>
        <p>I am passionate about staying updated with latest trends and technologies in frontend development. My immediate goal is to secure a frontend developer role where I can leverange my skills and passion for innovative technology. I am to continuously evolve as adeveloper by embracing new technologies and ,ultimately aspiring to lead a team of developers in creating-edge websites that enhance user experiences.</p>
    </div>
    </div>
    <div className={press?"":"skill"}>
    <div className="about skill ma-g pa-d">
        <h2>Skills</h2>
        <p>These are the technologies I have worked with</p>
            <div className="gim">
                <div className="vic">
                    <img src={html}/>
                    <h4>HTML</h4>
                </div>
                <div className="vic">
                    <img src={css}/>
                    <h4>CSS3</h4>
                </div>
                <div className="vic">
                    <img src={java}/>
                    <h4>JS</h4>
                </div>
                <div className="vic">
                    <img src={react}/>
                    <h4>REACT</h4>
                </div>
                <div className="vic">
                    <img src={github} className="git"/>
                    <h4>GITHUB</h4>
                </div>
                <div className="vic">
                    <img src={tail}/>
                    <h4>TAILWIND</h4>
                </div>
            </div>
        </div>
    </div>
    <div className={torch?"":"sky"}>
        <div className="about sky ma-g pa-d">
        <h2>Projects</h2>
        <p>Check out some of my recent projects.</p>
        <div className="link">
            <Link to="https://workspace-puce.vercel.app">workspace</Link>
            <Link to="https://ai-fashion-eta.vercel.app/">ai fashion</Link>
            <Link to="https://ai-fashion-eta.vercel.app/">ai fashion</Link>
        </div>
    </div>
</div>
<div className={point?"":"fin"}>
    <div className="about sky fin ma-g pa-d">
        <h2>Contact</h2>
        <p>Reach to me on the following</p>
        <div className="logo"> 
            <Link to="https://www.linkedin.com/in/mandah-israel-871a12242"><LinkedinLogo size={30}/></Link>
            <Link to="http://twitter.com/IsraelMandah?t=6A92WU78Fg-h7cNPH8ssYg&s=09"><XLogo size={30}/></Link>
            <Link onClick={handlePress}><Envelope size={30}/></Link>
            <Link to="https://github.com/mandah-israel"><GithubLogo size={30}/></Link>
        </div>
        <button onClick={handleClick}>Let's Talk</button>
    </div>
</div>
    <Footer/>
  </div>
    )
}
export default Home

