import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capital extends Component {
  state = {
    selectedOption: countryAndCapitalsList[0].id,
  }

  onChangeDropdown = event => {
    this.setState({selectedOption: event.target.value})
  }

  render() {
    const {selectedOption} = this.state
    const {country} =
      countryAndCapitalsList.find(each => each.id === selectedOption) || 'Hi'
    console.log(country)

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select defaultValue="Hi" onChange={this.onChangeDropdown}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is Capital of which Country?</p>
          </div>
          <h1 className="answer">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capital
