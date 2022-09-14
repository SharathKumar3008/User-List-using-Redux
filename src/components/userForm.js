import React, {useState} from 'react';
import {connect} from 'react-redux';
import addUser from '../action/userAction';

const UserForm = (props) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [city, setCity] = useState('');

    const submitUserForm = (event) => {
        event.preventDefault();
        let userData = {
            name, mobile, city
        };
        if(name !== '' && mobile !== "" && city !== "") {
            setName('');
            setMobile('');
            setCity('');
            props.dispatch(addUser(userData));
        }
    }
    return (
        <form className="add-user-form" onSubmit={submitUserForm}>
            <div class="form-field">
                <input type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} />
            </div>
            <div class="form-field">
                <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e)=> setMobile(e.target.value)} />
            </div>
            <div class="form-field">
                <input type="text" placeholder="City" value={city} onChange={(e)=> setCity(e.target.value)} />
            </div>
            <div class="form-actions">
                <input className="button" type="reset" value="Cancel" onClick={props.onClose}/>
                <input className="button button-primary" type="submit" value="Save" />
            </div>
        </form>
    )
}

export default connect()(UserForm);