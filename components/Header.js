const Header = () => {
  return (
    <form className="flex">
      <fieldset>
        <input type="search" placeholder="Seacrch..." />
      </fieldset>
      <div className="flex">
        <fieldset>
          <input type="checkbox" name="English" />
          <label>Eng</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="Franch" />
          <label>Franch</label>
        </fieldset>
      </div>
    </form>
  )
}

export default Header
