import Swal from 'sweetalert2'
//import { Navigate } from "react-router-dom";

import { fetchSinToken, fetchConToken } from '../helpers/fetch'
import { types } from '../types/types';


export const startLogin = ( username, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { username, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                username: body.username,
                roles: body.roles,
                avatar: body.avatar,
            }))
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startRegister = ( email, password, username ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth/new', { email, password, username }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({ //TODO: HACER QUE HAGA UN navigate() a confirmarEmail
                uid: body.uid,
                username: body.username,
                roles: body.roles,
                avatar: body.avatar,
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
    }
}

export const startChecking = () => {
    return async(dispatch) => {
        
        const tokenVerify = localStorage.getItem('token')
        
        if(tokenVerify){
            const resp = await fetchConToken( 'auth/renew' );
            const body = await resp.json();

            if( body.ok ) {
                localStorage.setItem('token', body.token );
                localStorage.setItem('token-init-date', new Date().getTime() );

                dispatch( 
                    login({
                        uid: body.uid,
                        username: body.username,
                        roles: body.roles,
                        avatar: body.avatar,
                    }) 
                )
            }
        } else {

            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });


const login = ( usuario ) => ({
	type: types.authLogin,
	payload: usuario
})

export const startLogout = () => {
    return( dispatch ) => {
        localStorage.clear();
        dispatch( logout() );
    }
}

const logout = () => ({ type: types.authLogout });