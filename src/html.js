import React from "react"
import PropTypes from "prop-types"

const BUILD_TIME = new Date().getTime()

export default class HTML extends React.Component {

  static propTypes = {
    body: PropTypes.string,
  }

  render() {
    let css
    if (process.env.NODE_ENV === "production") {
      css = (
        <style
          dangerouslySetInnerHTML={{
            __html: require("!raw!../public/styles.css"),
          }} />
      )
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0" />
          {this.props.headComponents}
          <link rel="stylesheet" href="https://unpkg.com/wingcss" />
          {css}
        </head>
        <body>
          <div id="container" />
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
          <script src={__PATH_PREFIX__ + '/nodegarden.js'}></script>
        </body>
      </html>
    )
  }
}