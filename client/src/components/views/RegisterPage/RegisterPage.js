import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {registerUser} from '../../../_actions/user_action'

const RegisterPage = (props) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const onEmailHandler = e => {
        setEmail(e.currentTarget.value)
    }

    const onNameHandler = e => {
        setName(e.currentTarget.value)
    }

    const onPasswordHandler = e => {
        setPassword(e.currentTarget.value)
    }

    const onConfirmPasswordHandler = e => {
        setConfirmPassword(e.currentTarget.value)
    }

    const onSubmitHandler = e => {
        if(password!==confirmPassword){
            return alert('비밀번호가 일치하지 않습니다.')
        }

        let body = {
            email : email,
            name : name,
            password : password
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.loginSucess){
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%', height:'100vh'}}>
            <form style={{display:'flex', flexDirection:'column'}} onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input type="email" value={email} onChange={onEmailHandler}/>

                <label>Name</label>
                <input type="text" value={name} onChange={onNameHandler}/>

                <label>Password</label>
                <input type="password" value={password} onChange={onPasswordHandler}/>

                <label>Password</label>
                <input type="password" value={confirmPassword} onChange={onConfirmPasswordHandler}/>
                <br/>
                <button>
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterPage;