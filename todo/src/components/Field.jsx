const Field = ({className = '', id, label, type = 'text', value, onInput, ref}) => {
    return (
      <div className={`field ${className}`}>
          <label
            className="field__label"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className="field__input"
            id={id}
            placeholder=" "
            autoComplete="off"
            type={type}
            onInput={onInput}
            value={value}
            ref={ref}
          />
        </div>
    )
}

export default Field