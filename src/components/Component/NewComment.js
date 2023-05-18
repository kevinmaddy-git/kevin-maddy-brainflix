import React, { useState, useEffect } from 'react';
import commentIcon from '../../assets/images/Icons/add_comment.svg';
import './NewComment.scss'

function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return dateObj.toLocaleDateString(undefined, options);
}

function Comment({ id, name, comment, likes, date }) {
  return (
    <div key={id} className="comment-container">
      <div className="comment-container__img"></div>
      <div className="comment-container__content">
        <span className="comment-container__content-name">{name}</span>
        <span className="comment-container__content-timestamp">{date}</span>
        <p className="comment-container__content-comment">{comment}</p>
      </div>
    </div>
  );
}

function NewComment({ currentVideo }) {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    if (currentVideo.comments) {
      setCommentList(currentVideo.comments);
    }
  }, [currentVideo]);

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    const commentId = commentList.length + 1; // Generate a unique ID for the new comment
    const date = new Date().toISOString(); // Get the current timestamp

    const updatedComments = [
      {
        id: commentId,
        name: 'Your Name', // Replace with the actual name of the commenter
        comment: newComment,
        likes: 0,
        timestamp: date,
        newlyAdded: true, // Add a property to mark the comment as newly added
      },
      ...commentList, // Prepend the new comment to the existing comments
    ];

    setCommentList(updatedComments);
    setNewComment('');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="comment">
      <div className="comment-form">
        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="comment" className="comment-form__label">
            JOIN THE CONVERSATION
          </label>
          <textarea
            name="comment"
            id="comment"
            className="comment-form__input"
            placeholder="Add a new comment"
            value={newComment}
            onChange={handleCommentChange}
            required
          ></textarea>
          <button type="submit" className="comment-form__button">
            <i className="comment-form__buttonIcon">
              <img src={commentIcon} alt="Comment Icon" />
            </i>
            COMMENT
          </button>
        </form>
      </div>
      {/* Render comments */}
      {commentList.map((comment) => (
        <Comment
          key={comment.id}
          id={comment.id}
          name={comment.name}
          comment={comment.comment}
          likes={comment.likes}
          date={formatDate(comment.timestamp)}
        />
      ))}
    </div>
  );
}

export default NewComment;



