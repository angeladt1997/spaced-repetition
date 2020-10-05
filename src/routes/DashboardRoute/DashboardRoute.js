import React, { Component } from 'react'


class DashboardRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }
    render() {
    return (
      <section>
        implement and style me
      </section>
    );
  }
}

export default DashboardRoute