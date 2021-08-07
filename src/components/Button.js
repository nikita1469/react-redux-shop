import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {

  const { onClick, className, children } = props
  
  return (
      <button 
        onClick={onClick}
        className={className}>
          {children}
      </button>
    )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button