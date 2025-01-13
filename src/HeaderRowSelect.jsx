// src/HeaderRowSelect.jsx

function HeaderRowSelect({label, value, onChange, options}) {
    return (
        <div>
            <label>
                {label}
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    )
}

export default HeaderRowSelect