import { Text } from '../../components'
import { Input, Button } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface Info {
    name?: string;
    email?: string;
    dateOfBirth?: string;
}

interface Props {
    handlePrev: () => void;
    handleNext: () => void;
}

const initialValues = {
    name: '',
    email: '',
    dateOfBirth: ''
}   

const validationSchema = yup.object({
    name: yup.string().required('Enter your full name'),
    email: yup.string().email('Invalid email').required('Required'),
    dateOfBirth: yup.string().matches(/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/, 'Date must be in format dd-mm-yyyy').required(
        'Enter your date of birth (dd-mm-yyyy)'),
})


const PersonalInformation = ( props: Props ) => {

    const handleSubmit = (values: Info) => {
        console.log(values);
        props.handleNext()
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    return (
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
        </>
        
    )
}

export default PersonalInformation;