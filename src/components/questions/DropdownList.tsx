import { useState } from 'react'
import iconPlus from '../../assets/icons/02.svg'
import iconMinus from '../../assets/icons/03.svg'

interface IDropdownList {
	title: string
	subtitle: string
}

export const DropdownList: React.FC<IDropdownList> = ({ title, subtitle }) => {
	const [isShow, setIsShow] = useState<boolean>(false)
	return (
		<>
			<button
				className='dropdown__list'
				onClick={() => setIsShow(prev => !prev === true)}
			>
				<h1>{title}</h1>
				<img src={isShow ? iconPlus : iconMinus} alt='icon' />
			</button>
			{isShow ? <div className='dropdown__list-active'>{subtitle}</div> : null}
		</>
	)
}
