import React from 'react';

const Image = props => <img src = { props.path } alt = "" height = { props.height }></img>

Image.defaultProps = {
  height: 'auto'
}

export default Image;