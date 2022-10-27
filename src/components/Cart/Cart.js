import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import Pdf from "react-to-pdf";
import { AuthContext } from '../../context/AuthContext/AuthProvider';
const ref = React.createRef();

const Cart = () => {
    const cartDetails = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(cartDetails)
    const {name, price, vat} = cartDetails;
    console.log(vat)
    const parsePrice = parseInt(price);
    const parseVat = parseInt(vat)
    const totalPrice = parsePrice + parseVat;
    const handleCheckOut = () =>{
        toast.success('Checkout Success full')
    }
    return (
        <div className='w-5/6 md:w-[800px] mx-auto my-10' >
            <h1 className='font-bold text-2xl my-3 text-center' >Course : {name}</h1>
            <ul className='border p-5 md:p-9 rounded-md' ref={ref} >
                <h2 className='mb-4'>Cart Total</h2>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>User Name :</p>
                    <p>{user.displayName}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Course Name :</p>
                    <p>{name}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Subtotal :</p>
                    <p>{parsePrice}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Vat :</p>
                    <p>{parseVat}</p>
                </li>
                <li className='flex justify-between py-4 px-3 border'>
                    <p>Total :</p>
                    <p>{totalPrice}</p>
                </li>
            </ul>
            <div className='flex flex-col md:flex-row justify-center md:justify-between'>
                <button onClick={handleCheckOut} className='mt-4 py-3 px-5 bg-red-500 text-white' >Procced to Checkout</button>
                
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({toPdf}) => <button onClick={toPdf} className='mt-4 py-3 px-5 bg-red-500 text-white' >Download Details</button> }
                </Pdf>
            </div>
        </div>
    );
}

export default Cart;
