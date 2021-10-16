import React from 'react';
import PropTypes from 'prop-types';

import './text.scss';

export const Text = ({ size, label, muted, bold, ...props }) => {
    const color = muted ? 'sass-text--muted' : '';
    const weight = bold ? 'sass-text--bold' : '';

    return (
        <span
            className={['sass-text', `sass-text--${size}`, color, weight].join(' ')}
            {...props}
        >{label}</span>
    )
}

Text.propTypes = {
    label: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['heading', 'subheading', 'title', 'subtitle', 'body', 'description', 'small']),
    muted: PropTypes.bool,
    bold: PropTypes.bool,
}

Text.defaultProps = {
    size: 'description',
    muted: false,
    bold: false,
}