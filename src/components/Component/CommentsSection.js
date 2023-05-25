import React, { useState, useEffect } from 'react';
import './CommentsSection.scss';

function formatDate(timestamp) {
  const dateObj = new Date(timestamp);
  const options = { month: '2-digit', day: '2-digit', year: 'numeric' };
  return dateObj.toLocaleDateString(undefined, options);
}

function CommentsSection({ currentVideo }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    if (currentVideo.comments) {
      setCommentList(currentVideo.comments);
    }
  }, [currentVideo]);

  const existingComments = commentList.filter(
    (comment) => !comment.newlyAdded && comment.videoId === currentVideo.id
  );

  return (
    <div className="comment">
      {/* Render comments */}
      {existingComments.map((comment) => (
        <div key={comment.id} className="comment__container">
          <div className="comment__container-content">
            <div className="comment__container-content-header">
              <span className="comment__container-content-name">{comment.name}</span>
              <span className="comment__container-content-timestamp">
                {formatDate(comment.timestamp)}
              </span>
            </div>
            <p className="comment__container-content-comment">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
  
  
}

export default CommentsSection;
