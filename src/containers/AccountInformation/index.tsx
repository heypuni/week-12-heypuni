import { Text } from '../../components'
import { Input, Button } from 'antd';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface AccountInfo {
    username?: string;
    password?: string;
}

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object({
    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required('Please Select Your Password'),
})

const AccountInformation = () => {
    const [page, setPage] = useState<number>(1);

     const handlePrev = () => {
    if(page === 2 || page === 3) {
        setPage((prevPage) => prevPage - 1);
    }

    return
}

    const handleSubmit = (values: AccountInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
    <form>
    <div>
      <Text>Username</Text>
        <Input name="username" placeholder="Your username here" autoComplete='username'            
        value={formMik.values.username} 
        onChange={formMik.handleChange('username')}
        status={formMik.errors.username && 'error'}/>
           
        {formMik.errors.username && (
            <Text>{formMik.errors.username}</Text>
        )}
    </div>

    <div>
      <Text>Password</Text>
      <Password 
      value={formMik.values.password} 
      onChange={formMik.handleChange('password')}
      status={formMik.errors.password && 'error'}/>

      {formMik.errors.password && (
          <Text> {formMik.errors.password} </Text>
      )}
    </div>

    <Button onClick={handlePrev}>Previous</Button>
    <Button  htmlType='submit' type="primary" 
        onClick={() => {
            if (!formMik.values.username) {
                  formMik.setFieldError('username', 'Please enter your Username');
            } if (!formMik.values.password) {
                  formMik.setFieldError('email', 'Please enter your Password');
            return
          } 
        }} >
        Submit
    </Button>

    </form>
  )
};


export default AccountInformation