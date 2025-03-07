import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <div className={`message ${variant}`}>
      {children}
      <style jsx>{`
        .message {
          padding: 10px;
          margin: 10px 0;
          border-radius: 5px;
          color: white;
        }
        .success {
          background-color: green;
        }
        .danger {
          background-color: red;
        }
      `}</style>
    </div>
  );
};

export default Message;
