import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const cartDetails = useLoaderData()
    console.log(cartDetails)
    const {name, price, vat} = cartDetails;
    console.log(vat)
    const parsePrice = parseInt(price);
    const parseVat = parseInt(vat)
    const totalPrice = parsePrice + parseVat;
    return (
        <div className='w-[800px] mx-auto my-10' >
            <h1 className='font-bold text-2xl my-3 text-center' >Course : {name}</h1>
            <ul className='border p-9 rounded-md'>
                <h2 className='mb-4'>Cart Total</h2>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Subtotal</p>
                    <p>{parsePrice}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Vat</p>
                    <p>{parseVat}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Total</p>
                    <p>{totalPrice}</p>
                </li>
                <button className='mt-4 py-3 px-5 bg-red-500 text-white' >Procced to Checkout</button>
            </ul>
        </div>
    );
}

export default Cart;
