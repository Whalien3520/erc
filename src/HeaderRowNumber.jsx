function HeaderRowNumber({label, value, onChange}) {
    return (
        <div>
            <label>
                {label}
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </label>
        </div>
    )
}

export default HeaderRowNumber