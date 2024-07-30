import "modern-normalize";
import ProductsList from "../ProductsList/ProductsList";
import { TiContacts } from "react-icons/ti";


export default function App() {
  return (
    <div>
      <h1>
        Phonebook
        <TiContacts />
      </h1>
      <ProductsList />
    </div>
  );
}
