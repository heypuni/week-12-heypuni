import { ChangeEvent, FormEvent, useState } from 'react';
import { Table } from '../../components';

interface DataUser {
    name?: string;
    email?: string;
    gender?: 'M' | 'F';
    address?: string;
}

const Register = () => {

    const handleSubmit = (values: RegistrationInfo) => {
        console.log(values)
    }

    const formMik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        validationSchema: validationSchema
    })

    const [page, setPage] = useState<number>(1);

    const handleNext = () => {
        if(page === 1 || page === 2) {
            setPage((prevPage) => prevPage + 1);
        }
        return
    }

    const handlePrev = () => {
        if(page === 2 || page === 3) {
            setPage((prevPage) => prevPage - 1);
        }
    
        return
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} name="name" onBlur={handleChangeName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} name="email" onBlur={handleChangeEmail}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={gender} name="email" onBlur={handleChangeGender}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={address} name="email" onBlur={handleChangeAddress}/>
                </div>
                <button type="submit">Submit Form</button>
            </form>
            <Table headers={['Nama','Email', 'Gender', 'Address']} children={renderTableBody()} />
            <hr />9

        </>
    )

}

export default Register