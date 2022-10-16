import React, { useState } from 'react';

const Shipment = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    // get data through handler 

    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handlePhone = e => {
        setPhone(e.target.value)
    }
    

    const handleShipment = event => {
         event.preventDefault()

         const shipmentData = { name, email, password, address, phone};
         console.log(shipmentData)

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipment</h2>

                <form onSubmit={handleShipment} >
                    <div className="input-group">
                        <label htmlFor="name">Your name</label>
                        <input type="text" onChange={handleName} name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" onChange={handleEmail} name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={handlePassword} name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input type="text" onChange={handleAddress} name="address" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" onChange={handlePhone} name="phone" required />
                    </div>
                    <div className="submit-btn">
                        <input type="submit" value="Login" />
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Shipment;