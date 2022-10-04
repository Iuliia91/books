import { useEffect, useState } from 'react'
import styles from '../styles/Header.module.scss'
import { useAppContext } from '../context/AppContext'
import Checkbox from './Checkbox'

const CHECKBOX_DATA = [
  { name: 'English', value: 'en', id: 'en' },
  { name: 'Franch', value: 'fr', id: 'fr' },
]

const Header = () => {
  const [checkedId, setCheckedId] = useState('')

  const [appState, setAppState] = useAppContext()

  const handleCheckedId = (id) => {
    setCheckedId(id)
    setAppState(id)
  }

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
    </form>
  )
}

export default Header
