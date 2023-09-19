import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { Password, Text } from '../../components'
import { Button, Input } from 'antd';

interface RegistInfo {
    name: string;
    email: string;
    dateOfBirth: string;

    address: string,
    state: string,
    city: string,
    zipcode: number

    username: string;
    password: string;
}

interface Props {
    handlePrev: () => void;
    handleNext: () => void;
}

const initialValues = {
    name: '',
    email: '',
    dateOfBirth: '',

    address: '',
    state: '',
    city: '',
    zipcode: 1,

    username: '',
    password: ''
}   

const validationSchema = yup.object({
    name: yup.string().required('Enter your full name'),
    email: yup.string().email('Invalid email').required('Required'),
    dateOfBirth: yup.string().matches(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/, 'Date must be in format dd-mm-yyyy').required(
        'Enter your date of birth (dd-mm-yyyy)'),

    address: yup.string().required('Input Your Street Address Here'),
    state: yup.string().required('Input Your State Here'),
    city: yup.string().required('Input Your City Here'),
    zipcode: yup.number().required('Input your Zip Code Here'),

    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required('Please Enter Your Password'),
})


const Register = ( props: Props )  => {

    const [page, setPage] = useState<number>(0);

    const handlePrev = () => {
    if(page >= 0) {
        setPage((prevPage) => prevPage - 1);
    }

    return
    }

    const handleNext = () => {
      if(page <= 2) {
      setPage((nextPage) => nextPage + 1);
    }

    return
    }

    const handleSubmit = (values: RegistInfo) => {
        console.log(values);    
        props.handleNext()
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
        <form onSubmit={formMik.handleSubmit}>
          {page === 0 && (
           <>
            <div>
                <Text> Full Name </Text>
                <Input name={'name'} placeholder="Input your full name here"
                    value={formMik.values.name}
                    onChange={formMik.handleChange('name')}
                    status={formMik.errors.name && 'error'}/>
                {formMik.errors.name && (
                    <Text>{formMik.errors.name}</Text>
                )}
            </div>

            <div>
            <Text>Email</Text>
            <Input name="email" placeholder="Input your email here"
            value={formMik.values.email} 
            onChange={formMik.handleChange('email')}
            status={formMik.errors.email && 'error'} />

            {formMik.errors.email && (
                <Text>{formMik.errors.email}</Text>
            )}
          </div>

          <div>
            <Text>Date of Birth</Text>
            <Input name="dateOfBirth" placeholder="Input your birth date here" value={formMik.values.dateOfBirth} 
            onChange={formMik.handleChange('dateOfBirth')}
            status={formMik.errors.dateOfBirth && 'error'} />

            {formMik.errors.dateOfBirth && (
                <Text> {formMik.errors.dateOfBirth} </Text>    
            )}
          </div>
         </>
        )}

        {page === 1 && (
         <>
            <div>  
                <Text>Address</Text>
                <Input placeholder="Please Input Your Address" autoComplete='street-address'
                value={formMik.values.address} 
                onChange={formMik.handleChange('address')}
                status={formMik.errors.address && 'error'} />

                {formMik.errors.address && (
                    <Text> {formMik.errors.address}</Text>
                )}
            </div>

            <div>
                <Text>State</Text>
                <Input placeholder="Please Input Your State"
                value={formMik.values.state} 
                onChange={formMik.handleChange('state')}
                status={formMik.errors.state && 'error'} />

                {formMik.errors.state && (
                    <Text> {formMik.errors.state} </Text>
                )}
            </div>

            <div>
                <Text>City</Text>
                <Input name="city" placeholder="Please Input Your City" autoComplete='city'
                value={formMik.values.city} 
                onChange={formMik.handleChange('city')}
                status={formMik.errors.city && 'error'}/>

                {formMik.errors.city && (   
                    <Text> {formMik.errors.city} </Text>
                )}
            </div>  

            <div>
                <Text> Zip Code </Text>
                <Input placeholder="Zip Code" autoComplete='postal-code'
                value={formMik.values.zipcode}
                onChange = {formMik.handleChange('zipcode')}
                status={formMik.errors.zipcode && 'error'}/>

                {formMik.errors.zipcode && (
                    <Text> {formMik.errors.zipcode} </Text>
                )}
            </div>
          </>  
        )}

        { page === 2 && (
          <>
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
          </>    
        )}

            {page === 0 && (
                <div>
                <Button type="primary"
                    onClick={() => {
                        if (!formMik.values.name) {
                        formMik.setFieldError('name', 'Please Input  Your Name');
                    } if (!formMik.values.email) {
                        formMik.setFieldError('email', 'Please Input Your Email');
                    } if (!formMik.values.dateOfBirth) {
                        formMik.setFieldError('dateOfBirth', 'Please Input Your Birthdate [dd-mm-yyyy]');
                        return;
                    } else {
                        props.handleNext();
                    }
                    }} >
                    Next
                </Button>
                </div>
            )}

            {page === 1 && (
                <div>
                    <Button onClick={props.handlePrev} >Previous</Button>
                    <Button type="primary" 
                    onClick={() => {
                    if (!formMik.values.address) {
                    formMik.setFieldError('address', 'Please enter your Address');
                    } if (!formMik.values.state){
                    formMik.setFieldError('state', 'Please enter your State');
                    } if (!formMik.values.city){
                    formMik.setFieldError('city', 'Please enter your City');
                    } if (formMik.values.zipcode === 0){
                    formMik.setFieldError('zipcode', 'Please enter your Zip Code');
                    return;
                    } else {
                    props.handleNext();
                    }
                    }} >
                    Next
                    </Button>
                </div>
            )}

            { page === 2 && (
                <div>
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
                </div>
            )}
      </form>
    )
}

export default Register