import React from 'react'

/**
* This is the component which renders the form for creating a new lead
* @class Button
* @author Mayas Haddad
*/
export default class SVGIcon extends React.Component {
    
  /**
  **  @name constructor
  **/
  constructor(props) {
    super(props)
    this.props = props
  }
  
  /**
  * renders the JSX representing the add new lead form.
  * @returns {jsx}
  */
  render() {
    const vMask = 'url(' + this.props.imageUrl + ') no-repeat ' + 50 + '% ' + 50 + '%',
          vMaskSize = 'cover',
          defaultStyle = {
            WebkitMask: vMask,
            mask: vMask,
            WebkitMaskSize: vMaskSize,
            maskSize: vMask
          }

    const vStyle = Object.assign(defaultStyle, this.props.customStyle)

    return (<div style={ vStyle } ></div>)
  }
}

SVGIcon.propTypes = {
  imageUrl: React.PropTypes.string.isRequired,
  customStyle: React.PropTypes.object.isRequired
}