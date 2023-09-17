import { ChangeEvent, FormEvent, useState } from 'react';
import { Table } from '../../components';

interface DataUser {
    name?: string;
    email?: string;
    gender?: 'M' | 'F';
    address?: string;
}

const Register = () => {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [gender, setGender] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [users, setUsers] = useState<DataUser[]>([]);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleChangeGender = (event: ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value)
    }

    const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setAddress(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setUsers((prevState) => [...prevState, {
            name: name,
            email: email,
            gender: 'M',
            address: address
        }])

    }


    const renderTableBody = () => {
        return (
            <>
                {users.map((v, index) => (
                    <tr key={index}>
                        <td>{v.name}</td>
                        <td>{v.email}</td>
                        <td>{v.gender}</td>
                        <td>{v.address}</td>
                    </tr>
                ))}
            </>
        )
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