import React from 'react';
import { useParams } from 'react-router-dom';

const AboutBlock = () => {

    let {username} = useParams()

  return <div>
      About Page {username}
  </div>;
}

export default AboutBlock;
