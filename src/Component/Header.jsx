import { Link } from "react-router-dom"
import { useState } from "react";
import { List,X} from "@phosphor-icons/react";
export default function Header(){
    const[scroll,setScroll]=useState(false);
    const[press,setPress]=useState(false);
    const[torch,setTorch]=useState(false);
    const[point,setPoint]=useState(false);
    const [visible,setVisible]=useState(false);
    function show(){
      setVisible(!visible);
    }
    function Touch(){
        const pill=document.querySelector(".mega")
        if(pill){
        pill.scrollIntoView({behaviour:"smooth"});
        }
        show()
     }
     function Press(){
        const fin=document.querySelector(".skill")
        if(fin){
        fin.scrollIntoView({behaviour:"smooth"});
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
     function dive(){
        const vin=document.querySelector(".fin")
        if(vin){
        vin.scrollIntoView({behaviour:"smooth"});
        }
        show()
     }
    return(
     <div className="vite">
        <div className="header">
            <Link className="xim">Code<span>Lord</span></Link>
            <ul className={visible?"":"nav"}>
                <li><Link to="/home">Home</Link></li>
                <li><Link onClick={Touch}>About</Link></li>
                <li><Link onClick={Press}>Skills</Link></li>
                <li><Link onClick={kick}>Project</Link></li>
                <li><Link onClick={dive}>Contact</Link></li>
            </ul>
            <div onClick={show} className="list">{visible?<X size={30}/>:<List size={30}/>}</div>
        </div>
     </div>   
    )
}