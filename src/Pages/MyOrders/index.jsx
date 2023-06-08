import Layout from "../../Components/Layaout"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Components/Context'
import OrdersCard from '../../Components/OrdersCard'


function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
    <div className='flex items-center justify-center relative 2-80 mb-4'>
      <h1 className='font-medium text-xl'>My Orders</h1>
    </div>

      {
        context.order?.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts} />
          </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders
