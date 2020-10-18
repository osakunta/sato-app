import styled from 'styled-components';
import MaterialButton from '@material-ui/core/Button';

const Button = styled(MaterialButton)`
  ${(props) => (props.variant ? '' : 'color: inherit;')}
  font-weight: bold;
`;

export default Button;
