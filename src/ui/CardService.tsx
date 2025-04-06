import { LegacyRef } from 'react'

interface IServiceCard {
	title: string
	text: string
	serviceCardRef: LegacyRef<HTMLDivElement> | undefined
}

export const CardService = ({ title, text, serviceCardRef }: IServiceCard) => {
	return (
		<div className='service__card' ref={serviceCardRef}>
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	)
}
