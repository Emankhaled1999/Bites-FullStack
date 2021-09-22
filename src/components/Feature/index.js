import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Order of the Day</h1>
      <p>Smoked cheese burger served with french fries.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;