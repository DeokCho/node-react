import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

export default function (SpecificComponent, option, adminRoute=null){

    const dispatch = useDispatch()

    function AuthenticationCheck(props){
        useEffect(()=>{

            dispatch(auth())
                .then(response=>{
                    console.log(response)
                    // 로그인 하지 않은 상태
                    if(!response.payload.isAuth){
                        if(option){
                            props.history.push('/login')
                        }
                    }else{
                        // 로그인 한 상태
                        if(adminRoute && !response.payload.isAdmin){
                            if(option === false){
                                props.history.push('/')
                            }
                        }
                        
                    }
                })
        },[])

        return (
            <SpecificComponent/>
        )
    }
    return AuthenticationCheck
}