import React from 'react';
import '../styles/SubscriptionBar.css';

function SubscriptionBar() {
  return (
    <div className="subscription-bar">
      <span className="subscription-text">SIGN UP FOR OUR DAILY INSIDER</span>
      <input type="email" placeholder="Enter your email" className="subscription-input" />
      <button className="subscription-button">Subscribe</button>
    </div>
  );
}

export default SubscriptionBar;

