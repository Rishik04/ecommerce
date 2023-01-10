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

  constructor() {
    super();

    this.state = {
      products: [
        {
          id: 1,
          title: "Veg Farmhouse Pizza",
          category: "PIZZA",
          price: 249,
          type: "Regular",
          img: "assets/pizza.png",
          discount: 10,
          wishlist: true,
          qty: 0,
        },
        {
          id: 2,
          title: "Veg Farmhouse Pizza",
          category: "PIZZA",
          price: 149,
          type: "Regular",
          img: "assets/pizza.png",
          discount: 10,
          wishlist: false,
          qty: 0,
        },
        {
          id: 3,
          title: "Chesse and Onion",
          category: "PIZZA",
          price: 99,
          type: "Regular",
          img: "assets/pizza.png",
          discount: 10,
          wishlist: true,
          qty: 0,
        },
        {
          id: 4,
          title: "Veg Cheese Burger",
          category: "Burger",
          price: 49,
          type: "Medium",
          img: "assets/burger.png",
          discount: 5,
          wishlist: false,
          qty: 0,
        },
        {
          id: 5,
          title: "Red Sauce Pasta",
          category: "Pasta",
          price: 349,
          type: "Full",
          img: "assets/pasta.png",
          discount: 10,
          wishlist: true,
          qty: 0,
        },
        {
          id: 6,
          title: "Veg Farmhouse Pizza",
          category: "PIZZA",
          price: 199,
          type: "Regular",
          img: "assets/pizza.png",
          discount: 10,
          wishlist: false,
          qty: 0,
        },
        {
          id: 7,
          title: "Hot Chocolate Brownie",
          category: "Desserts",
          price: 299,
          type: "With Icecream",
          img: "assets/desserts.png",
          discount: 10,
          wishlist: false,
          qty: 0,
        },
        {
          id: 8,
          title: "Peppy Paneer",
          category: "PIZZA",
          price: 149,
          type: "Cheese Burst",
          img: "assets/pizza.png",
          discount: 10,
          wishlist: false,
          qty: 0,
        },
      ],
    };
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <Title>
          Best Selling <span style={{ color: "darkorange" }}>Products</span>
        </Title>
        <Wrapper>
          {products.map((item) => {
            return (
              <BestProducts
                product = {item}
                key={item.id}
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
