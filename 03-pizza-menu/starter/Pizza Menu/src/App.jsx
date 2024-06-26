import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Pizza({ name, ingredients, photo, price, soldout }) {
  return (
    <div className={`pizza ${soldout ? 'sold-out' : ""}`}>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>Price: ${price}</span>
        <span>{soldout ? 'SOLD OUT' : ''}</span>        
      </div>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;

  return (
    <main className="menu">
      <h2>Our menu</h2>


    {pizzas &&(
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza
            key={pizza.name}
            photo={pizza.photoName}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            soldout={pizza.soldOut}
          />
        ))}
      </ul>
    )}
      
    </main>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hours >= openHour && hours <= closeHour;

  // if(hours >= openHour && hours <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed")

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>"We're open until {closeHour}:00. Come visit us or order online"</p>
          <button className="btn">Order</button>
        </div>
        
      )}
    </footer>
  );
}
