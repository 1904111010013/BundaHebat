import SignDecoration from "../components/SignDecoration";
import { NavLink, useNavigate } from "react-router-dom";
import '../css/Sign.css';
import API from '../API';
import { useState } from "react";
import Swal from "sweetalert2";
import { CircularProgress } from "@mui/material";

function Daftar() {
    const [data, setData] = useState({
        front_name: '',
        back_name: '',
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const daftar = async (e) => {
        setLoading(true);
        e.preventDefault();
        await API.post('/user/register', data).then(res => {
            Swal.fire({
                icon: 'success',
                title: 'Daftar berhasil!',
                timer: 3000
            });
            setLoading(false);
            navigate('/masuk');
        }).catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Registrasi gagal',
                text: err.response.data.message
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
                <form onSubmit={daftar}>
                    <div className='row'>
                        <div className='col'>
                            <label htmlFor='nama-depan'>Nama Depan</label>
                            <input type='text' name='nama-depan' required onChange={e => setData({...data, front_name: e.target.value})} />
                        </div>
                        <div className='col'>
                            <label htmlFor='nama-belakang'>Nama Belakang</label>
                            <input type='text' name='nama-belakang' onChange={e => setData({...data, back_name: e.target.value})} />
                        </div>
                    </div>
                    <label htmlFor='email'>Alamat Email</label>
                    <input type='email' name='email' required onChange={e => setData({...data, email: e.target.value})} />
                    <label htmlFor='password'>Buat Kata Sandi</label>
                    <input type='password' name='password' required onChange={e => setData({...data, password: e.target.value})} />
                    <div className='syarat-setuju'>
                        <input type='checkbox' name='setuju' required />
                        <span>Saya setuju dengan <a href="#">syarat & ketentuan</a></span>
                    </div>
                    <button>DAFTAR {loading ? <CircularProgress color="inherit" size={20} /> : ''}</button>
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

export default Daftar;