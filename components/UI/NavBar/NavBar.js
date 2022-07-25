import { useEffect, useState } from 'react'
import ss from './NavBar.module.scss'
// import Favicon from './Favicon'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import useAppContext from '../../../Context/UseAppContext';

import { useRouter } from "next/router";




const Form = ({ text }) => {

	const { lang, firstLoad } = useAppContext();
	const [navbar, setNavbar] = useState(false)
	const router = useRouter();

	const goHome = () => {
		const fullPath = `/`;
		router.push(fullPath);
	};

	useEffect(() => {
		changeBackground()
		// adding the event when scroll change Logo
		window.addEventListener("scroll", changeBackground)
	})

	const changeBackground = () => {

		if (window.scrollY >= 60) {
			setNavbar(true)

		} else {
			setNavbar(false)
		}
	}

	return (
		<>
			<div className={ss.back_to_home} onClick={goHome}>
				<span>{firstLoad ? "" : navbar ? miniLogo : ""}</span>
			</div>

			{lang == "ESP" ? (
				<div className={ss.container}>
					{/* <div className={ss.link}><Link href="/">                  El Estudio</Link></div> */}
					<div className={ss.link}>
						<Link href="">Proyectos</Link>
					</div>
					<div className={ss.link}>
						<Link href="">Nosotres</Link>
					</div>
					<div className={ss.link}>
						<Link href=""> Contacto</Link>
					</div>
				</div>
			) : (
				<div className={ss.container}>
					{/* <div className={ss.link}><Link href="/">                  Institutional</Link></div> */}
					<div className={ss.link}>
						<Link href="/">Projects</Link>
					</div>
					<div className={ss.link}>
						<Link href="/">Us</Link>
					</div>
					<div className={ss.link}>
						<Link href="/"> Contact</Link>
					</div>
					
				</div>
			)}

			{/* <div className={ss.link}><Link className={ss.link_text} href="/">                    El Estudio</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/about">               Nosotros</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/blog">                Publicaciones</Link></div>
         <div className={ss.link}><Link className={ss.link_text} href="/contact">              Contacto</Link></div>
         </div>
      */}
		</>
	);
}

export default Form;

