import { useState } from "react";
import reactLogo from "./assets/react.svg";
import React from "react";
import "./App.css";

function App() {
  const foodlist = [
    {
      id: "1",
      title: "Biriyani",
      cost: "200",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    },
    {
      id: "2",
      title: "Biriyani",
      cost: "200",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    },
    {
      id: "3",
      title: "Biriyani",
      cost: "200",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    },
    {
      id: "4",
      title: "Biriyani",
      cost: "200",
      image:
        "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    },
  ];
  // const intialCartItems = {
  //   image: "",
  //   title: "",
  //   cost: "",
  // };
  const [count, SetCount] = useState(0);
  const [CartItems, setCartItems] = useState([]);

  const onAdd = (foodlist) => {
    const exist = CartItems.find((x) => x.id === foodlist.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === foodlist.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...CartItems, { ...foodlist, qty: 1 }]);
    }
  };
  // SetCount(count + 1);
  // setCartItems([...CartItems, foodtype]);

  // setCartItems({ ...foodlist, qty: 1 });

  const onRemove = () => SetCount(count - 1);

  return (
    <div>
      <NavBar count={count} onRemove={onRemove} />
      <HeroPanel />
      <Main
        count={count}
        onAdd={onAdd}
        CartItems={CartItems}
        foodlist={foodlist}
      />
    </div>
  );
}

function NavBar({ count, onRemove }) {
  return (
    <div className="navbar-container">
      <div className="header">
        <h3>Home Kitchen</h3>
      </div>
      <div className="menus">
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Shop</h6>
      </div>
      <div className="cart">
        <button className="nav-cart" onClick={onRemove}>
          Cart {count}
        </button>
      </div>
    </div>
  );
}

function HeroPanel() {
  return (
    <div className="hero-image">
      <img
        className="image1"
        src="https://img.traveltriangle.com/blog/wp-content/uploads/2017/04/acj-2804-chennai-beach-restaurant-cover.jpg"
        alt="Restaurent"
      />
    </div>
  );
}

function Main({ count, onAdd, CartItems, foodlist }) {
  return (
    <div className="main-container">
      <FoodList count={count} onAdd={onAdd} foodlist={foodlist} />
      <Basket CartItems={CartItems} />
    </div>
  );
}

function FoodList({ count, onAdd, foodlist }) {
  // const foodlist = [
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  //   {
  //     image:
  //       "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
  //     title: "Biriyani",
  //     cost: "Rs 200",
  //   },
  // ];

  return (
    <div className="food-list">
      {foodlist.map((f) => (
        <FoodCard foods={f} count={count} onAdd={onAdd} />
      ))}
    </div>
  );
}

function FoodCard({ foods, count, onAdd }) {
  // console.log(count);
  return (
    <div className="food-container">
      <img className="food-image" src={foods.image} alt={foods.title} />
      <h6 className="food-title">{foods.title}</h6>
      <h6>⭐⭐⭐⭐</h6>
      <h6 className="food-cost">{foods.cost}</h6>
      {/* <button className="addtocart">Add to cart</button> */}

      <button className="addtocart" onClick={() => onAdd(foods)}>
        Add to cart {count}
      </button>
      {/* <UpdateAddcartBasket like={cc} /> */}
    </div>
  );
}

function Basket({ CartItems }) {
  // const { CartItems } = props;

  console.log(CartItems);
  return (
    <div className="basket-container">
      <h5 className="heading">My Cart Items</h5>

      {/* {CartItems.length === 0 && <div> Cart Items Empty</div>} */}

      <table className="basket-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Qty </th>
            <th>Price </th>
            {/* <th>Add/Deduct</th> */}
          </tr>
        </thead>
        <tbody>
          {CartItems.length === 0 ? (
            <tr>
              <td colSpan={4}> Cart Item is empty</td>
            </tr>
          ) : (
            CartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.qty}</td>
                <td>{item.cost}</td>
                {/* <td className="add-deduct-button">
                  <button>+</button>
                  <button>-</button>
                </td> */}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* <label id="foodtitle" for="food1">
        Food Title:
      </label>
      <label id="food1">Biriyani</label> <br></br>

      <label>Qty: </label>
      <label>1</label> */}
    </div>
  );
}

export default App;
