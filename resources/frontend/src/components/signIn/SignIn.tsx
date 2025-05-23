import React, {useState} from "react";
import SignInForm from "./SignInForm.tsx";
import type {ISignInState} from "../../utilities/types/signIn/SignIn";
import axios from "axios";

// interface ISignInState {
//     email: string,
//     password: string,
// }
const SignIn: React.FC = () => {
    const [signInDetails, setSignInDetails] = useState<ISignInState>({
        email: '',
        password: '',
    })

    // const handleInputField = (event) => { //normal way
    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) :void => { // purpose of using type script is identify
        // correct details such as type of html input field, data type of the input, return type is void(no return)
        const {name,value} = event.target

        // console.log(name,value)
        setSignInDetails((prevState) =>({
            ...prevState,
            [name]: value
        }))
    }
    // console.log(signInDetails)
    const handleSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
        // console.log('sss')
        // console.log(signInDetails)

        // definately first must be call following api - specially login form
       return await axios.get('/sanctum/csrf-cookie').then(res => {
            const response =  axios.post('http://127.0.0.1:8000/api/sign-in',signInDetails)
            // if endpoint will fail
            console.log(response)
        });
        // endpoint call

    }

    return (
        // <div>
        //     Sign In Component
        // </div>
        <SignInForm handleInputField={handleInputField}
                    handleSubmit={handleSubmit}/>
    );
};

export default SignIn;
