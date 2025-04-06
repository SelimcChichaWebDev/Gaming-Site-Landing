import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FC, useRef } from 'react'
import image from '../../assets/img/01.png'

gsap.registerPlugin(useGSAP)

export const MainImage: FC = () => {
	const imageRef = useRef<HTMLDivElement>(null)

	useGSAP(() => {
		if (imageRef.current) {
			gsap.to(imageRef.current, {
				x: -700,
				duration: 1,
				delay: 2,
			})
		}
	})

	return (
		<div className='main__image' ref={imageRef}>
			<img src={image} alt='main-image' />
		</div>
	)
}
