const OrderCard = props => {
	const { id, title, imageUrl, price, handleDelete } = props;

	let renderIcon
	if (handleDelete) {
		renderIcon =  <svg onClick={() => handleDelete(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 cursor-pointer" >
		<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
	</svg>
	}


	return (
		<div className='flex justify-between items-center mb-3'>
			<div className='flex items-center gap-2'>
				<figure className='w-20 h-20' >
					<img className='w-full h-full rounded-lg object-fill' src={imageUrl} alt={title} />
				</figure>
				<p className='text-sm font-ligth'>{title}</p>
			</div>
			<div className='flex items-center gap-2'>
				<p className='text-lg font-medium'>${price}</p>
				{renderIcon}
			</div>
		</div>
	)
}

export default OrderCard;