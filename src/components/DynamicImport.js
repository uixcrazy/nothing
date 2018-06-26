import React, { Component } from 'react';

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}
export default function asyncComponent(loadFn) {
  const Page = (props) => (
    <DynamicImport load={loadFn}>
      {(Component) => Component === null
        ? <p>Loading</p>
        : <Component {...props} />}
    </DynamicImport>
  )
  return Page;
}
