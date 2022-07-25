import React, { useRef } from 'react'

const Searchbar = ({ setCity }) => {
  // setCity(() => 'dhaka')
  let inputField = useRef('')
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setCity(inputField.current.value)
    }} id="input-form" action="">
      <input
        ref={inputField}
        type="text"
        id="input-field"
        className="form-control my-3"
        placeholder="search for city"
      />
    </form>
  )
}

export default Searchbar