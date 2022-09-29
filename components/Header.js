const Header = () => {
  return (
    <form className="flex h-full flex-row justify-center items-center background-red">
      <fieldset>
        <input type="search" placeholder="Seacrch..." />
      </fieldset>
      <div className="flex">
        <fieldset>
          <input type="checkbox" name="English" />
          <label for="English">Eng</label>
        </fieldset>
        <fieldset>
          <input type="checkbox" name="Franch" />
          <label for="Franch">Franch</label>
        </fieldset>
      </div>
    </form>
  )
}

export default Header
