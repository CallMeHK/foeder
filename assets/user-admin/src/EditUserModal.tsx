import * as React from 'react'
import { Modal } from '../../shared/components/Modal'

type Props = {
    
}
const EditUserModal = () => {
    const [isModalShowing, setIsModalShowing] = React.useState<boolean>(true)
    return <Modal isShowing={isModalShowing} setIsShowing={setIsModalShowing} title="Edit User">
        yeeeeeet
    </Modal>
}

export {
    EditUserModal
}
