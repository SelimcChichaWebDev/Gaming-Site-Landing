import { dropdownList } from '../../utils/dropdown'
import { DropdownList } from './DropdownList'

export const QuestionBlock = () => {
	return (
		<section className='question'>
			<div className='container'>
				<div className='question__col'>
					<div className='question__title'>
						<h1>Frequently Asked Questions</h1>
						<h2>
							Get answers to common questions about our developing course`
						</h2>
					</div>
					{dropdownList.map(dropdownItem => (
						<DropdownList
							key={dropdownItem.id}
							title={dropdownItem.title}
							subtitle={dropdownItem.subtitle}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
