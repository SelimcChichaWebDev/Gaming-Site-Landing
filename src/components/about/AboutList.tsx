import { aboutList } from '../../utils/about'

export const AboutList = () => {
	return (
		<div className='about__list'>
			<h1>What you will learn?</h1>
			<h2>lorem ipsum lorem ipsum</h2>
			<ul className='list'>
				{aboutList.map(itemList => (
					<li key={itemList.id} className='list-item'>
						<img src={itemList.icon} alt='icon-list' />
						{itemList.title}
					</li>
				))}
			</ul>
		</div>
	)
}
