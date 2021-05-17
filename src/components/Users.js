import User from "./User"

const List = ({ users, removeUser }) => {
    return (
        <div className="users">
            { users.map(user =>  (
                <User removeUser={removeUser} key={user.id} user={user} />
            )) }
        </div>
    )
}

export default List
