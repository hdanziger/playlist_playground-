import React from 'react'

const Label = ({ htmlFor, title, name, value, change }) =>
  <div>
  <label htmlFor={ htmlFor }>{ title }</label>
    <input
      type="text"
      onChange={ change }
      name={ name }
      value={ value }
    />
  </div>

export default Label
