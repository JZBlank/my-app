import logo from './logo.svg';
import './App.css';

function MyButton() {
  function handleClick(){
    alert("Button was clicked")
  }

  return (
    <button onClick={handleClick}>
      I'm a button
    </button>
  );
}

function App() {

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
      <h1>Hello <p style={ {backgroundColor: "red"} }>{user.name}</p> </h1>
      <MyButton/>
      <ul>{listItems}</ul>
    </div>
  );
}

export default App;
