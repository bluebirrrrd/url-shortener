import React from "react";
import PropTypes from "prop-types";
import "./URLblock.css";

class URLblock extends React.Component {
  render() {
    return (
      <div className="urlBlock">
        <p>
          <span class="originalUrl">{this.props.originalUrl}</span>
          <span class="shortenedUrl">{this.props.shortenedUrl}</span>
          <button className="copyButton">Copy</button>
        </p>
      </div>
    );
  }
}

URLblock.propTypes = {
  originalUrl: PropTypes.string,
  shortenedUrl: PropTypes.string,
};

export default URLblock;
