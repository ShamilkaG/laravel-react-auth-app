import React, {useState} from "react";
import SignInForm from "./SignInForm.tsx";
import type {ISignInState} from "../../utilities/types/signIn/SignIn";
import {UserSignIn} from "../../utilities/api/auth/UserSignIn.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store.tsx";

// interface ISignInState {
//     email: string,
//     password: string,
// }
const SignIn: React.FC = () => {
    const [signInDetails, setSignInDetails] = useState<ISignInState>({
        email: '',
        password: '',
    })

    const dispatch = useDispatch<AppDispatch>()

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
       // return await axios.get('/sanctum/csrf-cookie').then(res => {
       //      const response =  axios.post('api/sign-in',signInDetails)
       //      // if endpoint will fail
       //      console.log(response)
       //  });
        // endpoint call

       await dispatch(UserSignIn({signInDetails}))

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
