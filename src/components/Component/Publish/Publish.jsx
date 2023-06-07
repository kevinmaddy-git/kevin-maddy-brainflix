import React from 'react';
import uploadIcon from '../../../assets/images/Icons/upload.svg';

function Publish({ history }) {
  const handleCancel = () => {
    history.push('/home');
  };

  return (
    <div>
      <button className="publish-button">
        <img className="publish-button__icon" src={uploadIcon} alt="Upload Icon" />
        Publish
      </button>
      <button className="cancel-button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}

export default Publish;
