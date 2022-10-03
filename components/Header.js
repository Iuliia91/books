import { useEffect, useState } from 'react'
import styles from '../styles/Header.module.scss'

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

const CHECKBOX_DATA = [
  { name: 'English', value: 'en', id: 'en' },
  { name: 'Franch', value: 'fr', id: 'fr' },
]

const Header = () => {
  const [checkedId, setCheckedId] = useState('')

  const handleCheckedId = (id) => {
    setCheckedId(id)
  }
  console.log(checkedId)

  /*  useEffect(async () => {
    if (checkedId !== '') {
      const response = await fetch(
        `https://gutendex.com/books?languages=${checkedId}`
      )
      const data = await response.json()
      console.log(data)
    }
  }, [])*/

  return (
    <form className={styles.header}>
      <fieldset>
        <input type="search" placeholder="Seacrch..." />
      </fieldset>
      <div>
        {CHECKBOX_DATA.map((item) => {
          return (
            <Checkbox
              item={item}
              key={item.id}
              onCheck={handleCheckedId}
              checkedId={checkedId}
            />
          )
        })}
      </div>
      <input type="submit" name="Search" />
    </form>
  )
}

export default Header
