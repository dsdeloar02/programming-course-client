import React from 'react';

const FAQ = () => {
    return (
        <div className='container w-5/6 md:w-[750px] mx-auto my-6 '>
            <h1 className='text-3xl font-bold text-center my-6' > এই কোর্স থেকে কি কি শিখতে পারবে ? </h1>

            <div className='p-10 shadow-md rounded-lg' >
                <div className='p-5 border rounded-md my-4'>
                    <h3 className='font-semibold text-xl mb-3' >12 টি মডিউলে 135+ ভিডিও</h3>
                    <p>আপনারা যেন ধাপে ধাপে শিখতে পারেন সেজন্য পুরো কোর্সটি 12টি মডিউলে ও 135+ ভিডিওতে ভাগ করে সাজানো হয়েছে।</p>
                </div>
                <div className='p-5 border rounded-md my-4'>
                    <h3 className='font-semibold text-xl mb-3' >30 ঘণ্টার 15GB রেকোর্ডেড কন্টেন্ট</h3>
                    <p>সময় এবং ব্যান্ডউইডথ খরচ এর বিষয়টি বিবেচনা করে ভিডিও সাইজ এবং ডিউরেশন অপটিমাইজ করা হয়েছে।</p>
                </div>
                <div className='p-5 border rounded-md my-4'>
                    <h3 className='font-semibold text-xl mb-3' >120+ টি কুইজ</h3>
                    <p>আপনারা যেন শেখার সাথে সাথে নিজেদের প্রোগ্রেস যাচাই করতে পারেন সেজন্য প্রতিটি ভিডিও শেষে ব্যাখ্যা ও উত্তর সহ কুইজ থাকবে।</p>
                </div>
                <div className='p-5 border rounded-md my-4'>
                    <h3 className='font-semibold text-xl mb-3' >10 টি এসাইনমেন্ট</h3>
                    <p>প্রতিটি মডিউল শেষেই থাকবে বড় এসাইনমেন্ট যেগুলো আপনারা নিজে করবেন। প্রতিটি এসাইনমেন্ট এর সল্যুশন লাইভ সেশনে দেয়া হবে।</p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
