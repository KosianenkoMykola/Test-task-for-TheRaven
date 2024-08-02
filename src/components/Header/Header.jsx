import { BsShop } from "react-icons/bs";
import { CiShoppingBasket } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { openCart } from '../../redux/cartSlice';

export default function Header() {
const dispatch = useDispatch()
const cartItems = useSelector((state) => state.cart.items);

const getSubtotal = () => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

return (
    <header className="flex justify-between items-center mb-5 fixed top-2 left-2 right-2 bg-slate-300 p-3 rounded-md shadow-lg">
       <div className="flex gap-8 items-center">
       <BsShop size={40} />
       <p className="mt-1 text-lg uppercase text-gray-900/80">Name Market</p>
       </div>
       <button onClick={() => dispatch(openCart())} className="flex items-center gap-3 mr-4 relative">
        <span className="sr-only">Open cart</span>
        {<CiShoppingBasket size={30}/>} {getSubtotal() === 0 || <span>${getSubtotal().toFixed(2)}</span>}
      </button>
    </header>
)
}