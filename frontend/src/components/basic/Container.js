import React from 'react';
import PropTypes from 'prop-types';
import MaterialContainer from '@material-ui/core/Container';

function Container({ children }) {
  return (
    <MaterialContainer maxWidth="xl">
      {children}
    </MaterialContainer>
  );
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
