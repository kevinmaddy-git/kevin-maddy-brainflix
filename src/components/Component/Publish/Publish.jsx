import React from 'react';
import { useNavigate } from 'react-router-dom';
import uploadIcon from '../../../assets/images/Icons/publish.svg';
import '../Publish/Publish.scss';

function Publish({ title, description }) {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

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
    <form className='publish' onSubmit={handleSubmit}>
      <button type="submit" className="publish__button">
        <img className="publish__button-icon" src={uploadIcon} alt="Upload Icon" />
        PUBLISH
      </button>
      <button type="button" className="cancel__button" onClick={() => navigate('/')}>
        CANCEL
      </button>
    </form>
  );
}

export default Publish;
