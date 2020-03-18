import React from 'react';
import PropTypes from 'prop-types';

const Dash = props => {
  const { color, size, ...others } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" {...others}>
      <path d="M3.211 9.967c-2.29 0-2.617 1.49-2.832 2.393C.093 13.538 0 14.02 0 14.02h8.947c2.29 0 2.617-1.492 2.832-2.394.285-1.178.379-1.66.379-1.66zM15.72 2.259H6.983L6.26 6.307l7.885.01c3.885 0 5.03 1.41 4.997 3.748-.019 1.196-.537 3.225-.762 3.884-.598 1.753-1.827 3.749-6.436 3.744l-7.666-.004-.725 4.052h8.718c3.076 0 4.38-.36 5.768-.995 3.071-1.426 4.899-4.455 5.633-8.41C24.76 6.448 23.404 2.26 15.72 2.26Z" />
    </svg>
  );
};

Dash.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Dash;
