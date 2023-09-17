import './App.css'
import { useState } from 'react';
// import { Register } from './containers'
// import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
import { PersonalInformation, AddressInformation, AccountInformation } from './containers';


const App = () => {
  const [page, setPage] = useState<number>(0);

  const handleNext = () => {
    if(page === 0 || page === 1) {
        setPage((prevPage) => prevPage + 1);
    }

    return (
      <>
      <PersonalInformation />
      </>
    )
  }

  const handlePrev = () => {
    if(page === 2 || page === 3) {
        setPage((prevPage) => prevPage - 1);
    }

    return (
      <>
      <AddressInformation />
      </>
    )
  }

  return (
    <>
      <AccountInformation />
    </>
  )
}




export default App