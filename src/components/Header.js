import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <div className="header">
            <h1>{ title }</h1>
        </div>
    )
}

Header.defaultProp = {
    title: 'users list'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;