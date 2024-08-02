import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../../redux/cartSlice';

export default function OrderPage () {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        phone: '',
        email: '',
        address: '',
      });
      const cartItems = useSelector((state) => state.cart.items);
      const navigate = useNavigate();
      const dispatch = useDispatch();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const orderData = {
          user: formData,
          items: cartItems,
        };
    
        console.log('Order Data:', orderData);
        dispatch(clearCart());
    
        dispatch({ type: 'cart/clear' });
        navigate('/order-confirmation');
      };

      const getSubtotal = () => {
        return cartItems.reduce((total, item) => {
          const price = item.price;
          const quantity = item.quantity;
          return total + (price * quantity);
        }, 0);
      };
    
      return (
        <div className="container mx-auto mt-20 p-4 max-w-xl">
          <h1 className="text-2xl font-medium mb-4">Enter the data to confirm the order for the amount <span className='font-bold text-red-400'>${getSubtotal().toFixed(2)}</span></h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
           <div className='flex justify-center'>
           <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              Submit Order
            </button>
           </div>
          </form>
        </div>
      );
    }