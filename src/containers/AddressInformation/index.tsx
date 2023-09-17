import { Text } from '../../components'
import { Input } from 'antd';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface AddressInfo {
    address?: string;
    state?: string;
    city?: string;
    zipcode?: number;
}

const initialValues = {
    address: '',
    state: '',
    city: '',
    zipcode: 1
}

const validationSchema = yup.object({
    address: yup.string().required('Enter Your Street Address Here'),
    state: yup.string().required('Select Your State Here'),
    city: yup.string().required('Select Your City Here'),
    zipcode: yup.number().required('Enter your Zip Code Here'),
  })

const AddressInformation = () => {

    const handleSubmit = (values: AddressInfo) => {
      console.log(values)
    }
  
    const formMik = useFormik({
      initialValues: initialValues,
      onSubmit: handleSubmit,
      validationSchema: validationSchema
    })
  
      return (
          <form onSubmit={formMik.handleSubmit}>
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
              <Input 
              value={formMik.values.state} 
              onChange={formMik.handleChange('state')}
              status={formMik.errors.state && 'error'} />
  
              {formMik.errors.state && (
                  <Text> {formMik.errors.state} </Text>
              )}
            </div>
  

            <div>
              <Text >City</Text>
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
              
          </form>
      )
  }

export default AddressInformation