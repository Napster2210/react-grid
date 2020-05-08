import React from 'react';
import './Container.css';

interface Props {
  children: JSX.Element;
}
const Container = (props: Props): JSX.Element => {
  return (
    <div className='Container'>
      {props.children}
    </div>
  )
}

export default Container;