const Input = (props) => {

    const {type, name, value, handleChange, label} = props;

    return(
        <div className="input-fields-container">
            <label>{label}</label>
                <input
                    type="number"
                    name={name}
                    value={value}
                    onChange={(e)=>handleChange(e)}
                />
        </div>
    )
}

export default Input;