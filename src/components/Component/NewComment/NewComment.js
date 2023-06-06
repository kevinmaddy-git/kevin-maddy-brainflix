import React, { useState, useEffect } from 'react';
import commentIcon from '../../../assets/images/Icons/add_comment.svg';
import '../NewComment/NewComment.scss';

function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return dateObj.toLocaleDateString(undefined, options);
}

function Comment({ id, name, comment, likes, date }) {
  return (
    <div key={id} className="comment__container">
      <div className="comment__container-img"></div>
      <div className="comment__container-content">
        <span className="comment__container-content-name">{name}</span>
        <span className="comment__container-content-timestamp">{date}</span>
        <p className="comment__container-content-comment">{comment}</p>
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

    const commentId = commentList.length + 1;
    const date = new Date().toISOString();

    const updatedComments = [
      {
        id: commentId,
        name: 'Tim Berners-Lee',
        comment: newComment,
        likes: 0,
        timestamp: date,
        newlyAdded: true,
      },
      ...commentList,
    ];

    setCommentList(updatedComments);
    setNewComment('');
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  return (
    <div className="comment">
      <div className="comment__form">
        <form onSubmit={handleCommentSubmit}>
          <div className="comment__form-row">
            <label htmlFor="comment" className="comment__form-label">
              JOIN THE CONVERSATION
            </label>
            <div className="comment__form-avatar"></div>
          </div>
          <div className="comment__form-tablet">
            <textarea
              name="comment"
              id="comment"
              className="comment__form-input"
              placeholder="Add a new comment"
              value={newComment}
              onChange={handleCommentChange}
              required
            ></textarea>
            <button type="submit" className="comment__form-button">
              <i className="comment__form-buttonIcon">
                <img src={commentIcon} alt="Comment Icon" />
              </i>
              COMMENT
            </button>
          </div>
        </form>
      </div>
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



