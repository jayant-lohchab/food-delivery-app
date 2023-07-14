import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";
function App() {
  const [isCart,setIsCart] = useState(false);
  const cartCloseHandeler = ()=>{
    setIsCart(false);
  }
  const cartOpenHandeler = ()=>{
    setIsCart(true);
  }
  return (
    <CartProvider>
    {isCart && <Cart onClose={cartCloseHandeler}/>}
      <Header onOpen = {cartOpenHandeler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
