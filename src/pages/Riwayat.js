import '../css/Riwayat.css';
import Search from '../components/Search';
import { useEffect, useState } from 'react';
import API from '../API';
import Swal from 'sweetalert2';

function Riwayat() {
    const [riwayat, setRiwayat] = useState([]);
    const [user, setUser] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [data, setData] = useState([]);

    useEffect(() => {
        const user_id = localStorage.getItem('user');
        if (user_id) {
            setUser(user_id);

            API.get('/order').then(res => {
                setRiwayat(res.data);
                
            }).catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Gagal memuat data',
                    text: 'Harap melakukan login terlebih dahulu'
                });
            });
        }
    }, []);

    return (
        <div className='riwayat'>
            <div className='riwayat-header'>
                <div className='riwayat-label'>
                    <section>
                        <h2>Riwayat</h2>
                        <p>Semua riwayat transaksi</p>
                    </section>
                    <button className='edit-btn'>Edit</button>
                </div>
                <div className='search-wrapper'>
                    <Search />
                    <div className='show-result'>
                        <p>Show result</p>
                        <button>5<i className='fa-solid fa-angle-down'></i></button>
                    </div>
                </div>
            </div>
            <div className='riwayat-table'>
                <table>
                    <thead>
                        <th>Tanggal</th>
                        <th>Nama</th>
                        <th>Jumlah</th>
                        <th>Aksi</th>
                    </thead>
                    {riwayat.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.time_book}</td>
                                <td>{item.name}</td>
                                <td>{item.amount}</td>
                                <td>
                                    <div className='actions'>
                                        <i className='fa-regular fa-envelope'></i>
                                        <i className='fa-solid fa-list-check'></i>
                                        <i className='fa-regular fa-circle-xmark'></i>
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </table>
                <div className='next-prev'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}

export default Riwayat;