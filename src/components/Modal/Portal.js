import { Component } from 'react'
import ReactDOM from 'react'

const portalRool = document.getElementById('portal')
export default class Portal extends Component{
    constructor() {
        super()
        this.el = document.createElement('div')
    }

    componentDismount = () => {
        portalRool.appendChild(this.el)
    }
    componentWillUnmount = () => {
        portalRool.removeChild(this.el)
    }
    render() {
    const { children } = this.props
    return ReactDOM.createPortal(children, this.el)
}
}
