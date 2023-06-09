import React from 'react';
import uploadIcon from '../../../assets/images/Icons/publish.svg';
import '../Publish/Publish.scss';

function Publish({ history }) {
  const handleCancel = () => {
    history.push('/home');
  };

  return (
    <div className='publish'>
      <button className="publish__button">
        <img className="publish__button-icon" src={uploadIcon} alt="Upload Icon" />
        PUBLISH
      </button>
      <button className="cancel__button" onClick={handleCancel}>
        CANCEL
      </button>
    </div>
  );
}

export default Publish;
