import React, { useState } from 'react'

const Searchbar = ({ sendDataToParent }) => {
  let [searchData, setSearchData] = useState('')

  function handleInputChange(e) {
    const newdata = e.target.value;
    // console.log(newdata);
    sendDataToParent(newdata);
    setSearchData(newdata);
  }
  

  return (
    <div className='center'>
      <input onChange={(e) => {
         handleInputChange(e); 

      }} className='search'></input>
    </div>
  )
}

export default Searchbar
