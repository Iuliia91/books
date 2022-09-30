import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <form className={styles.header}>
      <fieldset>
        <input type="search" placeholder="Seacrch..." />
      </fieldset>
      <div>
        <fieldset>
          <input type="checkbox" name="English" />
          <label>Eng</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="Franch" />
          <label>Franch</label>
        </fieldset>
      </div>
      <input type="submit" name="Search" />
    </form>
  )
}

export default Header
