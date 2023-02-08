import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "./styles.css"

function MyButton({count, onClick}) {
  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

function App() {
  const [style, setStyle] = useState("")

  function handleClickOne(){
    setStyle('style1')
  }

  function handleClickTwo(){
    setStyle('style2')
  }

  function handleClick(){
    alert("Button was clicked")
  }


  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );


  return (
    <div className="App">
      <div className={style}>
        <h1>Hello <p style={ {backgroundColor: "red"} }>{user.name}</p> </h1>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default App;
