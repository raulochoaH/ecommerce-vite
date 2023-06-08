import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import { Link } from 'react-router-dom'
import Layout from "../../Components/Layaout"
import OrderCard from '../../Components/OrderCard'



function MyOrder() {
	const context = useContext(ShoppingCartContext)
	const currentPath = window.location.pathname
	let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
	if (index === 'last') index = context.order?.length - 1

	return (
		<Layout>
			<div className='flex item-center relative justify-center items-center w-80 mb-6'>
				<Link to='/my-orders' className='absolute left-0'>
					<svg className='h-6 w-6 text-black cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</Link>
				<h1>My Order</h1>
			</div>
			<div className='flex flex-col w-80'>
				{
					context.order?.[index]?.products.map(product => (
						<OrderCard
							key={product.id}
							id={product.id}
							title={product.title}
							imageUrl={product.image}
							price={product.price}
						/>
					))
				}
			</div>
		</Layout>
	)
}

export default MyOrder;
