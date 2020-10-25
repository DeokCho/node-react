import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import {withRouter} from 'react-router-dom'

const LandingPage = props => {
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => {console.log(response.data)})
    },[])

    const onLogoutHandler = () => {
        axios.get('/api/logout')
            .then(response => {
                if(response.data.success){
                    props.history.push('/')
                    alert('로그아웃 완료')
                }else{
                    alert('로그아웃 실패')
                }
            })
    } 

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', width: '100%', height:'100vh'}}>
                <h2>시작페이지</h2>
                <button>
                    <Link to="/login">로그인</Link>    
                </button>
                <button onClick={onLogoutHandler}>로그아웃</button>

            </div>
        </div>

    );
};

export default withRouter(LandingPage);