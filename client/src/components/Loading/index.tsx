import React from 'react';
import './Loading.css';

interface Props {
  loadingText: string;
}

const Loading = (props: Props) => {
  return (
    <div className='Loading-overlay'>
      <div className='Loader'>
        <span className='Loading-text'>{props.loadingText}</span>
      </div>
    </div>
  )
};

export default Loading;