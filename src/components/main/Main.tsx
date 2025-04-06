import { FC } from 'react'
import { MainImage } from './MainImage'
import { MainTitle } from './MainTitle'

export const Main: FC = () => {
	const title = 'Become front end developer'
	const subTitle = 'Sign in to our comcommunity'
	const btn1 = 'Sign in'
	const btn2 = 'Sign up'
	return (
		<section className='main'>
			<div className='container'>
				<div className='main__row'>
					<MainTitle
						title={title}
						subTitle={subTitle}
						btnTitle1={btn1}
						btnTitle2={btn2}
					/>
					<MainImage />
				</div>
			</div>
		</section>
	)
}
