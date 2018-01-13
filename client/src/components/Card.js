import React from 'react';
import { Card, CardTitle } from 'react-materialize';
import img1 from './img/og-image.png';

const card = () => {
  return (
    <Card
      style={{ width: '100%'}}
      header={<CardTitle reveal image={img1} waves='light'/>}
		  title="Matches: 10"
		  reveal={<p>Here is some more information about this product
        that is only revealed once clicked on.</p>}>
		  <p>This is a link</p>
    </Card>
  );
};

export default card;
