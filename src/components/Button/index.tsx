import React from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
  children: string | JSX.Element;
}

const Button = (props: Props): JSX.Element => {
  return (
    <button className='Base' onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;