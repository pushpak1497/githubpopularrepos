import './index.css'

const LanguageFilterItem = props => {
  const {details, languageSelected, isActive} = props
  const {id, language} = details
  const activeClassName = isActive && 'active-tab'

  const onClickLanguage = () => {
    languageSelected(id)
  }
  return (
    <li>
      <button
        type="button"
        className={`button ${activeClassName}`}
        onClick={onClickLanguage}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
