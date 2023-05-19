import React, { useState, useEffect } from 'react';
import '../Component/CommentsSection.scss';

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
    <div className="comments">
      {/* Render comments */}
      {existingComments.map((comment) => (
        <div key={comment.id} className="comments__container">
          <div className="comments__container-img"></div>
          <div className="comments__container-content">
            <span className="comments__container-content-name">{comment.name}</span>
            <span className="comments__container-content-timestamp">
              {formatDate(comment.timestamp)}
            </span>
            <p className="comments__container-content-comment">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsSection;
