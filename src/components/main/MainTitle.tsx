import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

interface IMainTitle {
	title: string
	subTitle: string
	btnTitle1: string
	btnTitle2: string
}

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const MainTitle = ({
	title,
	subTitle,
	btnTitle1,
	btnTitle2,
}: IMainTitle) => {
	const titleElGsapRef = useRef<HTMLDivElement>(null)
	const subTitleElGsapRef = useRef<HTMLDivElement>(null)
	const mainTitleRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (titleElGsapRef.current) {
			gsap.to(titleElGsapRef.current, {
				backgroundSize: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: titleElGsapRef.current,
					start: 'center 90%',
					end: 'center 20%',
					scrub: true,
				},
			})
		}
		if (subTitleElGsapRef.current) {
			gsap.to(subTitleElGsapRef.current, {
				backgroundSize: '100%',
				ease: 'none',
				scrollTrigger: {
					trigger: subTitleElGsapRef.current,
					start: 'center 80%',
					end: 'center 20%',
					scrub: true,
				},
			})
		}
		if (mainTitleRef.current) {
			gsap.to(mainTitleRef.current, {
				x: 600,
				duration: 1,
				delay: 2,
			})
		}
	}, [])

	return (
		<div className='main__title' ref={mainTitleRef}>
			<h1 ref={titleElGsapRef} className='title__gsap'>
				{title}
				<span>Become Back end developer</span>
			</h1>
			<h2 ref={subTitleElGsapRef} className='subtitle__gsap'>
				{subTitle}
				<span>Login in to our comcommunity</span>
			</h2>
			<div className='main__btn'>
				<button className='btn__item btn-1'>{btnTitle1}</button>
				<button className='btn__item btn-2'>{btnTitle2}</button>
			</div>
		</div>
	)
}
