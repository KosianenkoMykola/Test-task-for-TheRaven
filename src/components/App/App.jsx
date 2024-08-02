import Cart from "../Cart/Cart";
import Header from "../Header/Header";
import ProductsList from "../ProductsList/ProductsList";
import { Routes, Route } from 'react-router-dom';
import OrderPage from '../OrderPage/OrderPage';
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/ordered" element={<OrderPage />} />
          <Route path="/" element={<ProductsList />} />
        </Routes>
        <Cart /> 
      </main>
    </>
  );
}
