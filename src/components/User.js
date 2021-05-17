import { FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

const User = ({ user, removeUser }) => {
    return (
        <div className="user">
            <li>
                {`${user.firstname}  ${user.lastname}`} 
                <FaTimes
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={ () => removeUser(user.id)}
                />
            </li>
        </div>
    )
}

User.propTypes = {
    user: PropTypes.object,
    removeUser: PropTypes.func,
}

export default User
