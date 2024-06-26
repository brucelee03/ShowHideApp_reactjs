import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  showFirstName = () => {
    this.setState(prevState => ({
      firstName: !prevState.firstName,
    }))
  }

  showLastName = () => {
    this.setState(prevState => ({
      lastName: !prevState.lastName,
    }))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-container">
          <div className="button-card">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="name-card">
                <p className="name">Joe</p>
              </div>
            )}
          </div>
          <div className="button-card">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="name-card">
                <p className="name">Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
