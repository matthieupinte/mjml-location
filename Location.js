import React, { Component } from 'react'
import _ from 'lodash'
import {
  MJMLColumnElement,
  elements,
  registerElement,
} from '../mjml/lib'

const {
  text: MjText,
  image: MjImage
} = elements;

const NAME = 'location'

@MJMLColumnElement({
  tagName: 'mj-location',
  content: ' ',
  attributes: {
    'color': '#3aa7ed',
    'font-family': 'Roboto, sans-serif',
    'font-size': '18px',
    'font-weight': 500,
    'padding': '10px 25px'
  }
})
class Location extends Component {

  getStyles() {
    const { mjAttribute } = this.props

    return _.merge({}, this.constructor.baseStyles, {
      text: {
        color: mjAttribute('color'),
        textDecoration: 'none'
      }
    })
  }

  getAttributes() {
    const { mjAttribute } = this.props

    return {
      text: {
        'font-family': mjAttribute('font-family'),
        'font-size':   mjAttribute('font-size'),
        'font-weight': mjAttribute('font-weight'),
        'text-decoration': mjAttribute('text-decoration'),
        'padding': 0
      },
      img: {
        'padding': 0
      }
    }
  }

  render() {
    const styles = this.getStyles()
    const attrs  = this.getAttributes()
    const { mjAttribute } = this.props

    const address = `http://maps.google.com/maps?q=${encodeURIComponent(mjAttribute('address'))}`
    const text    = mjAttribute('text') || mjAttribute('address')

    return (
      <table width="100%">
        <tbody>
          <MjImage
            {...attrs.img}
            src="http://i.imgur.com/DPCJHhy.png"
            href={address} />
          <MjText
            {...attrs.text}
            align="center">
            <a style={styles.text} href={address}>{text}</a>
          </MjText>
        </tbody>
      </table>
    )
  }
}

registerElement('location', Location, { endingTags: true })
export default Location
