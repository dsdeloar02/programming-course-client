import React from 'react';

const Cart = () => {
    return (
        <div className='w-[800px] mx-auto my-10' >
            <ul className='border p-9 rounded-md'>
                <h2 className='mb-4'>Cart Total</h2>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Subtotal</p>
                    <p>300</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Vat</p>
                    <p>300</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Total</p>
                    <p>300</p>
                </li>
                <button className='mt-4 py-3 px-5 bg-red-500 text-white' >Procced to Checkout</button>
            </ul>
        </div>
    );
}

export default Cart;
