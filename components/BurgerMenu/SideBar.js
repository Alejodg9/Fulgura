import React, {useState, useEffect, useRef} from 'react';
import Link from 'next/link';

import classes from './SideBar.module.scss';

import "animate.css/animate.min.css";

import useAppContext from '../../Context/UseAppContext';


   
const SideBar = (props) => {
   const {lang} = useAppContext();

    return(<>
        {
            props.show
            ?
            
            <nav className={classes.side_drawer_open}>
                
                <div className={classes.close} onClick={props.click}>{closeIcon}</div>
                {lang=="ESP"
                ?
                  <ul >
                      <li onClick={props.click}><Link href="/">Home</Link></li>
                      <li onClick={props.click}><Link href="/">Proyectos</Link></li>
                      <li onClick={props.click}><Link href="/">Nosotres</Link></li>
                      <li onClick={props.click}><Link href="/">Contacto</Link></li>
                  </ul>
                  :
                  <ul >
                      <li onClick={props.click}><Link href="/">Home</Link></li>
                      <li onClick={props.click}><Link href="/">Projects</Link></li>
                      <li onClick={props.click}><Link href="/">Us</Link></li>
                      <li onClick={props.click}><Link href="/">Contact</Link></li>
                      
                  </ul>
                }

            </nav>
            :
            <nav className={classes.side_drawer} onClick={props.click}/>
        }
</>
    )

}

export default SideBar;

const closeIcon= 
<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.600586" y="18.2778" width="25" height="3" transform="rotate(-45 0.600586 18.2778)" fill="white"/>
<rect x="2.98438" y="1.13428" width="25" height="3" transform="rotate(45 2.98438 1.13428)" fill="white"/>
</svg>