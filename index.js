import React from 'react'
import ReactDOM from 'react-dom'
import Drop from 'tether-drop'
import 'tether-drop/dist/css/drop-theme-basic.css'

const defOpts = {
  classes: 'drop-theme-basic',
  position: 'bottom left',
  openOn: 'hover'
}

class TetherDrop extends React.Component {
  constructor () {
    super()
    this.content = document.createElement('div')
  }
  componentDidMount () {
    const opts = Object.assign({
      target: this.refs.children
    }, defOpts, this.props.opts)
    opts.content = () => {
      return ReactDOM.render(this.props.drop, this.content)
    }
    this.drop = new Drop(opts)
  }
  componentWillUnmount () {
    this.drop.destroy()
  }
  render () {
    return <div ref='children'>
      {this.props.children}
    </div>
  }
}

export default TetherDrop
