import { Dispatch, SetStateAction, ChangeEvent } from "react";


interface DataUser {
    name?: string;
    email?: string;
    dateOfBirth?: string;

    address: string;
    state: string;
    city: string;
    zipcode: number;

    username: string;
    password: string;
}

interface Props {
    form?: DataUser;
    setForm: Dispatch<SetStateAction<DataUser | undefined >>;
    name? :string;
    setName: Dispatch<SetStateAction<DataUser | undefined >>;
    email? : string;
    setEmail: Dispatch<SetStateAction<DataUser | undefined >>;
}

const RegisterForm = ({form, setForm} : Props) => {
    console.log(form);
    const handleForm = (type: 'name' | 'email' | 'gender' | 'address') => (event: ChangeEvent<HTMLInputElement>) => {
        
        const tempForm: DataUser = {
            ...form,
            [type] : event.target.value
        }
        setForm(tempForm);
    }
    

    return (
        <form>
            <div>
                <label>Name</label>
                <input type="text" value={form?.name} name="name" onBlur={handleForm('name')} />
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={form?.email} name="email" onBlur={handleForm('email')}/>
            </div>
            <div>
                <label>Gender</label>
                <input type="text" value={form?.gender} name="gender" onBlur={handleForm('gender')}/>
            </div>
            <div>
                <label>Address</label>
                <input type="text" value={form?.address} name="address" onBlur={handleForm('address')}/>
            </div>
            <button type="submit">Submit Form</button>
        </form>
    )
}

export default RegisterForm