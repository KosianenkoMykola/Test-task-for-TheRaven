import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ProductsList from "../ProductsList/ProductsList";


export default function App() {
  return (
    <>
      <Header />
      <main>
      <Cart /> 
      <ProductsList />
      </main>
    </>
  );
}
