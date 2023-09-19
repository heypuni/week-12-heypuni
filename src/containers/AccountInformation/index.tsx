import { Password, Text } from '../../components'
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface AccountInfo {
    username?: string;
    password?: string;
}

interface Props {
    handlePrev: () => void;
    handleNext: () => void;
}

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object({
    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required('Please Enter Your Password'),
})

const AccountInformation = ( props: Props ) => {

    const handleSubmit = ( e: AccountInfo ) => {
        console.log(e)
        // e?.preventDefault()
        // props.handleNext()
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
      <Password placeholder="Your Password Here"
      value={formMik.values.password} 
      onChange={formMik.handleChange('password')}
      status={formMik.errors.password && 'error'}/>

      {formMik.errors.password && (
          <Text> {formMik.errors.password} </Text>
      )}
    </div>

    <Button onClick={props.handlePrev}>Previous</Button>
    <Button type="primary" 
        onClick={() => {
            if (!formMik.values.username) {
                  formMik.setFieldError('username', 'Please enter your Username');
            } if (!formMik.values.password) {
                  formMik.setFieldError('password', 'Please enter your Password');
          } 
          formMik.handleSubmit()
        }} 
        >
        Submit
    </Button>

    </form>
  )
};


export default AccountInformation