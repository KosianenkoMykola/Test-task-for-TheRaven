import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { selectProducts } from '../../redux/productsSlice';
import { Toaster, toast } from 'react-hot-toast';

export default function ProductsList() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    toast.success('Added to cart')
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <button
                className="mt-3 px-5 py-[2px] font-thin bg-slate-500 text-white/80 rounded-sm hover:bg-slate-600"
                onClick={() => handleAddToCart(product)}
              >
                Buy
              </button>
              <h3 className="mt-2 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Toaster
  position="bottom-center"
  reverseOrder={false}/>
  </div>
  );
}
