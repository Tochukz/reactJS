import { connect } from 'react-redux';

import ColorDetails from '../components/color-details';

const mapStateToProp = (state, { match, history }) => {
  const color = state.colors.find(color => color.id === match.params.id);
  return {...color, history};
};

const ColorDetailsContainer = connect(mapStateToProp)(ColorDetails);

export default ColorDetailsContainer;