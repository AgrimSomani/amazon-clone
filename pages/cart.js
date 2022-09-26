import React, { useContext } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';





const CartScreen = () => {

    const router = useRouter();

    const {state,dispatch} = useContext(Store)
    const{cart:{cartItems}} = state;

    const removeItemHandler = (item) => {
        dispatch({type:'CART_REMOVE_ITEM',payload:item})
    }

    const updateCartValueHandler = (item,qty) =>{
        const quantity = Number(qty);
        dispatch({type:'CART_ADD_ITEM',payload:{...item,quantity}})
    }

    return (
        <Layout title="Shopping Cart">
            <h1 className='mb-4 text-xl'>Shopping Cart</h1>
            {cartItems.length === 0?
             (<div>Cart is Empty. <Link href={'/'}>Go shopping</Link></div>):
            (
                <div className='grid md:grid-cols-4 md:gap-5'>
                    <div className='overflow-x-auto md:col-span-3'>
                        <table className='min-w-full'>
                            <thead className='border-b'>
                                <tr>
                                    <th className='px-5 text-left '>Item</th>
                                    <th className=' py-5 text-right '>Quantity</th>
                                    <th className=' py-5 text-right '>Price</th>
                                    <th className='py-5 '>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.map((item)=>(
                                    <tr key={item.slug} className='border-b'>
                                        <td className='py-3'>
                                            <Link href={`/product/${item.slug}`}>
                                                <a className='flex items-center'>
                                                    <Image
                                                        src={item.image}
                                                        alt={item.name}
                                                        height={50}
                                                        width={50}
                                                    >   
                                                    </Image>
                                                    &nbsp;
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </td>
                                        <td className=' text-right py-3'>
                                            <select value={item.quantity} onChange={(e)=>updateCartValueHandler(item,e.target.value)}>
                                                {
                                                    [...Array(item.countInStock).keys()].map((item)=>
                                                        <option key={item+1} value={item+1}>
                                                            {item+1}
                                                        </option>
                                                        )
                                                }
                                            </select>
                                        </td>
                                        <td className=' text-right py-3'>${item.price}</td>
                                        <td className=' text-center py-3'>
                                            <button onClick={()=>removeItemHandler(item)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='card p-5 h-32'>
                        <ul>
                            <li>
                                <div className='text-xl'>Subtotal ${cartItems.reduce((a,c)=>a+(c.quantity*c.price),0)} </div>
                            </li>
                            <li>
                                <button className='primary-button w-full' onClick={()=>router.push('/shipping')}>Check out</button>
                            </li>
                        </ul>  
                    </div>
                </div>
            )
            }
        </Layout>
    );
};

export default CartScreen;