import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types'

const AddUsers = ({ onAdd }) => {
    const [ firstname, setFirstname ] = useState('');
    const [ lastname, setLastname ] = useState('');
    const [ age, setAge ] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();

        if(!firstname) {
            alert('Please add a name')
            return
        }

        // initializing a new user
        const id = Math.floor(Math.random() * 10000) + 1;
        const newUser = { id, firstname, lastname, age };
        onAdd(newUser);

        setFirstname('');
        setLastname('');
        setAge(0);
    }

    return (
        <form onSubmit={ onSubmit }>
            <div className="form-control">
                <input 
                    value={ firstname }
                    onChange={(e) => setFirstname(e.target.value)}
                    placeholder="First Name" 
                />
            </div>
            <div className="form-control">
                
                <input 
                    value={ lastname }
                    onChange={(e) => setLastname(e.target.value)} 
                    placeholder="Last Name" 
                />
            </div>
            <div className="form-control">
                <input 
                    type="number"
                    value={ age }
                    onChange={(e) => setAge(e.target.value)} 
                    placeholder="Age" 
                />
            </div>

            <input
                type="submit"
            />
        </form>
    )
}

AddUsers.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    age: PropTypes.number,
    onSubmit: PropTypes.func,
    addUser: PropTypes.func,
}

export default AddUsers
