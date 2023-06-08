import { useContext } from 'react'
import Layaut from '../../Components/Layaout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Components/Context'
function Home() {
	const context = useContext(ShoppingCartContext)

	const renderView = () => {
		if (context.filteredItems?.length > 0) {
			return (
				context.filteredItems?.map(item => (
					<Card key={item.id} data={item} />
				))
			)
		} else {
			return (
				<div>We don't have anything :(</div>
			)
		}
	}



return (
	<Layaut>
		<div className='flex items-center justify-center relative 2-80 mb-4'>
			<h1 className='font-medium text-xl'>Exclusive products</h1>
		</div>
		<input
			type="text"
			placeholder='Search a product'
			className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
			onChange={(event) => context.setSearchByTitle(event.target.value)}
		/>
		<div className='grid gap-16 grid-cols-4 w-full max-w-screen-lg gap-y-4'>
			{renderView()}
		</div>
		<ProductDetail />
	</Layaut>
)
}

export default Home
