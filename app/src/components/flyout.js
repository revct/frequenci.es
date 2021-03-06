import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { above, gpuStyles } from '../style/mixins'
import { colours, spacing } from '../style/variables'

const Flyout = ({ children }) => {
  return (<Container>{children}</Container>);
};

export default Flyout

const Container = styled.section`
  align-items: center;
  background-color: ${colours.navigation.background_hover};
  box-sizing: border-box;
  color: ${colours.navigation.text};
  display: flex;
  flex-direction: column;
  flex: 1;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  overflow-y: auto;
  padding: ${spacing.default};
  width: calc(100vw - 32px - ${spacing.default} - ${spacing.default});

  ${gpuStyles``}

  ${above.md`
    min-height: auto;
    width: 24rem;
  `}
`

Flyout.propTypes = {
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}
