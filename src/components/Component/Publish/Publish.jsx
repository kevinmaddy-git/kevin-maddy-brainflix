import React from 'react';
import { Link } from 'react-router-dom';
import uploadIcon from '../../../assets/images/Icons/publish.svg';
import '../Publish/Publish.scss';

function Publish() {
  return (
    <div className='publish'>
      <button className="publish__button">
        <img className="publish__button-icon" src={uploadIcon} alt="Upload Icon" />
        PUBLISH
      </button>
      <Link to="/" className="cancel__button">
        CANCEL
      </Link>
    </div>
  );
}

export default Publish;

