import { LegacyRef, ReactNode } from 'react'

interface IService {
	children: ReactNode
	serviceRef: LegacyRef<HTMLElement> | undefined
}

export const Service = ({ children, serviceRef }: IService) => {
	return (
		<section className='service' ref={serviceRef}>
			<div className='container'>
				<div className='service__row'>{children}</div>
			</div>
		</section>
	)
}
