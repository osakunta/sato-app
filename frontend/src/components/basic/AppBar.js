import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MaterialAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import colors from 'styles/colors';
import Container from 'components/basic/Container';

const StyledAppBar = styled(MaterialAppBar)`
  background-color: ${colors.primary};
`;

const StyledToolbar = styled(Toolbar)`
  padding: 0;
`;

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

function AppBar({ children }) {
  return (
    <>
      <ElevationScroll>
        <StyledAppBar>
          <Container>
            <StyledToolbar>
              {children}
            </StyledToolbar>
          </Container>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

AppBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AppBar;
