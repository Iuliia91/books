const Checkbox = ({ item, onCheck, checkedId }) => {
  const { name, value } = item

  const isCurrentChecked = item.id === checkedId

  return (
    <fieldset>
      <input
        type="checkbox"
        name={value}
        value={value}
        checked={isCurrentChecked}
        onChange={() => onCheck(item.id)}
      />
      <label>{name}</label>
    </fieldset>
  )
}

export default Checkbox
