const Checkbox = ({ item, onCheck, checkedId }) => {
  const { name, value } = item

  const isCurrentChecked = item.id === checkedId

  return (
    <fieldset>
      <label htmlFor={name}>{name}</label>
      <input
        type="checkbox"
        name={value}
        value={value}
        checked={isCurrentChecked}
        onChange={() => onCheck(item.id)}
      />
    </fieldset>
  )
}

export default Checkbox
