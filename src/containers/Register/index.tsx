import { useState } from 'react';
import { AccountInformation, AddressInformation, PersonalInformation } from '../../containers';
import * as yup from 'yup'; 
import { Button } from 'antd';

const validationSchema = yup.object({
    username: yup.string().required('Please Enter Your Username'),
    password: yup.string().required('Please Select Your Password'),
})

const Register = () => {

    const handleSubmit = (values: RegistrationInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    const [page, setPage] = useState<number>(0);

    const handleNext = () => {
        if(page === 0 || page === 1) {
            setPage((prevPage) => prevPage + 1);
        }
        return
    }

    const handlePrev = () => {
        if(page === 1 || page === 2) {
            setPage((prevPage) => prevPage - 1);
        }
    
        return
    }

    return (
     <>
        <form onSubmit={handleSubmit}>
            {page === 0 && 
                <PersonalInformation />
            }
            {page === 1 && 
                <AddressInformation />
            }
            {page === 2 &&
                <AccountInformation />
            }

        </form>
     </>
    )

}

export default Register