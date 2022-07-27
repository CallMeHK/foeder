import * as React from 'react'
import './Modal.css'

type Props = {
	isShowing: boolean,
	setIsShowing: React.Dispatch<React.SetStateAction<boolean>>,
	children: React.ReactNode, 
	title: string
}

const Modal: React.FC<Props> = ({ isShowing, setIsShowing, children, title }) => {
	return <div id={`${title}-modal-anchor`}>
		{isShowing && (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-topbar">
					<span className="modal-title">{title}</span>
					<span className="close" onClick={() => setIsShowing(false)}>&times;</span>
				</div>
				<div className="modal-body">{children}</div>
			</div>
		</div>
		)}
	</div>
}

export { Modal }
