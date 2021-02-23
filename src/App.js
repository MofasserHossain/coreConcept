import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const personName = [
    { name: 'Mofasser Hossain', job: 'Web Designer & Developer' },
    { name: 'Sayed Rabet', job: 'Web Designer & Developer' },
    { name: 'Asif Al Mahbub', job: 'Web Designer & Developer' },
    { name: 'Rakibul Islam', job: 'Web Designer & Developer' },
    { name: 'Mohammad Rayhan', job: 'Web Designer & Developer' },
    { name: 'Hafizul Islam Sakib', job: 'Web Designer & Developer' },
  ];
  const friends = [
    { name: 'Sayed Rabet', age: 18 },
    { name: 'Rakib', age: 21 },
    { name: 'Sakib', age: 20 },
    { name: 'Emon', age: 22 },
    { name: 'Asif', age: 19 },
    { name: 'Faruk', age: 20 },
    { name: 'Rayhan', age: 22 },
  ];
  const products = [
    { name: 'PhotoShop', price: '2000 $' },
    { name: 'Illastator', price: '1000 $' },
    { name: 'PDF Reader', price: '500 $' },
    { name: 'Figma', price: '3000 $' },
    { name: 'XD', price: '300 $' },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Title name="This is my first React Project"></Title>
          <div className="grid">
            {personName.map((person) => (
              <Person person={person}></Person>
            ))}
            {friends.map((friend) => (
              <FriendName friend={friend}></FriendName>
            ))}
            {/* <Person person={personName[0]}></Person>
            <Person person={personName[1]}></Person>
            <Person person={personName[2]}></Person>
            <Person person={personName[3]}></Person>
            <Person person={personName[4]}></Person>
            <Person person={personName[5]}></Person> */}
          </div>
          <Count></Count>
          <Users></Users>
        </div>
      </header>

      {/* second section */}

      <section className="productDiv">
        <div className="container">
          <Title name="Product list"></Title>
          <div className="grid2">
            {products.map((product) => (
              <Product product={product}></Product>
            ))}
            {/* <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
            <Product product={products[2]}></Product>
            <Product product={products[3]}></Product> */}
          </div>
        </div>
      </section>
    </div>
  );
}

function Person(props) {
  console.log(props);
  const { name, job } = props.person;
  return (
    <div className="personStyle">
      <h3>Name : {name}</h3>
      <span>Profession : {job}</span>
    </div>
  );
}

function FriendName(props) {
  const { name, age } = props.friend;
  return (
    <div className="personStyle">
      <h3>{name}</h3>
      <span>{age}</span>
    </div>
  );
}
function Count() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
        console.log(users);
      });
  }, []);
  return (
    <div>
      <h2>Users : {users.length}</h2>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Product(props2) {
  console.log(props2);
  const { name, price } = props2.product;
  return (
    <div className="product">
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  );
}

function Title(props3) {
  return <h3>{props3.name}</h3>;
}
export default App;
