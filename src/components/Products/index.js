import React from 'react';

import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton
} from './ProductsElements';

const Products = ({ heading, data }) => {
    let history = useHistory();

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                {/* <ProductButton>{product.button}</ProductButton> */}
                <Button onClick={() => {
                    console.log("here");
                    history.push({pathname:'/checkout', state: {productname: product.name, price: product.price,description: product.desc}});
                    }}>
                    Add to cart

                </Button>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;