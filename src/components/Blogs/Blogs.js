import React from 'react';

const Blogs = () => {
    return (
        <div className='container w-5/6 md:w-[750px] mx-auto my-6 h-screen' >
            <h1 className='text-3xl font-bold text-center my-6' >This is Our Blog Components </h1>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        What is cors ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                Why are you using firebase? What other options do you have to implement authentication ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    How does the private route work ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</small>
                </div>
            </div>
            <div className="collapse my-4">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                What is Node ? How does Node work ?
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
                    <small className='text-white' >Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</small>
                </div>
            </div>
        </div>
    );
}

export default Blogs;

