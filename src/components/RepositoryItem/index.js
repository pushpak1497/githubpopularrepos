// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, name, starsCount, issuesCount, forksCount} = repoDetails

  return (
    <div className="list-item">
      <img src={avatarUrl} alt={name} className="avatar" />
      <h1 className="text name">{name}</h1>
      <div className="container stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="container forks">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="container issues">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon"
        />
        <p>{issuesCount} issues</p>
      </div>
    </div>
  )
}
export default RepositoryItem
