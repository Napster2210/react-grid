import React from 'react';
import './Modal.css';

interface Props {
  children: JSX.Element;
  title: string;
}
const Modal = (props: Props) => {

  return (
    <div className='Backdrop-overlay'>
      <div className='Modal-container'>
        <div className='Modal-header'>
          <span className='Modal-title'>{props.title}</span>
          <span className='Modal-title'>x</span>
        </div>
        <div className='Modal-content'>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;