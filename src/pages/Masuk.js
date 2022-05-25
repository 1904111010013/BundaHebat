import SignDecoration from "../components/SignDecoration";
import { NavLink } from "react-router-dom";
import '../css/Sign.css';
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import API from '../API';
import { CircularProgress } from "@mui/material";
import jwt from 'jwt-decode';

function Masuk() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const masuk = async (e) => {
        setLoading(true);
        e.preventDefault();
        await API.post('/user/login', data).then(res => {
            localStorage.setItem('token', res.data);
            localStorage.setItem('user', jwt(res.data)._id);
            setLoading(false);
            navigate('/');
            window.location.reload();
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Login gagal',
                text: err.response.data
            });
            setLoading(false);
        });
    };
    return (
        <div className='sign'>
            <SignDecoration />
            <div className='sign-box'>
                <div className='sign-menu'>
                    <NavLink to='/masuk'>Masuk</NavLink>
                    <NavLink to='/daftar'>Daftar</NavLink>
                    <NavLink to='/reset-password'>Lupa Password</NavLink>
                </div>
                <form onSubmit={masuk}>
                    <label htmlFor='email'>Alamat Email</label>
                    <input type='email' name='email' required onChange={e => setData({...data, email: e.target.value})} />
                    <label htmlFor='password'>Kata Sandi</label>
                    <input type='password' name='password' required onChange={e => setData({...data, password: e.target.value})} />
                    <button>LOGIN {loading ? <CircularProgress color="inherit" size={20} /> : ''}</button>
                </form>
                <p>Atau Daftar Melalui</p>
                <div className='metode-lain'>
                    <button><i className="fa-brands fa-facebook-f"></i>LOGIN WITH FACEBOOK</button>
                    <button><i className="fa-brands fa-google"></i>LOGIN WITH GOOGLE</button>
                </div>
                <p>Belum memiliki akun? Daftar <NavLink to='/daftar'>disini</NavLink></p>
            </div>
        </div>
    );
}

export default Masuk;