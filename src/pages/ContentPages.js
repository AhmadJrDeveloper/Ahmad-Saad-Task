import React from 'react';
import NavBar from '../components/NavBar/NavBarComponent';
import { useParams } from 'react-router-dom';
import Videos from '../components/Videos/Videos';
import Article from '../components/Article/Article';

function ContentPages() {
  let { category } = useParams();

  return (
    <>
      <NavBar />
      {category === 'videos' ? <Videos /> : null}
      {category === 'articles' ? <Article /> : null}
    </>
  );
}

export default ContentPages;
