import React, { useState } from 'react';
import QuestionPage from './QuestionPage';
import ArticlePage from './ArticlePage';
import '../styles/PostPage.css';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (e) => {
    setPostType(e.target.value);
  };

  return (
    <div className="post-page-container">
      <h2>Create a New Post</h2>
      <div>
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          />
          Question
        </label>
        <label>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          />
          Article
        </label>
      </div>
      {postType === 'question' ? <QuestionPage /> : <ArticlePage />}
    </div>
  );
};

export default PostPage;
