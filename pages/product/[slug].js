import React from 'react';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Link from 'next/link';
import Image from 'next/image';

const ProductScreen = () => {
    const {query} = useRouter();
    const {slug} = query;
    const product = data.products.find(x=>x.slug === slug);
    if (!product){
        return (
            <div>Product not found</div>
        )
    }
    else {
        return (
        <Layout title={product.name}>
            <div className=' pb-5 px-5'>
                <Link href='/'>back to products</Link>
            </div>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image
                        src={product.image}
                        alt ={product.name}
                        layout='responsive'
                        width = {640}
                        height={640}
                    />
                </div>
                <div>
                    <ul>
                        <li>
                            <h1 className='text-lg'>{product.name}</h1>
                        </li>
                        <li>Category: {product.category}</li>
                        <li>Brand: {product.brand}</li>
                        <li>{product.rating} of {product.numReviews} reviews</li>
                        <li>Description: {product.description}</li>
                    </ul>
                </div>
                <div className='card p-5 h-40'>
                    <div className='flex flex-row justify-between w-full'>
                        <div>Price</div>
                        <div>${product.price}</div>
                    </div>
                    <div className='flex flex-row justify-between w-full'>
                        <div>Status</div>
                        <div>{product.countInStock>0? 'In stock': 'Out Of Stock'}</div>
                    </div>
                    <button className='primary-button w-full'>Add to cart</button>
                </div>
            </div>
        </Layout>
    );}
};

export default ProductScreen;