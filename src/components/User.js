
import { FaTimes } from 'react-icons/fa'

const User = ({ user, removeUser }) => {
    return (
        <div className="user">
            <li>
                {`${user.name}  ${user.lastname}`} 
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={ () => removeUser(user.id)}
                />
            </li>
        </div>
    )
}

export default User
