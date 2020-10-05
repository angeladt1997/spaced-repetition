import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <div className="appDescription">
        <section>
          <p>
            Practice learning a language with the spaced repetition revision technique.
          </p>
          <div className="suButton">
            <h2>Sign up</h2>
            <RegistrationForm
              onRegistrationSuccess={this.handleRegistrationSuccess}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationRoute
