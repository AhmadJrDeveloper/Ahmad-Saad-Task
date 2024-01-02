import React from 'react';
import './ArticleElement.css'

const ArticleElement = ({ imageUrl, header, subHeader, date }) => {
  return (
    <div className='Articles-Elements'>
      <img className='Articles-Elements-Image' src={imageUrl} alt="" />
      <div className='Article-Elements-Headers'>
        <p className='Articles-Elements-Image-Header'>{header}</p>
        <p className='Articles-Elements-Image-SubHeader'>
          {subHeader} &nbsp;&nbsp;&nbsp; <span className='Articles-Elements-Image-SubHeader-Span'>{date}</span>
        </p>
      </div>
    </div>
  );
};

export default ArticleElement;
