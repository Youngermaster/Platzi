import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from "prop-types";

const Greet = (props) => {
  return (
    <View>
      <Text>Hello {props.firstname ?? 'John 1'} {props.lastname ?? 'Doe 2'}</Text>
    </View>
  )
}

export default Greet;

Greet.defaultProps = {
  firstname: 'John',
  lastname: 'Doe',
};

Greet.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
};