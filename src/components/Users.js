import User from "./User"
import PropTypes from 'prop-types'

const List = ({ users, removeUser }) => {
    return (
        <div className="users">
            { users.map(user =>  (
                <User removeUser={removeUser} key={user.id} user={user} />
            )) }
        </div>
    )
}

List.propTypes = {
    user: PropTypes.object,
    removeUser: PropTypes.func,
}

export default List
