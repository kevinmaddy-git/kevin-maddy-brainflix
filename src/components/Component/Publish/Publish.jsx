import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uploadIcon from '../../../assets/images/Icons/publish.svg';
import '../Publish/Publish.scss';

function Publish({ title, description }) {
  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (response.ok) {
        console.log('Upload successful!');
        navigate('/');
      } else {
        console.error('Upload failed!');
      }
    } catch (error) {
      console.error('Error occurred during upload:', error);
    }
  };

  return (
    <div className='publish'>
      <button className="publish__button" onClick={handleFormSubmit}>
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


