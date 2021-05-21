import AppRouter from "./AppRouter";
import CartProvider from "./helpers/cartProvider";
import FilterProvider from "./helpers/filterProvider";

function App() {
  return (
    <>
      <FilterProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </FilterProvider>
    </>
  );
}

export default App;
