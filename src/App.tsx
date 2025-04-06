import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import './App.scss'
import { About } from './components/about/About'
import { Footer } from './components/footer/Footer'
import { Layout } from './components/Layout'
import { Main } from './components/main/Main'
import { MeetBlock } from './components/pleasure-meet-you/MeetBlock'
import { QuestionBlock } from './components/questions/QuestionBlock'
import { Service } from './components/service/Service'
import { CardService } from './ui/CardService'
import { serviceCard } from './utils/serviceCard'

gsap.registerPlugin(useGSAP)

export const App = () => {
	const serviceRef = useRef<HTMLDivElement>(null)
	const serviceCardRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (serviceRef.current) {
			gsap.fromTo(
				serviceRef.current,
				{ x: serviceCardRef.current?.clientWidth + 'px' },
				{ x: 0, duration: 8, repeat: -1, ease: 'none' }
			)
		}
	}, [])

	return (
		<Layout>
			<Main />
			<Service serviceRef={serviceRef}>
				{serviceCard.map(serviceItem => (
					<CardService
						key={serviceItem.id}
						title={serviceItem.title}
						text={serviceItem.text}
						serviceCardRef={serviceCardRef}
					/>
				))}
			</Service>
			<About />
			<QuestionBlock />
			<MeetBlock />
			<Footer />
		</Layout>
	)
}
