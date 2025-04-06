import { AboutImage } from './AboutImage'
import { AboutList } from './AboutList'

export const About = () => {
	return (
		<section className='about'>
			<div className='about__container'>
				<div className='about__row'>
					<AboutList />
					<AboutImage />
				</div>
			</div>
		</section>
	)
}
