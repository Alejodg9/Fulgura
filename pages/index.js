
import Header from '../components/Header/Header'
import Head from 'next/head'
import LanguageSwitch from '../components/LanguageSwitch/LanguageSwitch'
import About from '../components/About/About'
import Referals from '../components/Referals/Referals'
import Footer from '../components/Footer/Footer'
import ContactPeek from '../components/ContactPeek/ContactPeek';
import { createClient } from 'contentful'





export default function Home({ noticias }) {



	return (
		<>
			<Head>
				<title>ESTUDIO FULGURA</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="description" content="Estudio Fulgura" />
				<meta property="og:title" content="Estudio Fulgura" />
				<meta property="og:image" content="/favicon.jpg" />
			</Head>


			<Header />
			<LanguageSwitch />
			{/* <About />
			<Referals />

			<ContactPeek />
			<Footer /> */}





		</>
	);
}
