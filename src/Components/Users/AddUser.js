import { useState } from 'react';
import '../UI/AddUser.css';
import ErrorPopUp from './ErrorPopUp';

const AddUser = props => {

    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');
    const [isValid, setIsValid] = useState(true);

    const usernameChangeHander = event => {
        setUsername(event.target.value);
    }

    const ageChangeHandler = event => {
        setAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0 || +age < 1){
            setIsValid(false);
            return;
        }
        console.log(username, age);
        props.onAddUser(username, age);
        setUsername('');
        setAge('');
    }

    const confirmHandler = () => {
        setIsValid(true);
    };

    return (
        <div className="add-user">
            {!isValid && <ErrorPopUp confirm={confirmHandler}/>}
            <form className='add-user-form' onSubmit={addUserHandler}>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" onChange={usernameChangeHander} value={username}/>
                <label htmlFor="username">Age: </label>
                <input type="number" id="age" onChange={ageChangeHandler} value={age} min="1" max="200"/>
                <input type="submit" id="submitBtn" value="ADD USER" />
            </form>
        </div>
        
    );
}

export default AddUser;