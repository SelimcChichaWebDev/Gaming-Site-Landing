import icon from '../assets/icons/01.svg'

interface IAboutList {
	id: number
	title: string
	icon: string
}

export const aboutList = <IAboutList[]>[
	{
		id: 1,
		title: 'UX/UI',
		icon: icon,
	},
	{
		id: 2,
		title: 'Front end',
		icon: icon,
	},
	{
		id: 3,
		title: 'Back end',
		icon: icon,
	},
]
