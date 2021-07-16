import AppRouter from "./AppRouter";
import CartProvider from "./helpers/cartProvider";
import FilterProvider from "./helpers/filterProvider";
import AuthProvider from "./helpers/AuthProvider";

function App() {
	return (
		<>
			<AuthProvider>
				<FilterProvider>
					<CartProvider>
						<AppRouter />
					</CartProvider>
				</FilterProvider>
			</AuthProvider>
		</>
	);
}

export default App;
