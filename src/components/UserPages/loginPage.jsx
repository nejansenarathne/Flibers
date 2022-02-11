import React from 'react';

const LoginPage = () => {
    return ( 
        <div className='loginPage'>
            <h2>Login for Flibers</h2>
            <div className="loginElements">
                <form>
                    <input type="text" id='username' placeholder='Enter your Username' />
                    <input type="password" id='password' placeholder='Enter your Password' />
                    <button className='loginBtn' id='loginBtn'>Login</button>
                </form>
            </div>
        </div>
     );
}
 
export default LoginPage;