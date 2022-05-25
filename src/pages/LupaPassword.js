import SignDecoration from "../components/SignDecoration";
import { NavLink } from "react-router-dom";
import '../css/Sign.css';

function LupaPassword() {
    const reset = (e) => {
        e.preventDefault();
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
                <form onSubmit={reset}>
                    <p>Masukan alamat email Anda dibawah ini Anda akan menerima tautan untuk mengubah kata sandi Anda.</p>
                    <label htmlFor='email'>Alamat Email</label>
                    <input type='email' name='email' required />
                    <button>SEND</button>
                </form>
            </div>
        </div>
    );
}

export default LupaPassword;