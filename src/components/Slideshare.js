import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Slideshare = forwardRef(function Slideshare(
  { color = 'currentColor', size = 24, title = 'SlideShare', ...others },
  ref
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      ref={ref}
      {...others}>
      <title>{title}</title>
      <path d="M3.222.058c-1.46 0-2.162 1.127-2.162 2.287v7.883c-.53-.502-1.096-.15-1.058.295.038.439.59 1.546 1.436 2.517.843.968 1.924 1.776 2.94 2.268a11.19 11.19 0 0 0-.491 3.598c.09 1.096.378 1.95.903 2.75.918 1.407 2.32 1.985 3.674 1.985 1.209 0 2.494-.563 2.698-2.373v-4.694c1.308.552 3.47.363 4.47-.39.19-.14.326-.207.416-.113.095.09.106.166-.113.439a5.6 5.6 0 0 1-3.103 1.965l.008 2.72a2.532 2.532 0 0 0 2.543 2.446c1.64.015 2.48-.556 3.148-1.164.632-.567 1.399-1.754 1.558-3.243a10.128 10.128 0 0 0-.454-3.926 10.358 10.358 0 0 0 2.948-2.268c.63-.691 1.417-2.007 1.417-2.517 0-.51-.556-.782-1.036-.302V2.345c0-.824-.48-2.29-2.135-2.29zm.423 1.35H20.41c.756 0 1.171.28 1.171 1.224v8.904a8.73 8.73 0 0 1-3.556 1.534c-1.606.352-2.94.087-3.666.148-.718.06-1.428.529-1.296 1.791-.491-.155-1.236-.684-1.682-1.118-.438-.428-.87-.711-1.534-.692-1.013.03-1.663.102-2.57.011a9.656 9.656 0 0 1-4.838-1.787V2.628c0-.869.378-1.22 1.206-1.22zm4.497 4.988a2.993 2.993 0 1 0 0 5.987 2.993 2.993 0 0 0 0-5.983zm7.71 0a2.993 2.993 0 1 0 0 5.987 2.993 2.993 0 0 0 0-5.983z" />
    </svg>
  );
});

Slideshare.propTypes = {
  /**
   * Hex color or color name
   */
  color: PropTypes.string,
  /**
   * The size of the Icon.
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The title provides an accessible short text description to the SVG
   */
  title: PropTypes.string,
};

export default Slideshare;
