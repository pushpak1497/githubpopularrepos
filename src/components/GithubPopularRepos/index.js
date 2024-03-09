import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {repoData: [], isLoading: false, activeId: languageFiltersData[0].id}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    console.log(url)
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      popularRepos: data.popular_repos,
    }
    const {popularRepos} = updatedData
    const updatedRepos = popularRepos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    if (response.ok) {
      this.setState({
        repoData: updatedRepos,
        isLoading: false,
      })
    } else {
      this.renderFailure()
    }
  }

  renderFailure = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went wrong</h1>
    </>
  )

  languageSelected = id => {
    this.setState(
      {
        activeId: id,
      },
      this.getData,
    )
  }

  render() {
    const {repoData, isLoading, activeId} = this.state
    console.log(repoData)
    return (
      <div>
        <h1 className="heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              languageSelected={this.languageSelected}
              isActive={activeId === each.id}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="repo-list-container">
            {repoData.map(each => (
              <RepositoryItem
                repoDetails={each}
                key={each.id}
                isLoading={isLoading}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
