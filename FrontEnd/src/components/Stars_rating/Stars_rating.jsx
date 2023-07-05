import { useState } from 'react';

import StarsRating from 'react-star-rate';

const CompStarsRating = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <StarsRating value={value} onChange={value => {setValue(value);}}/>
    </div>
  );
};

export default CompStarsRating