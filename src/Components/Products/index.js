import React from 'react';
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
} from './ProduvtsElements';

const Products = ({ heading, data }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          const {img,name,desc,price,button} = product;
          return (
            <ProductCard key={index}>
              <ProductImg src={img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{name}</ProductTitle>
                <ProductDesc>{desc}</ProductDesc>
                <ProductPrice>{price}</ProductPrice>
                <ProductButton>{button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;