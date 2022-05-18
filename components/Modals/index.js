import { closeBtn, messageModal, messageModalContaner, modalBtn } from "./styles"
import { css, cx } from '@emotion/css'
import Image from 'next/image';


const Modal = ({ message, toggleMessage, showMessage}) => {
  return (
    <div className={ messageModalContaner({ showMessage }) }>
      <div className={messageModal}>
        <h4>
          { message }
        </h4>
        <a href="#" onClick={ toggleMessage } className={closeBtn}>
          <Image src="/assets/images/close.png" width={26} height={26} />
        </a>
      </div>
    </div>
  )
}

export default Modal
