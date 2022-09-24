import Head from 'next/head'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout title={'Home page'}>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {data.products.map((product,index)=>
          <ProductItem product={product} key={product.slug}/>
        )}
      </div>
    </Layout>
  )
}
