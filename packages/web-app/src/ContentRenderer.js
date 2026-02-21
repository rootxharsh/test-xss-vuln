import React from 'react';
import PropTypes from 'prop-types';

/**
 * A component for rendering HTML content from a string.
 *
 * This component is designed to display rich text or other formatted
 * content that is provided as a raw HTML string. It uses a specific
 * React feature to parse and render the HTML.
 *
 * Note: Rendering HTML from a string can be risky if the source
 * is not trusted, as it can expose the application to cross-site
 * scripting (XSS) attacks.
 *
 * @param {object} props - The component's props.
 * @param {string} props.htmlContent - The HTML string to be rendered.
 */
function ContentRenderer({ htmlContent }) {
  // This function creates an object that React uses to render the HTML.
  // The name is a reminder of the potential security implications.
  const createMarkup = () => {
    return { __html: htmlContent };
  };

  return (
    <div className="content-renderer-wrapper" style={{ marginTop: '20px' }}>
      <h4 style={{ borderBottom: '1px solid #eee', paddingBottom: '5px' }}>
        Output from ContentRenderer.js (using dangerouslySetInnerHTML):
      </h4>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  );
}

// Define the prop types for the component for good practice and clarity.
ContentRenderer.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default ContentRenderer;
