import { useState,useEffect } from "react"



export function Login(){
    const [signIn,setSignIn]=useState({});
    const [status,setStatus]=useState(false)
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    function submit(e){     
        e.preventDefault()
        // console.log(email,password)
        let data={email,password};
        fetch('https://reqres.in/api/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json())
        .then((recievedData)=>{setSignIn(recievedData);console.log(recievedData)})

    }
    useEffect(()=>{
        if(signIn.token=='QpwL5tke4Pnpja7X4'){
            setStatus(true)
            console.log(true)
        }
    },[signIn])


    return(
        <>
            <form onSubmit={submit}>
            

                <input 
                type='text'
                placeholder="email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input
                type='text'
                placeholder="password"
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                />
                <input type='submit'/>
            </form>
        </>
    )
}