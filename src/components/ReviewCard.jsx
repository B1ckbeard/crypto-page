import React from 'react';
import './reviewCard.scss';

const ReviewCard = ({ data, position }) => {
  return (
    <div className={position === "left"? "review left" : "review"}>
      <div className="review_user">
        <div className="review_user_info">
          <div className="review_user_info-avatar">
            <img src={data.avatar} alt="avatar" />
          </div>
          <div className="review_user_info_nickname">
            <p className="review_user_info_nickname-name">{data.userName}</p>
            <p className="review_user_info_nickname-nick">{data.nick}</p>
          </div>
        </div>
        <div className="review_user-message">
          <p>
            {data.message}
          </p>
        </div>
      </div>
    </div>
  )
};

export default ReviewCard;