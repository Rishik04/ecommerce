import React, { Component } from "react";
import styled from "styled-components";
import BestProducts from "./BestProducts";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-evenly;
  margin: 30px 80px;
`;

export default class BestProductItems extends Component {

    OnIncrease = (product)=>{
        const {products} = this.state;
        // console.log(products)
        const index = products.indexOf(product);
        products[index].qty+=1;

        this.setState({products: products});

    }

    OnDecrease = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);

        if(products[index].qty > 0)
            products[index].qty-=1;

        this.setState({products: products});

    }

  constructor(props) {
    super(props);
    
    this.state = {
      products: this.props.products,
    };
  }


  render() {
    
    const { products } = this.state;
    console.log(products)
    return (
      <Container>
        <Wrapper>
          {products.map((item) => {
            let userItem = {wishlist: false, qty: 0};
            let Nitem = {...item, ...userItem}
            // console.log(Nitem);
            return (
              <BestProducts
                product = {Nitem}
                key={Nitem._id}
                OnIncrease={this.OnIncrease}
                OnDecrease={this.OnDecrease}
              />
            );
          })}
        </Wrapper>
      </Container>
    );
  }
}
