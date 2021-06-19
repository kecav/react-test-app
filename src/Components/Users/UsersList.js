import '../UI/UsersList.css';

const UsersList = (props) => {
    return (
        <div className="users-list-div">
            <ul className="users-list">
                {props.users.length ? '': <p>Please enter something to display.</p>}
                {props.users.map(user => (
                    <li key={user.id} className="list-items">
                        {user.name} ({user.age} years old)
                    </li>
                ))}
            </ul>
        </div>   
    );
}

export default UsersList;