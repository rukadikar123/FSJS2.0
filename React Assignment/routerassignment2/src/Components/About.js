import React from 'react'

const About = () => {
    return (
        <>
            <div className='flex-col items-center pt-20 h-72 bg-orange-200'>
                <h1>About Node.js®</h1>
                <p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
            </div>
        </>
    )
}

export default About