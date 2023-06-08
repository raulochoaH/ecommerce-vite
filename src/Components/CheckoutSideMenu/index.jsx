import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../Context'
import OrderCard from '../../Components/OrderCard'
import { totalPrice} from '../utils'
import './styles.css'

const CheckoutSideMenu = () => {
	const context = useContext(ShoppingCartContext)

	const handleDelete = (id) => {
		const filteredProducts = context.cartProducts.filter(product => product.id != id)
		context.setCartProducts(filteredProducts)
	}

	const handleCheckout = () => {
		const orderToAdd = {
			date: '01.02.23',
			products: context.cartProducts,
			totalProducts: context.cartProducts.length,
			totalPrice: totalPrice(context.cartProducts)
		}

		context.setOrder([...context.order, orderToAdd])
		context.setCartProducts([])
		context.setCount([])
		context.closeCheckoutSideMenu();
		context.setSearchByTitle(null)
	}

	return (
		<aside
			className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
			<div className='flex justify-between items-center p-6'>
				<h2 className='font-medium'>My Order</h2>
				<div
					className='cursor-pointer'>
					<svg onClick={() => context.closeCheckoutSideMenu()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
			</div>
			<div className='px-6 overflow-y-scroll flex-1'>
				{
					context.cartProducts.map(product => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageUrl={product.image}
							price={product.price}
							handleDelete={handleDelete}
						/>
					))
				}
			</div>
			<div className='px-6 mb-6'>
				<p className='flex justify-between items-center mb-2'>
					<span className='font-light '>Total:</span>
					<span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
				</p>
				<Link to='/my-orders/last'>
				<button className='bg-black py-3 text-white w-full rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
				</Link>
			</div>
		</aside>
	)
}

export default CheckoutSideMenu;