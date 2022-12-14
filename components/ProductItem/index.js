import Link from 'next/link';
import React from 'react';


const ProductItem = ({product}) => {
    return (
        <div className='card'>
            <Link href={`/product/${product.slug}`}>
                <a>
                    <img
                        src={product.image}
                        alt={product.name}
                        className={''}
                    />
                </a>
            </Link>
            <div className='flex flex-col items-center justify-center p-5'>
                <Link href={`/product/${product.slug}`}>
                    <a>
                        <h2 className='text-lg'>{product.name}</h2>
                    </a>
                </Link>
                <h2 className='mb-2'>{product.brand}</h2>
                <h2>${product.price}</h2>
                <button className='primary-button' type='button'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default ProductItem;