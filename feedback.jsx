import React, { useState } from 'react';

const ChatBubbleLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const FeedbackTab = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedbackType, setFeedbackType] = useState('');
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback type:', feedbackType);
    console.log('Feedback text:', feedbackText);
    console.log('Rating:', rating);
    setFeedbackType('');
    setFeedbackText('');
    setRating(0);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    setFeedbackType('rating');
  };

  return (
    <div
      className={`fixed top-1/2 right-0 transform -translate-y-1/2 transition-all duration-300 ${
        isExpanded ? 'w-80 bg-white shadow-lg' : 'w-12 bg-gray-700 text-white'
      }`}
    >
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <ChatBubbleLeftIcon />
        {isExpanded ? 'Feedback' : null}
      </div>
      {isExpanded && (
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Submit your feedback</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="radio"
                id="bug"
                name="feedbackType"
                value="bug"
                checked={feedbackType === 'bug'}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="bug">Report a bug or issue</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="feature"
                name="feedbackType"
                value="feature"
                checked={feedbackType === 'feature'}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="feature">Feature or Enhancement request</label>
            </div>
            <div className="mb-2">
              <input
                type="radio"
                id="rating"
                name="feedbackType"
                value="rating"
                checked={feedbackType === 'rating'}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="mr-2"
              />
              <label htmlFor="rating">Leave a Rating</label>
            </div>
            {feedbackType === 'rating' && (
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={star <= rating ? 'gold' : 'gray'}
                    className="w-6 h-6 mr-1 cursor-pointer"
                    onClick={() => handleRatingChange(star)}
                  >
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                ))}
                {rating > 0 && <span className="ml-2">{rating} out of 5 stars</span>}
              </div>
            )}
            {feedbackType !== 'rating' && (
              <div className="mb-2">
                <textarea
                  className="w-full h-20 p-2 border rounded focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Enter your feedback here..."
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                ></textarea>
              </div>
            )}
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default FeedbackTab;
