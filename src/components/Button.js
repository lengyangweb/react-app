
const Button = ({ color, text, showAdd }) => {
    return (
        <div>
            <button 
                style={{ backgroundColor: color }}
                onClick={ showAdd }
            >
                { text }
            </button>
        </div>
    )
}

export default Button
