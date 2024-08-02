import { BsShop } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { openCart } from '../../redux/cartSlice';

export default function Header() {
const dispatch = useDispatch()

return (
    <header className="flex justify-between items-center bg-slate-300 p-3 rounded-md shadow-lg mb-5">
       <div className="flex gap-8 items-end">
       <BsShop size={40} />
       <p className="mt-1 text-lg text-gray-900/80">Name Market</p>
       </div>
       <button onClick={() => dispatch(openCart())} className="relative">
        <span className="sr-only">Open cart</span>
        {<BsShop/>}
      </button>
    </header>
)
}